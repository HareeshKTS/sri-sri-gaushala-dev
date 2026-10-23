import { useCallback, useState, type Dispatch, type SetStateAction } from "react"
import type { AddEditTypes } from "../../Types";
import { useForm } from "react-hook-form";
import { Image, Trash, X } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Card } from "@/components/ui/card";
import { FormInputField } from "@/shared/custom_form_components/FormFields";
import CustomButton from "@/shared/CustomButton";
import CustomSelect from "@/shared/CustomSelect";


interface SelectedFile {
    file: File;
    preview: string;
}


type SelectAlbums = {
    label: string;
    value: string;
}

const albumItems: SelectAlbums[] = [
    { label: "one", value: "one" },
    { label: "Two", value: "Two" },
    { label: "Three", value: "Three" },
];


type AddEditProps = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const AddEditGallery = ({ setOpen }: AddEditProps) => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);


    const { control, trigger, handleSubmit } = useForm<AddEditTypes>({
        defaultValues: {
            album_name: "",
            create_album: "",
        },
        mode: "onChange"
    });

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length === 0) return;
            const file = acceptedFiles[0];
            const newFile: SelectedFile = {
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

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            'image/*': [],
        }
    });


    const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (selectedFiles[0]?.preview) {
            URL.revokeObjectURL(selectedFiles[0].preview);
        }
        setSelectedFiles([]);
    };


    const handleGalleryData = async (data: AddEditTypes) => {
        const isValid = await trigger();
        if (!isValid) return;
        const payload = {
            album_name: data.album_name,
            create_album: data.create_album,
        }
        console.log(payload, 'payload');
    }

    const selectedFile = selectedFiles[0];

    return (
        <div className="min-w-[80vw]  lg:min-w-[60vw] lg:max-w-[60vw]  min-h-[45vh] h-[60vh] flex overflow-auto">
            <div className="w-full flex flex-col bg-white  px-2">
                <div className="flex items-center justify-between py-2">
                    <div>
                        <p className="text-green-theme font-gotham tracking-[0.09px] text-base font-semibold">Add New Breed</p>
                    </div>
                    <div>
                        <button onClick={() => setOpen(false)} className='bg-transparent outline-0 cursor-pointer'>
                            <X color="#0f172a" strokeWidth={2.25} size={30} />
                        </button>
                    </div>
                </div>
                <Card className="overflow-auto px-2 shadow rounded-lg my-2 flex flex-col flex-1">
                    <form onSubmit={handleSubmit(handleGalleryData)} className="flex flex-col overflow-auto flex-1  py-1">
                        <div className="flex-1 flex flex-col lg:flex-row overflow-auto gap-4 px-2">
                            <div className="relative w-full  h-full flex-1 py-2">
                                <div
                                    {...getRootProps()}
                                    className={`relative border-2 border-dashed rounded-lg  w-full min-h-60 h-full
                                         ${selectedFile ? 'bg-white' : 'bg-[#f5fff5]'} border-[#4caf50] flex flex-col gap-2 items-center 
                                         justify-center cursor-pointer overflow-hidden`}
                                >
                                    <input {...getInputProps()} />

                                    {selectedFile ? (
                                        <>
                                            <div className="absolute inset-0 pointer-events-none">
                                                <img
                                                    src={selectedFile.preview}
                                                    alt={selectedFile.file.name}
                                                    className="w-full min-h-60 h-full object-contain rounded-md"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleRemove}
                                                className="absolute top-0 right-0 w-6 h-6 rounded-full bg-black/70
                                        text-white flex items-center justify-center text-sm hover:bg-red-600 transition-colors cursor-pointer"
                                            >
                                                <Trash size={18} />
                                            </button>
                                        </>
                                    ) : (
                                        <div className="font-gotham flex flex-col gap-1 leading-snug items-center justify-center p-4 bg-[#f5fff5]">
                                            <div className="flex flex-col gap-2 items-center">
                                                <Image size={40} color="#fff" fill="#000" />
                                                <p className=" text-base font-normal text-wrap text-center text-green-theme">
                                                    Upload New Image Or Video
                                                </p>
                                                <p className=" text-base font-normal text-wrap text-center text-green-theme">
                                                    Drag & drop image here or click to browse
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-4">
                                <div className="flex flex-col gap-2  my-2">
                                    <CustomSelect
                                        name="album_name"
                                        label="Album"
                                        options={albumItems}
                                        placeholder="Select Album"
                                        triggerClassName="rounded-sm! w-full h-[40px]!  text-[#4caf50]! border-input! focus:border-[#a2d5a4]!
                                         focus-visible:border-[#a2d5a4]! bg-[#F8F6F2]!"
                                        rules={{ required: "required" }}
                                    />
                                    <FormInputField
                                        label="Create Album"
                                        name="create_album"
                                        placeholder="Create Album"
                                        control={control}
                                        rules={{ required: "required" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-end py-2">
                            <CustomButton
                                onClick={() => setOpen(false)}
                                type="button"
                                Text="Cancel"
                                TextClassName="text-sm! font-medium!"
                                className='w-fit! py-0.5! px-4! bg-white! border! border-[#ff0000]! text-[#ff0000]! rounded-sm bg-blue-theme!'
                            />
                            <CustomButton
                                type="button"
                                Text="Draft"
                                TextClassName="text-sm! font-medium!"
                                className='w-fit! py-0.5! px-4! bg-white! border! border-[#aaaaaa]! text-[#aaaaaa]! rounded-sm bg-blue-theme!'
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
        </div>
    )
}

export default AddEditGallery
