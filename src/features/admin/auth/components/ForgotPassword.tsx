import { GaushalaCowLogoGreen,LoginFooter } from '@/assets/admin_assets'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput } from '@/shared/CustomInput';
import AdminCustomButton from '@/shared/AdminCustomButton';
import { useNavigate } from 'react-router';
import { admin_route_name } from '@/app/router/RouteNameEnums';



const formSchema = z.object({


    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email"),


});
const ForgotPassword = () => {
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),

        defaultValues: {
            email: "",

        },
    });

    const onSubmit = (data) => {
        console.log(data);
         navigate(`/${admin_route_name}/verify-code`)
    };
    return (

        <div className="h-full w-full">
      <div className="h-full  grid justify-center">
      
        <div className='w-full h-full  flex items-center justify-center p-5'>
          <div className='w-full flex flex-col gap-y-2  min-h-[50vh]'>
            <div className='w-full shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-2xl'>
              <div className='flex justify-center pt-3'>
                <img className='w-[30%]' src={GaushalaCowLogoGreen} alt="GaushalaCowLogoGreen" />
              </div>
            <p className='font-saira font-semibold text-xl 2xl:text-3xl text-center py-3 2xl:py-6'>Forgot Password?</p>
              <form onSubmit={form.handleSubmit(onSubmit)} className="px-4 md:px-6 pt-6">
                    <CustomInput
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder=""
                        labelClassname="mb-2 text-sm"
                        inputclassname="bg-[#d9d5cc87]/50 w-full h-10! rounded-md border-0 shadow-none"
                    />

                    <AdminCustomButton
                        type='submit'
                        Text="Sent OTP"
                        className='my-4'
                    />

                    <div className="flex gap-4 justify-center mt-3">
                        <p
                            onClick={() => navigate(`/${admin_route_name}`)}
                            className="text-black font-semibold font-saira text-sm cursor-pointer hover:underline">Back</p>


                    </div>


                </form>
              <img src={LoginFooter} alt="LoginFooter" className='w-full' />
            </div>
            <p className='font-montserrat  text-sm text-center'>© Copyright - Kyurius Tech Studios (KTS) - 2025</p>
          </div>

        </div>
      </div>
    </div>


    )
}

export default ForgotPassword