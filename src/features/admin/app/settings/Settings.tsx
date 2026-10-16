
import { logout_icon } from "@/assets/admin_assets"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import AdminCustomButton from "@/shared/AdminCustomButton"
import GeneralTab from "./components/GeneralTab"
import ProfileTab from "./components/ProfileTab"
import { useAdminContext } from "@/app/context/AdminContext"
import CustomButton from "@/shared/CustomButton"
function Settings() {
    const {logout}=useAdminContext()
    return (
        <div className="px-4 h-full">
            <div className="flex h-full min-h-0">

                <Tabs
                    className="flex-col flex lg:flex-row  w-full gap-4"
                    defaultValue="general"
                    orientation="vertical"
                >

                    {/* LEFT SIDE */}
                    <div className="w-full lg:w-[25%] xl:w-[20%] 2xl:w-[15%] shrink-0 flex flex-col justify-between overflow-hidden">

                        <TabsList className="flex flex-row!  lg:flex-col!  w-full  gap-3 bg-white p-3 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-md">

                            <TabsTrigger
                                className="group flex gap-6 data-[state=active]:bg-green-theme hover:bg-green-theme cursor-pointer p-3 w-full"
                                value="general"
                            >
                                {/* YOUR GENERAL SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 29.07 30.6"
                                    className="
                                w-8
                                h-8
                                shrink-0
                                scale-x-[1.4]
                                scale-y-[1.4]
                                fill-[#002602]
                                transition-colors
                                group-hover:fill-white
                                group-data-[state=active]:fill-white
                            "
                                >
                                    <path d="M20.256 2.233A7.745 7.745 0 0 0 17.535 2a7.745 7.745 0 0 0-2.722.233 3.072 3.072 0 0 0-1.669 1.656 3.746 3.746 0 0 0-.221 1.321 2.471 2.471 0 0 1-1.218 2.07 2.509 2.509 0 0 1-2.415.012 3.818 3.818 0 0 0-1.263-.471 3.1 3.1 0 0 0-2.279.606A7.633 7.633 0 0 0 4.184 9.65a7.6 7.6 0 0 0-1.158 2.456 3.043 3.043 0 0 0 .611 2.262 3.792 3.792 0 0 0 1.042.85 2.409 2.409 0 0 1 0 4.164 3.8 3.8 0 0 0-1.042.85 3.043 3.043 0 0 0-.611 2.262 7.6 7.6 0 0 0 1.158 2.456 7.632 7.632 0 0 0 1.564 2.223 3.1 3.1 0 0 0 2.279.606 3.819 3.819 0 0 0 1.263-.471 2.51 2.51 0 0 1 2.416.012 2.471 2.471 0 0 1 1.218 2.07 3.746 3.746 0 0 0 .221 1.321 3.072 3.072 0 0 0 1.669 1.656 7.747 7.747 0 0 0 2.722.233 7.747 7.747 0 0 0 2.722-.233 3.072 3.072 0 0 0 1.669-1.656 3.744 3.744 0 0 0 .221-1.321 2.471 2.471 0 0 1 1.218-2.07 2.509 2.509 0 0 1 2.416-.012 3.818 3.818 0 0 0 1.263.471 3.1 3.1 0 0 0 2.279-.606 7.631 7.631 0 0 0 1.564-2.223 7.606 7.606 0 0 0 1.158-2.455 3.044 3.044 0 0 0-.611-2.262 3.794 3.794 0 0 0-1.042-.85 2.409 2.409 0 0 1 0-4.164 3.793 3.793 0 0 0 1.043-.85 3.044 3.044 0 0 0 .611-2.262 7.606 7.606 0 0 0-1.161-2.457 7.631 7.631 0 0 0-1.564-2.223 3.1 3.1 0 0 0-2.279-.606 3.817 3.817 0 0 0-1.263.471 2.509 2.509 0 0 1-2.416-.012 2.471 2.471 0 0 1-1.218-2.07 3.744 3.744 0 0 0-.221-1.321 3.071 3.071 0 0 0-1.669-1.656ZM17.535 21.89a4.59 4.59 0 1 0-4.625-4.59 4.607 4.607 0 0 0 4.625 4.59Z"
                                        transform="translate(-3 -2)"
                                        fillRule="evenodd"
                                    />
                                </svg>

                                <p className="group-hover:text-white group-data-[state=active]:text-white font-parkinsans text-sm">
                                    General
                                </p>
                            </TabsTrigger>

                            <TabsTrigger
                                className="group flex gap-6 data-[state=active]:bg-green-theme hover:bg-green-theme cursor-pointer p-3 w-full"
                                value="profile"
                            >
                                {/* YOUR PROFILE SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 30.6 30.6"
                                    className="
                                w-8
                                h-8
                                shrink-0
                                scale-x-[1.4]
                                scale-y-[1.4]
                                fill-[#002602]
                                transition-colors
                                group-hover:fill-white
                                group-data-[state=active]:fill-white
                            "
                                >
                                    <path data-name="Path 40335" d="M32.6 17.3A15.3 15.3 0 1 0 6.942 28.53c0 .015 0 .015-.015.031.153.153.337.275.49.413a3.206 3.206 0 0 0 .26.214c.275.229.581.444.872.658.107.076.2.138.306.214a9.108 9.108 0 0 0 .918.551c.107.061.229.138.337.2a9.319 9.319 0 0 0 .964.459 3.912 3.912 0 0 0 .367.168q.5.207 1.01.367a3.443 3.443 0 0 0 .367.122c.367.107.734.2 1.1.291a2.171 2.171 0 0 0 .337.077 12.108 12.108 0 0 0 1.3.2.768.768 0 0 1 .184.031c.52.046 1.04.076 1.561.076s1.04-.031 1.545-.076a.768.768 0 0 0 .184-.031 12.108 12.108 0 0 0 1.3-.2c.107-.015.214-.061.337-.077.367-.092.75-.168 1.1-.291a3.444 3.444 0 0 1 .367-.122c.337-.122.688-.229 1.01-.367a3.912 3.912 0 0 0 .367-.168q.482-.207.964-.459c.122-.061.229-.138.337-.2.306-.184.612-.352.918-.551a3.711 3.711 0 0 0 .306-.214c.306-.214.6-.428.872-.658a3.2 3.2 0 0 1 .26-.214c.168-.138.337-.275.49-.413 0-.015 0-.015-.015-.031A15.217 15.217 0 0 0 32.6 17.3Zm-7.742 7.6a14.721 14.721 0 0 0-15.116 0 7.388 7.388 0 0 0-1.683 1.53 13 13 0 1 1 18.482 0 7.081 7.081 0 0 0-1.683-1.53Z"

                                        transform="translate(-2 -2)"

                                    />

                                    <path data-name="Path 40336" d="M13.987 6.93a5.73 5.73 0 0 0-.077 11.46h.275a5.731 5.731 0 0 0-.2-11.46Z"

                                        transform="translate(1.312 .613)"

                                    />
                                    {/* paths */}
                                </svg>

                                <p className="group-hover:text-white group-data-[state=active]:text-white font-parkinsans text-sm">
                                    Profile
                                </p>
                            </TabsTrigger>

                        </TabsList>
                        <div className="mt-4 lg:mt-0 flex justify-center lg:justify-start pb-2">
                            <CustomButton
                               onClick={()=>logout()}
                                Text="Log Out"
                                Icon={
                                    <img
                                        src={logout_icon}
                                        className="w-4"
                                        alt="logout_icon"
                                    />
                                }
                                TextClassName="font-semibold!"
                                className="bg-white! text-[#ff0000]! w-[150px]! lg:w-full! font-parkinsans! font-normal! rounded-md! shadow-md justify-center flex flex-row-reverse gap-3 px-6"
                            />
                        </div>

                    </div>


                    {/* BORDER */}
                    <div className="lg:h-full w-full lg:w-auto border-b lg:border-l border-[#4caf50]" />


                    {/* RIGHT CONTENT */}
                    <div className="flex-1 min-w-0 min-h-0 h-full overflow-y-auto">

                        <TabsContent value="general" className="mt-0 h-full">
                            <GeneralTab />
                        </TabsContent>


                        <TabsContent value="profile" className="mt-0 h-full">
                            <ProfileTab />
                        </TabsContent>

                    </div>

                </Tabs>

            </div>
        </div>
    )
}

export default Settings