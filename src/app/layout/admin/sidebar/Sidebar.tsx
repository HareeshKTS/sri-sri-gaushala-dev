import { GaushalaCowLogoGreen, sidebar_cow_logo } from "@/assets/admin_assets"
import SidebarMenu from "./SidebarMenu"
import admin_routes from "./Routes";
import { useLocation, useNavigate } from "react-router";
import type { Dispatch, SetStateAction, TransitionStartFunction } from "react";

type SidebarProps = {
    openSidebar: boolean;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
    startTransition: TransitionStartFunction;
};

const Sidebar: React.FC<SidebarProps> = ({ openSidebar, setOpenSidebar, startTransition }) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col overflow-auto w-50 h-screen">
            <div className='flex items-center justify-center py-4 bg-[#ffffff] lg:bg-transparent'>
                <img
                    src={GaushalaCowLogoGreen}
                    alt="GaushalaCowLogoGreen"
                    className='h-auto min-w-28 max-w-28 object-contain'
                />
            </div>
            <div className="flex-1 flex flex-col bg-[#ffffff] overflow-auto  lg:rounded-tr-md shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
                <div className="flex-1 flex flex-col gap-2 px-2 py-2 overflow-auto">
                    {admin_routes.map((route) => {
                        const isParentActive =
                            location.pathname === route.route ||
                            location.pathname.startsWith(`${route.route}/`);
                        return (
                            <SidebarMenu
                                key={route.id}
                                route={route}
                                isParentActive={isParentActive}
                                openSidebar={openSidebar}
                                setOpenSidebar={setOpenSidebar}
                                startTransition={startTransition}
                                navigate={navigate}
                            />
                        )
                    }

                    )}
                </div>
                <div>
                    <img
                        src={sidebar_cow_logo}
                        alt="sidebar_cow_logo"
                        className="h-auto w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
