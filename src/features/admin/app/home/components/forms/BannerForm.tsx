import { useCallback, useEffect, useState } from "react";
import { Trash } from "lucide-react";
import FormRadioInput, { FormInputField, FormTextArea } from "@/shared/custom_form_components/FormFields"
import { useWatch, type Control, type UseFormSetValue } from "react-hook-form"
import type { MainFormValues } from "../../Types"
import { validateImageDimensions } from "@/shared/utils";
import { ShowToast } from "@/shared/ShowToast";
import FilesUpload from "@/shared/FilesUpload";

type BannerFormProps = {
    control: Control<MainFormValues>;
    setValue: UseFormSetValue<MainFormValues>;
}

interface SelectedFile {
    file: File;
    preview: string;
}

const BannerForm: React.FC<BannerFormProps> = ({ control, setValue }) => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);

    const bannerType = useWatch({
        control,
        name: "banner_type",
    });

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            if (acceptedFiles.length === 0) return;

            const validFiles: File[] = [];

            for (const file of acceptedFiles) {
                const isValid = await validateImageDimensions(file);

                if (isValid) {
                    validFiles.push(file);
                } else {
                    ShowToast(`${file.name} must be exactly 1080 × 1920 px`, 'error')
                }
            }

            // Nothing valid
            if (validFiles.length === 0) return;

            const newFiles: SelectedFile[] = validFiles.map((file) => ({
                file,
                preview: URL.createObjectURL(file),
            }));

            setSelectedFiles((prev) => {
                let updatedFiles: SelectedFile[];

                if (bannerType === "single") {
                    prev.forEach((item) => {
                        URL.revokeObjectURL(item.preview);
                    });

                    updatedFiles = [newFiles[0]];
                } else {
                    updatedFiles = [...prev, ...newFiles];
                }

                setValue(
                    "banner_images",
                    updatedFiles.map((item) => item.file),
                    {
                        shouldDirty: true,
                        shouldValidate: true,
                    }
                );

                return updatedFiles;
            });
        },
        [bannerType, setValue]
    );



    const handleRemove = (
        event: React.MouseEvent<HTMLButtonElement>,
        index: number
    ) => {
        event.stopPropagation();

        setSelectedFiles((prev) => {
            const fileToRemove = prev[index];

            if (fileToRemove?.preview) {
                URL.revokeObjectURL(fileToRemove.preview);
            }

            const updatedFiles = prev.filter(
                (_, i) => i !== index
            );

            setValue(
                "banner_images",
                updatedFiles.map((item) => item.file),
                {
                    shouldDirty: true,
                    shouldValidate: true,
                }
            );

            return updatedFiles;
        });
    };

    useEffect(() => {
        if (bannerType !== "single") return;

        setSelectedFiles((prev) => {
            if (prev.length <= 1) {
                return prev;
            }

            prev.slice(1).forEach((item) => {
                URL.revokeObjectURL(item.preview);
            });

            const updatedFiles = [prev[0]];

            setValue(
                "banner_images",
                updatedFiles.map((item) => item.file),
                {
                    shouldDirty: true,
                    shouldValidate: true,
                }
            );

            return updatedFiles;
        });
    }, [bannerType, setValue]);


    useEffect(() => {
        return () => {
            selectedFiles.forEach((item) => {
                URL.revokeObjectURL(item.preview);
            });
        };
    }, []);

    const selectedFile = selectedFiles[0];

    return (
        <div className="flex flex-col lg:flex-row gap-4 py-2">
            <div className="flex-1 flex flex-col gap-3">
                <p className="text-[#000000] font-saira text-[clamp(16px,1.2vw,1rem)]! font-medium">Banner</p>
                <div className="flex gap-4">
                    <div>
                        <FormRadioInput
                            name="banner_type"
                            control={control}
                            value="single"
                            label="Single"
                        />
                    </div>
                    <div>
                        <FormRadioInput
                            name="banner_type"
                            control={control}
                            value="multiple"
                            label="Multiple"
                        />
                    </div>
                </div>

                {/* Single Image Dropzone */}

                {
                    bannerType === "single" && (
                        <div className="relative w-full lg:w-1/2 min-h-32 max-h-32 h-32">
                            <FilesUpload
                                onFilesAccepted={onDrop}
                                maxFiles={1}
                                FileClassName="flex flex-col gap-1 items-center justify-center"
                                fileText="Click To Browse"
                                dimensionText="Dimension 1080px X 1920px"
                                className={selectedFile ? "border-none" : ""}
                                hasFiles={!!selectedFile}
                                acceptFiles={{
                                    "image/jpeg": [".jpg", ".jpeg"],
                                    "image/png": [".png"],
                                    "image/webp": [".webp"],
                                }}
                            />
                            {
                                selectedFile && (
                                    <>
                                        <div className="absolute inset-0 pointer-events-none">
                                            <img
                                                src={selectedFile.preview}
                                                alt={selectedFile.file.name}
                                                className="w-full h-full object-contain rounded-md"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(event) =>
                                                handleRemove(event, 0)
                                            }
                                            className="absolute top-1/2 -right-8 -translate-x-1/2 -translate-y-1/2
                                        w-8 h-8 rounded-full  text-white flex items-center justify-center text-sm bg-red-600
                                         hover:bg-red-700 transition-colors cursor-pointer shadow-lg"
                                        >
                                            <Trash size={20} />
                                        </button>
                                    </>
                                )
                            }
                        </div>
                    )
                }

                {/* Multiple Image Dropzone */}
                {bannerType === "multiple" && (
                    <>
                        <div className="w-full lg:w-1/2 min-h-32 h-32">
                            <FilesUpload
                                onFilesAccepted={onDrop}
                                multiple
                                FileClassName="flex flex-col gap-1 items-center justify-center"
                                fileText="Click To Browse"
                                dimensionText="Dimension 1080px X 1920px"
                                acceptFiles={{
                                    "image/jpeg": [".jpg", ".jpeg"],
                                    "image/png": [".png"],
                                    "image/webp": [".webp"],
                                }}
                            />
                        </div>

                        {/* Preview Images */}
                        {selectedFiles.length > 0 && (
                            <div className="w-full">

                                <p className="text-sm font-medium mb-2">
                                    Uploaded Images (
                                    {selectedFiles.length})
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                    {selectedFiles.map(
                                        (selectedFile, index) => (
                                            <div
                                                key={`${selectedFile.file.name}-${selectedFile.file.lastModified}-${index}`}
                                                className="
                                                    relative
                                                    group
                                                    rounded-lg
                                                    overflow-hidden
                                                    border
                                                    border-gray-200
                                                    bg-gray-100
                                                    
                                                "
                                            >
                                                {/* Image */}
                                                <img
                                                    src={selectedFile.preview}
                                                    alt={selectedFile.file.name}
                                                    className="w-full min-h-16 h-20 object-contain rounded-md"
                                                />

                                                {/* Remove */}
                                                <button
                                                    type="button"
                                                    onClick={(event) =>
                                                        handleRemove(
                                                            event,
                                                            index
                                                        )
                                                    }
                                                    className="absolute top-0 right-0 w-7 h-7 rounded-full bg-red-600
                                                        text-white flex items-center justify-center hover:bg-red-700
                                                         transition-colors cursor-pointer shadow-md"
                                                >
                                                    <Trash size={15} />
                                                </button>

                                                <div
                                                    className="
                                                        absolute
                                                        bottom-1
                                                        left-1
                                                        px-2
                                                        py-0.5
                                                        rounded
                                                        bg-black/60
                                                        text-white
                                                        text-xs
                                                    "
                                                >
                                                    {index + 1}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                )}

                <div className="flex flex-col gap-2  lg:pe-16!">
                    <FormTextArea
                        name="quote_one"
                        control={control}
                        label="Quote 1"
                        placeholder="Enter Quate"
                        rules={{ required: "required" }}
                    />
                    <FormTextArea
                        name="quote_two"
                        control={control}
                        label="Quote 2"
                        placeholder="Enter Quate"
                        rules={{ required: "required" }}
                    />

                </div>
            </div>
            <div className="border-b lg:border-r border-[#D4DFD5]" />
            <div className="flex-1 flex flex-col gap-2 ">
                <div className="px-4 lg:px-10">
                    <FormInputField
                        label="Pure Indian Breeds"
                        name="pure_indian_breeds"
                        placeholder="Pure Indian Breeds"
                        control={control}
                        rules={{ required: "required" }}
                    />
                </div>
                <div className="px-4 lg:px-10">
                    <FormInputField
                        label="Dedicated Gausewaks"
                        name="dedicated_gausewaks"
                        placeholder="Dedicated Gausewaks"
                        control={control}
                        rules={{ required: "required" }}
                    />
                </div>
                <div className="px-4 lg:px-10">
                    <FormInputField
                        label="Hectares Of Grazing Land"
                        name="hectares_of_grazing_land"
                        placeholder="Hectares Of Grazing Land"
                        control={control}
                        rules={{ required: "required" }}
                    />
                </div>
                <div className="px-4 lg:px-10">
                    <FormInputField
                        label="Indigenous Cows"
                        name="indigenous_cows"
                        placeholder="Indigenous Cows"
                        control={control}
                        rules={{ required: "required" }}
                    />
                </div>
                <div className="px-4 lg:px-10">
                    <FormInputField
                        label="Years Of Service"
                        name="years_of_service"
                        placeholder="Years Of Service"
                        control={control}
                        rules={{ required: "required" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default BannerForm
