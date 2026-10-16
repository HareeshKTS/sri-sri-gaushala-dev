import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput, CustomTextarea } from '@/shared/CustomInput';
import AdminCustomButton from "@/shared/AdminCustomButton";
import CustomButton from "@/shared/CustomButton";

const formSchema = z.object({


    name: z
        .string()
        .min(1, "required"),


    contact: z
        .string()
        .min(10, "required"),

    email: z
        .string()
        .min(1, "required")
        .email("Invalid email"),

    address: z
        .string().optional()
});


function GeneralTab() {

    const form = useForm({
        resolver: zodResolver(formSchema),

        defaultValues: {
            name: "",
            contact: "",
            email: "",
            address: ""
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="h-full w-full lg:w-[80%] 2xl:w-[70%] mx-auto py-3">
            <h2 className="font-saira text-green-theme text-xl font-semibold">
                General Settings
            </h2>

            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
                <div className="flex gap-6">
                    <div className="flex-1">
                        <CustomInput
                            control={form.control}
                            name="name"
                            label="Name"
                            placeholder=""

                            labelClassname="mb-2 text-sm"
                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                        />
                    </div>
                    <div className="flex-1">
                        <CustomInput
                            control={form.control}
                            name="contact"
                            label="Contact Number"
                            placeholder=""
                            labelClassname="mb-2 text-sm"
                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                        />
                    </div>


                </div>
                <div className="w-[calc(50%-12px)] mt-4">
                    <CustomInput
                        control={form.control}
                        name="email"
                        label="Email Address"
                        placeholder=""

                        labelClassname="mb-2 text-sm"
                        inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                    />
                </div>
                <div className="w-full mt-4">
                    <CustomTextarea
                        control={form.control}
                        name="address"
                        label="Address"
                        placeholder=""
                        labelClassname="mb-2 text-sm"
                        inputclassname="bg-white min-h-24 rounded-md border border-[#B1CEB1] shadow-none"
                        rows={4}
                    />
                </div>
                <div className="flex justify-end gap-4">
                 
                    <CustomButton
                        type="submit"
                        Text="Save Changes"
                        TextClassName="text-sm! font-normal! font-parkinson"
                        className="w-[150px]! h-9! rounded-md! bg-green-theme!"
                    />
                </div>
            </form>

            {/* General form */}
        </div>
    )
}

export default GeneralTab