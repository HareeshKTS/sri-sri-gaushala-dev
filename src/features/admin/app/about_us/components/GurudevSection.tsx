import type { UseFormReturn } from "react-hook-form";
import type { AboutUsFormData } from "../Types";
import { FormInputField, FormTextArea } from "@/shared/custom_form_components/FormFields";

interface Props {
  form: UseFormReturn<AboutUsFormData>;
}

const GurudevSection = ({ form }: Props) => {


  return (
    <section className="border-b px-0 sm:px-4  py-6">

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        <div>
          {/* <label className="text-sm font-medium">
            Gurudev Section Title
          </label>

          <input
            {...form.register("gurudev.title")}
            className="w-full rounded-md border p-2"
          /> */}
          <FormInputField
            label="Gurudev Section Title"
            name="gurudevTitle"
            placeholder="Visit Us"
            LabelClassName="font-medium text-sm font-saira!"
            className="border-[#2e7d32]"
            control={form.control}
            rules={{ required: "required" }}
          />
        </div>

        <div>
          {/* <label className="text-sm font-medium">
            Gurudev Main Heading
          </label>

          <input
            {...form.register("gurudev.mainHeading")}
            className="w-full rounded-md border p-2"
          /> */}
          <FormInputField
            label="Gurudev Main Heading"
            name="gurudevMainHeading"
            placeholder=""
            LabelClassName="font-medium text-sm font-saira!"
            className="border-[#2e7d32]"
            control={form.control}
            rules={{ required: "required" }}
          />
        </div>

        <div className="lg:col-span-2">
          {/* <label className="text-sm font-medium">
            Gurudev Description
          </label>

          <textarea
            {...form.register("gurudev.description")}
            className="w-full rounded-md border p-2"
            rows={5}
          /> */}
          <FormTextArea
            name="gurudevDescription"
            control={form.control}
            label="Gurudev Description"
            LabelClassName="font-medium text-sm"
            placeholder="A Sanctuary of Compassion, Culture and Care"
            rules={{ required: "Required" }}
          />
        </div>

      </div>
    </section>
  );
};

export default GurudevSection;