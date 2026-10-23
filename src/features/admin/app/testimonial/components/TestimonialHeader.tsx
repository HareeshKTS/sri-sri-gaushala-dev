import React, { type Dispatch, type SetStateAction } from 'react'
import CustomButton from "@/shared/CustomButton";
import CustomSearchBar from "@/shared/CustomSearchBar"
import CustomSelect from "@/shared/CustomSelect";
import { CirclePlus } from 'lucide-react';

type SelectStatus = {
  label: string;
  value: string;
}

const StatusItems: SelectStatus[] = [
  { label: "All Type", value: "All Type" },
  { label: "Latest Album", value: "Latest Album" },
  { label: "Recent Album", value: "Recent Album" },
];

const sortItems: SelectStatus[] = [
  { label: "Latest First", value: "Latest First" },
  { label: "Oldest First", value: "Oldest First" },
  { label: "Recent Album", value: "Recent Album" },
];
type HeaderProps = {
    setOpen: Dispatch<SetStateAction<boolean>>;
};

function TestimonialHeader({setOpen}:HeaderProps) {
  return (
   <div className="flex flex-col lg:flex-row gap-2 gap-y-6 lg:items-center justify-between sticky top-0 z-10 bg-[#fffcf6]">
      <div className="flex-1 flex flex-col sm:flex-row gap-4  lg:items-center">
        <CustomSearchBar placeholder="Search Videos" />
        <div className='flex items-center gap-4'>
        <div>
          <CustomSelect
            defaultValue='All Type'
            options={StatusItems}
            placeholder="Select Type"
            triggerClassName="rounded-sm! min-w-36! max-w-36! bg-white! text-green-theme! border-none! shadow-md!"
          />
        </div>
         <div>
          <CustomSelect
            defaultValue='Latest First'
            options={sortItems}
            placeholder="Select Type"
            triggerClassName="rounded-sm! min-w-36! max-w-36! bg-white! text-green-theme! border-none! shadow-md!"
          />
        </div>
        </div>
      </div>
      <div className="self-end lg:self-auto">
        <CustomButton
          onClick={() => setOpen(true)}
          type="button"
          Text="Add Testimonial"
          TextClassName="text-sm! font-medium! font-saira!"
          className='w-fit! px-2! py-1! bg-green-theme! rounded-sm bg-blue-theme! shadow-md! flex flex-row-reverse! gap-2!'
          Icon={<CirclePlus strokeWidth={2.25} size={16} color="#fff" />}
        />
      </div>

    </div>
  )
}

export default TestimonialHeader