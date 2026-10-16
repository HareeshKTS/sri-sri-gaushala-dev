import { GaushalaCowLogoGreen, LoginCow, LoginFooter } from '@/assets/admin_assets'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput } from '@/shared/CustomInput';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import AdminCustomButton from '@/shared/AdminCustomButton';
import { useNavigate } from 'react-router';
import { admin_route_name } from '@/app/router/RouteNameEnums';
import { useAdminContext } from '@/app/context/AdminContext';
const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),

  password: z
    .string()
    .min(1, "Password is required"),
});
const Login = () => {
  const navigate = useNavigate()
  const { Save_Jwt_Tokens } = useAdminContext()
  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "simha@gmail.com",
      password: "Simha@123",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const tokens = {
      access_token: 'sdafsdfgsd',
      refresh_token: 'dsgsdfgsdfg'
    }
    Save_Jwt_Tokens(tokens)
  };
  return (
    <div className="h-full w-full">
      <div className="h-full  grid lg:grid-cols-[67%_33%]">
        <div className='hidden sm:flex   items-center justify-center p-10'>
          <img src={LoginCow} alt="LoginCow" />
        </div>
        <div className='w-full h-full  flex items-center justify-center p-5'>
          <div className='w-full flex flex-col gap-y-2  min-h-[50vh] '>
            <div className='w-full shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-2xl'>
              <div className='flex justify-center pt-3'>
                <img className='w-[30%]' src={GaushalaCowLogoGreen} alt="GaushalaCowLogoGreen" />
              </div>
              <p className='font-saira font-semibold text-2xl text-center mt-3'>Log in</p>
              <form onSubmit={form.handleSubmit(onSubmit)} className="px-5 md:px-6">
                <CustomInput
                  control={form.control}
                  name="email"
                  label="Username"
                  placeholder=""
                  labelClassname="mb-2 text-sm"
                  inputclassname="bg-[#d9d5cc87]/50 w-full h-10! rounded-md border-0 shadow-none"
                />
                <CustomInput
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder=""
                  type="password"
                  labelClassname="mb-2 text-sm"
                  inputclassname="bg-[#d9d5cc87]/50 w-full h-10! rounded-md border-0 shadow-none"
                />
                <div className="flex gap-4 justify-between mt-6">
                  <p
                    onClick={() => navigate(`/${admin_route_name}/forgot-password`)}
                    className="text-black font-semibold font-saira text-sm cursor-pointer hover:underline">Forgot Password?</p>
                  <div className="flex gap-2 lg:gap-4 items-center">

                    <Checkbox
                      id="terms"
                      className="border border-black cursor-pointer data-[state=checked]:bg-green-theme data-[state=checked]:text-white data-[state=checked]:border-green-theme"
                    // checked={rememberme}
                    // onCheckedChange={(checked) => setRememberme(checked === true)}
                    />
                    <Label
                      className="text-sm font-saira font-semibold"
                      htmlFor="terms">Remember me
                    </Label>

                  </div>

                </div>
                <AdminCustomButton
                  type='submit'
                  Text="Log in"
                  className='my-4'
                />

              </form>
              <img src={LoginFooter} alt="LoginFooter" />
            </div>
            <p className='font-montserrat  text-sm text-center'>© Copyright - Kyurius Tech Studios (KTS) - 2025</p>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Login