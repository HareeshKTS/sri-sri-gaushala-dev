import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import CustomButton from "@/shared/CustomButton";
import { useCallback, useState, type Dispatch, type SetStateAction } from "react";
import FormRadioInput, { FormInputField, FormTextArea } from "@/shared/custom_form_components/FormFields";
import type { BreedFormValues } from "../../Types";
import CustomSelect from "@/shared/CustomSelect";
import { useDropzone } from "react-dropzone";
import { breed_icon } from "@/assets/admin_assets";

type SelectBreeds = {
    label: string;
    value: string;
}

const breedItems: SelectBreeds[] = [
    { label: "Breed one", value: "Breed one" },
    { label: "Breed Two", value: "Breed Two" },
    { label: "Breed Three", value: "Breed Three" },
];


type AddBreedsProps = {
    setOpen: Dispatch<SetStateAction<boolean>>;
};

interface SelectedFile {
    file: File;
    preview: string;
}


const AddBreeds = ({ setOpen }: AddBreedsProps) => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);


    const { control, trigger, handleSubmit } = useForm<BreedFormValues>({
        defaultValues: {
            breed_name: "",
            origin: "",
            breed_type: "",
            pure_indian_breeds: "",
            native_place: "",
            description: "",
            status: "active",
            count: ""
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

    const handleHomeData = async (data: BreedFormValues) => {
        const isValid = await trigger();
        if (!isValid) return;
        const payload = {
            breed_name: data.breed_name,
            origin: data.origin,
            breed_type: data.breed_type,
            pure_indian_breeds: data.pure_indian_breeds,
            native_place: data.native_place,
            description: data.description,
            status: data.status,
            count: data.count
        }
        console.log(payload, 'payload');
    }

    return (
        <div className="min-w-[80vw]  lg:min-w-[42vw] lg:max-w-[42vw]  min-h-[45vh] h-[80vh] flex overflow-auto">
            <div className="w-full flex flex-col bg-white  px-2">
                <div className="flex items-center justify-between py-2 ">
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
                    <form onSubmit={handleSubmit(handleHomeData)} className="flex flex-col overflow-auto flex-1  py-1">
                        <div className="flex-1 flex flex-col overflow-auto gap-4 px-2">
                            <div className="relative w-full  min-h-40 max-h-40 h-40">
                                <div
                                    {...getRootProps()}
                                    className={`relative border-2 border-dashed rounded-lg  w-full h-full
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
                                                    className="w-full h-full object-contain rounded-md"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleRemove}
                                                className="absolute top-0 right-0 w-6 h-6 rounded-full bg-black/70
                                        text-white flex items-center justify-center text-sm hover:bg-red-600 transition-colors cursor-pointer"
                                            >
                                                <X size={18} />
                                            </button>
                                        </>
                                    ) : (
                                        <div className="font-gotham flex flex-col gap-1 leading-snug items-center justify-center p-4 bg-[#f5fff5]">
                                            <div className="flex gap-2 items-center">
                                                <img src={breed_icon} alt="breed_icon" />
                                                <p className=" text-base font-semibold text-wrap text-center text-green-theme">
                                                    Breed Image
                                                </p>
                                            </div>
                                            <p className=" text-[12px] font-normal text-wrap text-center text-[#aaaaaa]">
                                                Upload a clear image of the breed
                                            </p>
                                            <p className=" text-[12px] font-semibold text-wrap text-center text-green-theme">
                                                Drag & drop image here or click to browse
                                            </p>
                                            <p className=" text-[12px] font-medium text-wrap text-center text-[#aaaaaa]">
                                                JPG, PNG or WEBP (Max. 2MB)
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 ">
                                <div className="grid  grid-cols-1 md:grid-cols-2  gap-x-2 gap-y-2">
                                    <FormInputField
                                        label="Breed Name"
                                        name="breed_name"
                                        placeholder="Breed Name"
                                        control={control}
                                        rules={{ required: "required" }}
                                    />
                                    <FormInputField
                                        label="Origin"
                                        name="origin"
                                        placeholder="Origin"
                                        control={control}
                                        rules={{ required: "required" }}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2  gap-x-2 gap-y-2">
                                    <CustomSelect
                                        name="breed_type"
                                        label="Breed Type"
                                        options={breedItems}
                                        placeholder="Select breed"
                                        triggerClassName="rounded-sm! w-full h-[40px]!  text-[#a2d5a4]! border-input! focus:border-[#a2d5a4]!
                                         focus-visible:border-[#a2d5a4]! bg-[#F8F6F2]!"
                                        rules={{ required: "required" }}
                                    />
                                    <FormInputField
                                        label="Native Place"
                                        name="native_place"
                                        placeholder="Native Place"
                                        control={control}
                                        rules={{ required: "required" }}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2  gap-x-2 gap-y-4">
                                    <FormInputField
                                        label="Count"
                                        name="count"
                                        type="number"
                                        placeholder="Count"
                                        control={control}
                                        rules={{ required: "required" }}
                                    />
                                    <div className="flex gap-6  items-end justify-start md:justify-center">
                                        <div>
                                            <FormRadioInput
                                                name="status"
                                                control={control}
                                                value="active"
                                                label="Active"
                                            />
                                        </div>
                                        <div>
                                            <FormRadioInput
                                                name="status"
                                                control={control}
                                                value="inactive"
                                                label="Inactive"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <FormTextArea
                                        name="description"
                                        control={control}
                                        label="Description"
                                        placeholder="Enter Description"
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

export default AddBreeds
