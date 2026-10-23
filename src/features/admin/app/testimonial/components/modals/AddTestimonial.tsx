import { File, Image, Trash2, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import CustomButton from "@/shared/CustomButton";
import { useCallback, useState, type Dispatch, type SetStateAction } from "react";
import { FormInputField } from "@/shared/custom_form_components/FormFields";
import { useDropzone } from "react-dropzone";


type AddBreedsProps = {
    setOpen: Dispatch<SetStateAction<boolean>>;
};

interface SelectedFile {
    file: File;
    preview: string;
}
interface formValues {
    name: string
    details: string
}


const AddTestimonial = ({ setOpen }: AddBreedsProps) => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);


    const { control, trigger, handleSubmit } = useForm<formValues>({
        defaultValues: {
            name: "",
            details: "",
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

    const selectedFile = selectedFiles[0];

    const handleHomeData = async (data: formValues) => {
        const isValid = await trigger();
        if (!isValid) return;
        const payload = {
            name: data.name,
            details: data.details,

        }
        console.log(payload, 'payload');
    }

    return (
        <div className="min-w-[80vw]  lg:min-w-[50vw] lg:max-w-[42vw] min-h-[40vh] max-h-[80vh] h-[58vh] 2xl:h-[40vh] flex overflow-auto">
            <div className="w-full flex flex-col bg-white  px-2">
                <div className="flex items-center justify-between py-2 ">
                    <div>
                        <p className="text-green-theme font-gotham tracking-[0.09px] text-base font-semibold">Add Testimonial</p>
                    </div>
                    <div>
                        <button onClick={() => setOpen(false)} className='bg-transparent outline-0 cursor-pointer'>
                            <X color="#0f172a" strokeWidth={2.25} size={30} />
                        </button>
                    </div>
                </div>
                <Card className="overflow-auto px-2 shadow rounded-lg my-2 flex flex-col flex-1">
                    <form onSubmit={handleSubmit(handleHomeData)} className=" py-3">
                        <div className="md:flex gap-8 px-2">
                            <div className="md:w-[45%]  relative">

                                <div
                                    {...getRootProps()}
                                    className={`relative border-2 border-dashed rounded-lg h-56 w-full 
                                         ${selectedFile ? 'bg-white' : 'bg-[#f5fff5]'} border-[#4caf50] flex flex-col gap-2 items-center 
                                         justify-center cursor-pointer`}
                                >
                                    <input {...getInputProps()} />

                                    {selectedFile ? (
                                        <>
                                            <div className="absolute inset-0 pointer-events-none p-2">
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
                                                <Trash2 size={20} />
                                            </button>
                                        </>
                                    ) : (
                                        <div className="font-gotham flex flex-col gap-2 leading-snug items-center justify-center p-2 bg-[#f5fff5]">
                                            <div className="bg-[#287d39] rounded-md p-1 w-fit">
                                                <Image
                                                    size={28}
                                                    color="white"
                                                    strokeWidth={1}
                                                />
                                            </div>

                                            <p className="font-gotham 2xl:text-lg font-normal tracking-wider text-wrap text-center text-green-theme">
                                                Drag & Drop Your Image Here
                                            </p>
                                            <p className="font-gotham 2xl:text-lg font-normal tracking-wider text-wrap text-center text-green-theme">
                                                or
                                            </p>
                                            <button type="button" className="bg-green-theme cursor-pointer flex gap-2 items-center text-white py-1 px-4 rounded-md">
                                                <File size={18} />
                                                <p className="font-gotham text-white text-sm">Choose File</p>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 md:w-[55%] mt-3 md:mt-0">
                                <div className="grid  grid-cols-1 md:grid-cols-1  gap-x-2 gap-y-3">
                                    <FormInputField
                                        label="Name"
                                        name="name"
                                        placeholder="Name"
                                        className="border-[#2e7d32]"
                                        control={control}
                                        rules={{ required: "required" }}
                                    />
                                    <FormInputField
                                        label="Details"
                                        name="details"
                                        placeholder="Details"
                                        className="border-[#2e7d32]"
                                        control={control}
                                        rules={{ required: "required" }}
                                    />
                                </div>




                            </div>
                        </div>
                          <div className="flex gap-2 justify-end py-6 lg:py-0">
                            <CustomButton
                                onClick={() => setOpen(false)}
                                type="button"
                                Text="Close"
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
        </div>
    )
}

export default AddTestimonial
