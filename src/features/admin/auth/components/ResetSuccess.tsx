
import { CheckIcon, GaushalaCowLogoGreen, LoginCow, LoginFooter } from '@/assets/admin_assets'
import AdminCustomButton from '@/shared/AdminCustomButton';
import { useNavigate } from 'react-router';
import { admin_route_name } from '@/app/router/RouteNameEnums';


function ResetSuccess() {
  const navigate = useNavigate()

  return (
    <div className="h-full w-full sm:w-[500px] max-w-[500px] mx-auto">
      <div className="h-full  grid justify-center">

        <div className='w-full h-full flex items-center justify-center p-5'>
          <div className='w-full flex flex-col gap-y-2  min-h-[50vh] '>
            <div className='shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-2xl pt-4'>

              <div className='flex justify-center'>
                <img className='w-[30%]' src={GaushalaCowLogoGreen} alt="GaushalaCowLogoGreen" />
              </div>

              <div className="flex justify-center pt-2">
                <img className='w-[20%]' src={CheckIcon} alt="Success" />
              </div>

              <p className="font-saira font-semibold text-xl 2xl:text-4xl text-center py-3">
                Password Reset Successfully
              </p>

              <div className="py-2 2xl:py-3">
                <p className="font-saira text-sm text-center">
                  Your password has been successfully reset.
                </p>
                <p className="font-saira text-sm text-center">
                  Click below to continue
                </p>
              </div>

              <AdminCustomButton
                type="button"
                Text="Continue"
                onClick={() => navigate(`/${admin_route_name}`)}

                className="mt-3 2xl:mt-6 w-[90%]! mx-auto"
              />

              <div className="flex justify-center mt-3">
                <p
                  onClick={() => navigate(`/${admin_route_name}/reset-password`)}
                  className="text-black font-semibold font-saira text-sm cursor-pointer text-center hover:underline"
                >
                  Back
                </p>
              </div>

              <img
                className="mt-3 w-full"
                src={LoginFooter}
                alt="LoginFooter"
              />
            </div>

            <p className="font-montserrat py-2 text-xs sm:text-sm text-center">
              © Copyright - Kyurius Tech Studios (KTS) - 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetSuccess