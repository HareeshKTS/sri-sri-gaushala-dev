import { Upload } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
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

type HeaderProps = {
  setShowUploadModal: Dispatch<SetStateAction<boolean>>
}

const Header = ({ setShowUploadModal }: HeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between sticky top-0 z-50 backdrop-blur-md rounded-sm">
      <div className="flex-1 flex flex-col lg:flex-row gap-4  lg:items-center">
        <CustomSearchBar placeholder="Search Album" />
        <div>
          <CustomSelect
            options={StatusItems}
            placeholder="Select Type"
            triggerClassName="rounded-sm! min-w-36! max-w-36! bg-white! text-green-theme! border-none! shadow-md!"
          />
        </div>
      </div>
      <div className="self-end lg:self-auto">
        <CustomButton
          onClick={() => setShowUploadModal(true)}
          type="button"
          Text="Upload New Image"
          TextClassName="text-sm! font-medium! font-saira!"
          className='w-fit! px-2! py-1! bg-green-theme! rounded-sm bg-blue-theme! shadow-md! flex flex-row-reverse! gap-2!'
          Icon={<Upload strokeWidth={2.25} size={16} color="#fff" />}
        />
      </div>

    </div>
  )
}

export default Header
