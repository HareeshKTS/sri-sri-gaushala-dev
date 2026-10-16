import { useCallback, useEffect, useState } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon, Trash2, X } from "lucide-react";
import { ShowToast } from "@/shared/ShowToast";
import { FormInputField, FormTextArea } from "@/shared/custom_form_components/FormFields";
import { GetErrorMessage } from "@/shared/utils";
import CustomButton from "@/shared/CustomButton";
import { Card } from "@/components/ui/card";
const MAX_SIZE = 2 * 1024 * 1024;
const schema = z.object({
    image: z.instanceof(File, { message: "required" }),
    subject: z.string().trim().min(1, "required"),
    description: z.string().trim().min(1, "required"),
});

export type KeyActivityFormValues = z.infer<typeof schema>;
type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    IsEditModal?: boolean
    selected?: any
};

const AddEditGausewa = ({ open, onOpenChange, IsEditModal, selected }: Props) => {
    const [preview, setPreview] = useState<string | null>(null);
    console.log(selected);

    const {
        handleSubmit,
        control,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<KeyActivityFormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            subject: "",
            description: "",
        },
    });

    const image = watch("image");
    useEffect(() => {
        if (open) reset({ subject: "", description: "" });
    }, [open, reset]);
    useEffect(() => {
        if (!image) {
            setPreview(null);
            return;
        }
        const url = URL.createObjectURL(image);
        setPreview(url);
        return () => URL.revokeObjectURL(url);
    }, [image]);

    const onDrop = useCallback(
        (accepted: File[]) => {
            const file = accepted[0];
            if (!file) return;
            setValue("image", file, { shouldValidate: true, shouldDirty: true });
        },
        [setValue]
    );
    const onDropRejected = useCallback((rejections: FileRejection[]) => {
        const code = rejections[0]?.errors[0]?.code;
        const message =
            code === "file-too-large"
                ? "Image must be 2MB or smaller"
                : code === "too-many-files"
                    ? "Please upload only one image"
                    : "Only JPG, PNG or WEBP images are allowed";
        ShowToast(message, "error");
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        onDropRejected,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            "image/webp": [".webp"],
        },
        maxSize: MAX_SIZE,
        multiple: false,
    });

    const onSubmit = async (values: KeyActivityFormValues) => {
        try {
            const formData = new FormData();
            formData.append("image", values.image);
            formData.append("subject", values.subject);
            formData.append("description", values.description);
            console.log(Object.fromEntries(formData.entries()));
            ShowToast("Key activity added successfully", "success");
            onOpenChange(false);
        } catch (error) {
            ShowToast(GetErrorMessage(error), "error");
        }
    };

    const removeImage = () => {
        // @ts-expect-error: clearing the field, schema validates it as required on submit
        setValue("image", undefined, { shouldValidate: true, shouldDirty: true });
    };
    return (
        <div className="min-w-[80vw]  lg:min-w-[30vw] lg:max-w-[30vw]  min-h-[45vh] h-[80vh] flex flex-col overflow-auto">
            <div className="w-full flex flex-col bg-white  px-2 ">
                <div className="flex items-center justify-between ">
                    <div>
                        <p className="text-green-theme font-gotham tracking-[0.09px] text-base font-semibold">{IsEditModal ? 'Edit Key Activity' : 'Add Key Activity'}</p>
                    </div>
                    <div>
                        <button
                            onClick={() => onOpenChange(false)}
                            className='bg-transparent outline-0 cursor-pointer'
                        >
                            <X color="#0f172a" strokeWidth={2.25} size={30} />
                        </button>
                    </div>
                </div>
            </div>
            <Card className="overflow-auto shadow rounded-lg my-1 flex flex-col flex-1" >
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 overflow-auto flex-1 py-1 px-2">
                    <div className="relative flex flex-col min-h-40 max-h-40 h-40  gap-4">
                        {preview ? (
                            <div className="absolute inset-0 ">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="h-full w-full object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={removeImage}
                                    aria-label="Remove image"
                                    className="absolute -bottom-3 left-1/2 flex w-8 h-8 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white shadow hover:bg-red-700"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ) : (
                            <div
                                {...getRootProps()}
                                className={`flex  min-h-40 max-h-40 h-40 w-full cursor-pointer flex-col items-center justify-center gap-0.5 rounded-md border-2 border-dashed px-2 text-center transition-colors
                                    ${errors.image ? "border-red-500" : "border-green-theme/60"}
                                    ${isDragActive ? "bg-[#dcfce7]" : "bg-[#f0fdf4] hover:bg-[#e6f9ec]"}`}
                            >
                                <input {...getInputProps()} />
                                <ImageIcon size={25} fill="black" color="#fff" className="w-10" />
                                <p className="text-[14px] font-semibold text-green-theme">
                                    Image Here
                                </p>
                                <p className="text-[12px] text-gray-400">
                                    Upload A Clear Image Of The Breed
                                </p>
                                <p className="text-[14px] font-semibold text-green-theme">
                                    Drag &amp; Drop Image Here Or Click To Browse
                                </p>
                                <p className="text-[12px] text-gray-400">
                                    JPG, PNG Or WEBP (Max. 2MB)
                                </p>
                            </div>
                        )}

                    </div>
                    {errors.image && !preview && (
                        <p className=" text-[11px] text-red-600 pl-4">
                            {errors.image.message}
                        </p>
                    )}
                    <div className="flex-1 flex flex-col gap-4 ">

                        <div className="flex flex-col gap-1">
                            <FormInputField
                                label="Subject"
                                name="subject"
                                placeholder=""
                                control={control}
                                rules={{ required: "required" }}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <FormTextArea
                                name="description"
                                control={control}
                                label="Description"
                                placeholder=""
                                className="min-h-28"
                                rules={{ required: "required" }}
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 justify-end py-2">
                        <CustomButton
                            onClick={() => onOpenChange(false)}
                            type="button"
                            Text="Cancel"
                            TextClassName="text-sm! font-medium!"
                            className='w-fit! py-0.5! px-4! bg-white! border! border-[#ff0000]! text-[#ff0000]! rounded-sm bg-blue-theme!'
                        />
                        <CustomButton
                            type="submit"
                            Text="Submit"
                            TextClassName="text-sm! font-medium!"
                            className='w-fit! py-0.5! px-4! bg-green-theme! rounded-sm bg-blue-theme!'
                        />
                    </div>
                </form>
            </Card>

        </div>
    )
}

export default AddEditGausewa
