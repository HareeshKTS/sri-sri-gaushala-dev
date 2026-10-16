import CustomButton from "@/shared/CustomButton";
import CustomSelect from "@/shared/CustomSelect";
import type { Dispatch, SetStateAction } from "react";
import CustomSearchBar from "@/shared/CustomSearchBar";

type SelectBreeds = {
    label: string;
    value: string;
}
type SelectStatus = {
    label: string;
    value: string;
}

const breedItems: SelectBreeds[] = [
    { label: "Select all", value: "Select all" },
    { label: "Breed one", value: "Breed one" },
    { label: "Breed Two", value: "Breed Two" },
    { label: "Breed Three", value: "Breed Three" },
];
const StatusItems: SelectStatus[] = [
    { label: "Accept", value: "Accept" },
    { label: "Reject", value: "Reject" },
];

type HeaderProps = {
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setOpen }: HeaderProps) => {
    return (
        <div className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between">
            <div className="flex-1 flex flex-col lg:flex-row gap-4  lg:items-center">
                <CustomSearchBar placeholder="Search Breeds"/>
                <div className="flex gap-4">
                    <div>
                        <CustomSelect
                            options={StatusItems}
                            placeholder="Select Status"
                            triggerClassName="rounded-sm! min-w-36! max-w-36! bg-white! text-green-theme! border-none! shadow-md!"
                        />
                    </div>
                    <div>
                        <CustomSelect
                            options={breedItems}
                            placeholder="Select breed"
                            triggerClassName="rounded-sm! min-w-36! max-w-36! bg-white! text-green-theme! border-none! shadow-md!"
                        />
                    </div>
                </div>
            </div>
            <div className="self-end lg:self-auto">
                <CustomButton
                    onClick={() => setOpen(true)}
                    type="button"
                    Text="Add New Breed"
                    TextClassName="text-sm! font-medium! font-saira!"
                    className='w-fit! px-4! py-1! bg-green-theme! rounded-sm bg-blue-theme! shadow-md!'
                />
            </div>

        </div>
    )
}

export default Header
