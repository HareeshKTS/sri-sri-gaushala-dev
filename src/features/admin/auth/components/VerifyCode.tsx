import { GaushalaCowLogoGreen, LoginCow, LoginFooter } from '@/assets/admin_assets'


import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import AdminCustomButton from '@/shared/AdminCustomButton';
import { useNavigate } from 'react-router';
import { admin_route_name } from '@/app/router/RouteNameEnums';
import { OTPInput } from "input-otp";


const formSchema = z.object({
    otp: z
        .string()
        .min(1, "OTP is required")
        .length(5, "OTP must be 6 digits")
        .regex(/^\d{5}$/, "OTP must contain only numbers"),
});
const VerifyCode = () => {
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),

        defaultValues: {
            otp: "",

        },
    });

    const onSubmit = (data) => {
        console.log(data);
        navigate(`/${admin_route_name}/reset-password`)
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
                            <p className='font-saira font-semibold text-xl 2xl:text-3xl text-center py-3 2xl:py-6'>Verification Code</p>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="px-2 md:px-6 pt-6">
                                <Controller
                                    name="otp"
                                    control={form.control}

                                    render={({ field, fieldState }) => (
                                        <div className="relative">
                                            <p className='font-saira font-semibold text-sm py-3'>Enter Otp</p>
                                            <OTPInput
                                                maxLength={5}
                                                value={field.value}
                                                onChange={field.onChange}
                                                containerClassName="flex gap-2 justify-between"
                                                render={({ slots }) => (
                                                    <>
                                                        {slots.map((slot, index) => (
                                                            <div
                                                                key={index}
                                                                className={`relative rounded-xl flex h-12 w-12 items-center justify-center bg-[#EBE9E4] text-xl font-semibold border transition-all
                                                        ${slot.isActive
                                                                        ? "border-2 border-gray-500"
                                                                        : "border border-transparent"}`}>
                                                                {slot.char}

                                                                {slot.hasFakeCaret && (
                                                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                                                        <div className="h-6 w-px animate-pulse bg-gray-500" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </>
                                                )}
                                            />

                                            {fieldState.error && (
                                                <p className="absolute bottom-[-25px] text-sm text-red-500">
                                                    {fieldState.error.message}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                />

                                <AdminCustomButton
                                    type='submit'
                                    Text="Next"
                                    className='mt-8'
                                />

                                <div className="flex gap-4 justify-between mt-3">
                                    <p
                                        // onClick={() => navigate(`/${admin_route_name}`)}
                                        className="text-black font-semibold font-saira text-sm cursor-pointer hover:underline">Resent OTP?</p>
                                    <p
                                        onClick={() => navigate(`/${admin_route_name}/forgot-password`)}
                                        className="text-black font-semibold font-saira text-sm cursor-pointer hover:underline">Back
                                    </p>


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

export default VerifyCode