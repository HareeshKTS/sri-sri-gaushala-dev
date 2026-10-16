import { useCallback, useState } from "react";
import type { GalleryBannerValues } from "../Types";
import { Card } from "@/components/ui/card";
import CustomButton from "@/shared/CustomButton";
import FilesUpload from "@/shared/FilesUpload";
import { Trash } from "lucide-react";
import { FormInputField, FormTextArea } from "@/shared/custom_form_components/FormFields";
import { useForm } from "react-hook-form";

interface SelectedBanner {
    file: File;
    preview: string;
}

const AddBanner = () => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedBanner[]>([]);

    const { control, trigger, handleSubmit } = useForm<GalleryBannerValues>({
        defaultValues: {
            heading: "",
            quote: ""
        },
        mode: "onChange"
    });

    const handleHomeData = async (data: GalleryBannerValues) => {
        const isValid = await trigger();
        if (!isValid) return;
        const payload = {
            heading: data.heading,
            quote: data.quote,
        }
        console.log(payload, 'payload');
    }


    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length === 0) return;
            const file = acceptedFiles[0];

            const newFile: SelectedBanner = {
                file,
                preview: URL.createObjectURL(file),
            };
            if (selectedFiles[0]?.preview) {
                URL.revokeObjectURL(selectedFiles[0].preview);
            }
            setSelectedFiles([newFile]);
        },
        [selectedFiles]
    );

    const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (selectedFiles[0]?.preview) {
            URL.revokeObjectURL(selectedFiles[0].preview);
        }
        setSelectedFiles([]);
    };

    const selectedFile = selectedFiles[0];
    return (
        <Card className="border! border-[#4caf50]! rounded-md! py-4 px-4">
            <form onSubmit={handleSubmit(handleHomeData)} className=" flex flex-col gap-2">
                <div className="flex justify-between">
                    <p className="font-saira font-normal text-sm text-[#4caf50]">Gallery Top Banner</p>
                    <CustomButton
                        type="submit"
                        Text="Submit"
                        TextClassName="text-sm! font-medium!"
                        className='w-fit! py-0.5! px-4! bg-green-theme! rounded-sm bg-blue-theme!'
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="relative w-full lg:w-[30%] min-h-40 max-h-40 h-40">
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
                                            handleRemove(event)
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
                    <div className="w-full lg:w-[70%] flex flex-col gap-2">
                        <FormInputField
                            label="Heading"
                            name="heading"
                            placeholder="Heading"
                            control={control}
                            rules={{ required: "required" }}
                        />
                        <FormTextArea
                            name="quote"
                            control={control}
                            label="Quote"
                            placeholder="Enter Description"
                            rules={{ required: "required" }}
                        />
                    </div>
                </div>
            </form>
        </Card>
    )
}

export default AddBanner
