import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput, CustomTextarea } from '@/shared/CustomInput';
import AdminCustomButton from "@/shared/AdminCustomButton";
import { useRef, useState } from "react";
import { change_profile_icon } from "@/assets/admin_assets";
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
    role: z
        .string()
        .min(1, "required"),

    empid: z
        .string()
        .min(1, "required"),

    department: z
        .string().optional(),

    address: z
        .string().optional(),

    date_joined: z
        .string()
        .min(1, "required"),

    last_login: z.string()
        .min(1, "required"),
});

function ProfileTab() {
    const [preview, setPreview] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const form = useForm({
        resolver: zodResolver(formSchema),

        defaultValues: {
            name: "",
            contact: "",
            email: "",
            role: "",
            empid: "",
            department: "",
            address: "",
            date_joined: "",
            last_login: ""
        },
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        // Create preview
        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);

        console.log("Selected file:", file);
    };

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="h-full w-full px-4 2xl:px-8">


            <form onSubmit={form.handleSubmit(onSubmit)} className="pt-6 h-full flex flex-col justify-between">
                <div>
                    <h2 className="font-saira text-green-theme text-xl font-semibold">
                        Profile
                    </h2>
                    <p className="font-saira text-sm text-green-theme">Update your admin account information</p>

                    <div className="lg:flex gap-4 pt-8 lg:pt-0">
                        <div className="w-full lg:w-[40%] 2xl:w-[30%] flex flex-col sm:flex-row items-center sm:justify-center sm:items-center gap-4 sm:gap-0">

                            <div className="pt-4">

                                {/* Profile Image */}
                                <div className="rounded-full sm:bg-white my-2 sm:my-0 flex justify-center">
                                    {preview ? (
                                        <img
                                            src={preview}
                                            alt="Profile"
                                            className="rounded-full w-42 h-42 xl:w-52 xl:h-52  object-cover"
                                        />
                                    ) : (
                                        <span className="font-parkinsans font-semibold rounded-full flex justify-center items-center shadow-[0px_5px_15px_rgba(0,0,0,0.35)] w-42 h-42 xl:w-52 xl:h-52  object-cover text-sm">
                                            Profile Picture
                                        </span>
                                    )}
                                </div>

                                {/* Hidden File Input */}
                                <input
                                    ref={inputRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />

                                {/* Upload Button */}
                                <div className="flex justify-center mt-6">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            console.log("Button clicked");
                                            inputRef.current?.click();
                                        }}
                                        className="flex items-center justify-center w-[200px] gap-4 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-xl px-5 py-3 cursor-pointer"
                                    >
                                        <img
                                            src={change_profile_icon}
                                            alt="change_profile_icon"
                                        />

                                        <span className="font-parkinsans text-sm">
                                            Change Photo
                                        </span>
                                    </button>
                                </div>

                            </div>

                        </div>


                        <div className="w-full mt-8 lg:mt-0">
                            <div className="lg:block   lg:border-l lg:border-l-green-theme px-4">
                                <div className="sm:flex gap-6">
                                    <div className="flex-1">
                                        <CustomInput
                                            control={form.control}
                                            name="name"
                                            label="Full Name"
                                            placeholder=""

                                            labelClassname="mb-2 text-sm"
                                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <CustomInput
                                            control={form.control}
                                            name="email"
                                            label="Email Address"
                                            placeholder=""
                                            labelClassname="mb-2 text-sm"
                                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                                        />
                                    </div>


                                </div>
                                <div className="sm:flex gap-6">
                                    <div className="w-full mt-2">
                                        <CustomInput
                                            control={form.control}
                                            name="contact"
                                            label="Phone Number"
                                            placeholder=""

                                            labelClassname="mb-2 text-sm"
                                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                                        />
                                    </div>
                                    <div className="w-full mt-2">
                                        <CustomInput
                                            control={form.control}
                                            name="role"
                                            label="Role"
                                            placeholder=""

                                            labelClassname="mb-2 text-sm"
                                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                                        />
                                    </div>
                                </div>
                                <div className="sm:flex gap-6">
                                    <div className="w-full mt-2">
                                        <CustomInput
                                            control={form.control}
                                            name="empid"
                                            label="Employee ID"
                                            placeholder=""

                                            labelClassname="mb-2 text-sm"
                                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                                        />
                                    </div>
                                    <div className="w-full mt-2">
                                        <CustomInput
                                            control={form.control}
                                            name="department"
                                            label="Department (Optional)"
                                            placeholder=""

                                            labelClassname="mb-2 text-sm"
                                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                                        />
                                    </div>
                                </div>
                                <div className="w-full mt-2">
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
                                <div className="sm:flex gap-6">
                                    <div className="w-full mt-2">
                                        <CustomInput
                                            control={form.control}
                                            name="date_joined"
                                            label="Date Joined"
                                            placeholder=""

                                            labelClassname="mb-2 text-sm"
                                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                                        />
                                    </div>
                                    <div className="w-full mt-2">
                                        <CustomInput
                                            control={form.control}
                                            name="last_login"
                                            label="Last Login"
                                            placeholder=""

                                            labelClassname="mb-2 text-sm"
                                            inputclassname="bg-white w-full h-9! rounded-md border border-[#B1CEB1] shadow-none"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    {/* <button className="bg-[#ff0000] rounded-md text-white text-sm font-parkinson px-4 h-9">
                        Cancel
                    </button> */}
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

export default ProfileTab