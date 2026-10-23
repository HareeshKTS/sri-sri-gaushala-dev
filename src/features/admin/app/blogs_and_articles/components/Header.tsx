import { CirclePlus } from "lucide-react";
import CustomButton from "@/shared/CustomButton";
import CustomSearchBar from "@/shared/CustomSearchBar"
import CustomSelect from "@/shared/CustomSelect";

type SelectStatus = {
    label: string;
    value: string;
}

const StatusItems: SelectStatus[] = [
    { label: "Old Album", value: "Old Album" },
    { label: "Latest Album", value: "Latest Album" },
    { label: "Recent Album", value: "Recent Album" },
];

const Header = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between sticky top-0 z-50 backdrop-blur-md rounded-sm">
            <CustomSearchBar placeholder="Search Videos" />
            <div className="flex gap-2 lg:items-center  justify-between flex-1">
                <CustomSelect
                    options={StatusItems}
                    placeholder="Select Album"
                    triggerClassName="rounded-sm! min-w-36! max-w-36! bg-white! text-green-theme! border-none! shadow-md!"
                />
                <CustomButton
                    //   onClick={() => setShowUploadModal(true)}
                    type="button"
                    Text="Add Blog & Articles"
                    TextClassName="text-sm! font-medium! font-saira!"
                    className='w-fit! px-2! py-1! bg-green-theme! text-nowrap! rounded-sm bg-blue-theme! shadow-md! flex flex-row-reverse! gap-2!'
                    Icon={<CirclePlus size={18} color="#fff" />}
                />
            </div>
        </div>
    )
}

export default Header