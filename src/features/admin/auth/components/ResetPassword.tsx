import { GaushalaCowLogoGreen, LoginFooter } from '@/assets/admin_assets'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput } from '@/shared/CustomInput';
import AdminCustomButton from '@/shared/AdminCustomButton';
import { useNavigate } from 'react-router';
import { admin_route_name } from '@/app/router/RouteNameEnums';
import { useEffect } from 'react';

const formSchema = z
    .object({
        newpassword: z
            .string()
            .min(1, "required")
            .min(6, "Invalid Password"),
        // .regex(/[A-Z]/, "Invalid")
        // .regex(/[a-z]/, "Invalid")
        // .regex(/[0-9]/, "Invalid"),

        confirmpassword: z
            .string()
            .min(1, "required"),
    })
    .refine((data) => data.newpassword === data.confirmpassword, {
        message: "Passwords do not match",
        path: ["confirmpassword"],
    });

function ResetPassword() {
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            newpassword: "",
            confirmpassword: ""

        },
    });
    const newPassword = form.watch("newpassword");
    useEffect(() => {
        if (form.getValues("confirmpassword")) {
            form.trigger("confirmpassword");
        }
    }, [newPassword, form]);

    const onSubmit = (data) => {
        console.log(data);
        navigate(`/${admin_route_name}/reset-success`)
    };
    return (
        <div className="h-full w-full sm:w-[500px] max-w-[500px] mx-auto">
            <div className="h-full  grid justify-center">

                <div className='w-full h-full flex items-center justify-center p-5'>
                    <div className='w-full flex flex-col gap-y-2  min-h-[50vh] '>
                        <div className='w-full shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-2xl'>
                            <div className='flex justify-center pt-3'>
                                <img className='w-[30%]' src={GaushalaCowLogoGreen} alt="GaushalaCowLogoGreen" />
                            </div>
                <p className='font-saira font-semibold text-xl 2xl:text-3xl text-center py-2 2xl:py-6'>Set Password</p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="px-4 md:px-6 2xl:pt-6 space-y-4">
                    <CustomInput
                        control={form.control}
                        name="newpassword"
                        label="Password"
                        type='password'
                        placeholder=""
                        labelClassname="mb-2 text-sm"
                        inputclassname="bg-[#d9d5cc87]/50 w-full h-10! rounded-md border-0 shadow-none"
                    />
                    <CustomInput
                        control={form.control}
                        name="confirmpassword"
                        label="Confirm Password"
                        type='password'
                        placeholder=""
                        labelClassname="mb-2 text-sm"
                        inputclassname="bg-[#d9d5cc87]/50 w-full h-10! rounded-md border-0 shadow-none"
                    />

                    <AdminCustomButton
                        type='submit'
                        Text="Next"
                        className='my-4'
                    />

                    <div className="flex gap-4 justify-center mt-3">
                        <p
                            onClick={() => navigate(`/${admin_route_name}/verify-code`)}
                            className="text-black font-semibold font-saira text-sm cursor-pointer hover:underline">Back</p>


                    </div>


                </form>
                <img className='mt-3' src={LoginFooter} alt="LoginFooter" />
            </div>
           
            <p className='font-montserrat py-4 text-sm text-center'>© Copyright - Kyurius Tech Studios (KTS) - 2025</p>
            </div>
           
        </div>
        </div>
        </div>
       
    )
}

export default ResetPassword