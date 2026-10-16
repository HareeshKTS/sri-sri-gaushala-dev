import { useState, type Dispatch, type SetStateAction } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import CustomButton from "@/shared/CustomButton";
import CustomCheckBox from "@/shared/CustomCheckBox";
import CustomSelect from "@/shared/CustomSelect";

type BreedsModalProps = {
    setOpen: Dispatch<SetStateAction<boolean>>;
};

type SelectBreeds = {
    label: string;
    value: string;
}

const breedItems: SelectBreeds[] = [
    { label: "Select all", value: "Select all" },
    { label: "Breed one", value: "Breed one" },
    { label: "Breed Two", value: "Breed Two" },
    { label: "Breed Three", value: "Breed Three" },
];

const BreedsModal: React.FC<BreedsModalProps> = ({ setOpen }) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="min-w-[80vw]  lg:min-w-[42vw] lg:max-w-[42vw]  min-h-[45vh] h-[80vh] flex overflow-auto">
            <div className="w-full flex flex-col bg-white  px-2">
                <div className="flex items-center justify-between py-2 ">
                    <div>
                        <p className="text-green-theme font-gotham tracking-[0.09px] text-base font-semibold">Select Breeds</p>
                        <p className="text-[#aaaaaa] font-saira text-sm">You can select up to 10 Breeds.</p>
                    </div>
                    <div>
                        <button onClick={() => setOpen(false)} className='bg-transparent outline-0 cursor-pointer'>
                            <X color="#0f172a" strokeWidth={2.25} size={30} />
                        </button>
                    </div>
                </div>
                <Card className="overflow-auto px-2 shadow rounded-lg my-2 flex flex-col flex-1">
                    <div className=" flex-1">
                        <div className="flex gap-2 items-center py-1 px-2">
                            <CustomCheckBox
                                name="isActive"
                                id="isActive"
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                            />
                            <div>
                                <CustomSelect
                                    options={breedItems}
                                    placeholder="Select breed"
                                    triggerClassName="rounded-sm! min-w-36! max-w-36!"
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

                </Card>
            </div>
        </div>
    )
}

export default BreedsModal
