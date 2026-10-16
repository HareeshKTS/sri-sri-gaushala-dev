import { FormInputField, FormTextArea } from '@/shared/custom_form_components/FormFields'
import React from 'react'
import type { UseFormReturn } from "react-hook-form";
import type { AboutUsFormData } from '../Types';

interface Props {
  form: UseFormReturn<AboutUsFormData>;
}

function VisionMissionSection({ form }: Props) {
  return (
    <div className='md:flex justify-between gap-6'>
      <div className='w-full flex flex-col gap-y-8 p-4'>
      <div className='w-full space-y-2'>
        <FormInputField
          label="Vision Title"
          name="visionTitle"
          placeholder="Visit Us"
          LabelClassName="font-medium text-sm font-saira!"
          className="border-green-theme"
          control={form.control}
          rules={{ required: "required" }}
        />
      </div>
      <div className='space-y-2 w-full'>
        <FormTextArea
          name="visionDescription"
          control={form.control}
          label=""
          LabelClassName="font-medium text-sm"
          placeholder=""
          className='min-h-[250px]'
          rules={{ required: "Required" }}
        />
      </div>
      </div>
      <div className='border-r'/>
       <div className='w-full flex flex-col gap-y-8 p-4'>
      <div className='w-full space-y-2'>
        <FormInputField
          label="Mission Title"
          name="missionTitle"
          placeholder="Visit Us"
          LabelClassName="font-medium text-sm font-saira!"
          className="border-green-theme"
          control={form.control}
          rules={{ required: "required" }}
        />
      </div>
      <div className='space-y-2 w-full'>
        <FormTextArea
          name="missionDescription"
          control={form.control}
          label=""
          LabelClassName="font-medium text-sm"
           className='min-h-[250px]'
          placeholder=""
          rules={{ required: "Required" }}
        />
      </div>
      </div>

    </div>
  )
}

export default VisionMissionSection