import { Upload } from "lucide-react";
import CustomButton from "@/shared/CustomButton";
import CustomSearchBar from "@/shared/CustomSearchBar"
import CustomSelect from "@/shared/CustomSelect";
import type { Dispatch, SetStateAction } from "react";

type SelectTypes = {
    label: string;
    value: string;
}

type SelectAll = {
    label: string;
    value: string;
}


const StatusTypes: SelectTypes[] = [
    { label: "Old", value: "Old" },
    { label: "Latest", value: "Latest" },
    { label: "Recent", value: "Recent" },
];
const StatusItems: SelectAll[] = [
    { label: "All", value: "All" },
    { label: "Uploaded", value: "Uploaded" },
    { label: "YouTube", value: "YouTube" },
];

type HeaderProps = {
    setShowUploadVideos: Dispatch<SetStateAction<boolean>>
}

const Header = ({setShowUploadVideos}:HeaderProps) => {
    return (
        <div className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between sticky top-0 z-50 backdrop-blur-md rounded-sm">
            <div className="flex-1 flex flex-col lg:flex-row gap-4  lg:items-center">
                <CustomSearchBar placeholder="Search Videos" />
                <div className="flex gap-2">
                    <div>
                        <CustomSelect
                            options={StatusItems}
                            placeholder="All Types"
                            triggerClassName="rounded-sm! min-w-36! max-w-36! bg-white! text-green-theme! border-none! shadow-md!"
                        />
                    </div>
                    <div>
                        <CustomSelect
                            options={StatusTypes}
                            placeholder="Select Type"
                            triggerClassName="rounded-sm! min-w-36! max-w-36! bg-white! text-green-theme! border-none! shadow-md!"
                        />
                    </div>
                </div>
            </div>
            <div className="self-end lg:self-auto">
                <CustomButton
                    onClick={()=>setShowUploadVideos(true)}
                    type="button"
                    Text="Upload Video"
                    TextClassName="text-sm! font-medium! font-saira!"
                    className='w-fit! px-2! py-1! bg-green-theme! rounded-sm bg-blue-theme! shadow-md! flex flex-row-reverse! gap-2!'
                    Icon={<Upload strokeWidth={2.25} size={16} color="#fff" />}
                />
            </div>

        </div>
    )
}

export default Header
