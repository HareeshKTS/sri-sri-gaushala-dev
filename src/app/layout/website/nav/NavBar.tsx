/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ChevronDown, Menu } from "lucide-react";
import { AppLogoVid, } from "@/assets/website_assets";
import { NAV_ITEMS } from "./NavRoutes";
import MobileSidebar from "./MobileSidebar";
import CustomDropDown from "@/shared/CustomDropDown";
type NavItem = {
    label: string;
    to?: string;
    children?: { label: string; to: string }[];
}
 const LANGUAGES_OPTIONS = [
    { label: "English", value: "english" },
    { label: "हिन्दी", value: "hindi" },
    { label: "ಕನ್ನಡ", value: "kannada" },
    { label: "తెలుగు", value: "telugu" },
    { label: "العربية", value: "arabic" },
    { label: "中文（简体）", value: "chinese_simplified" },
    { label: "Nederlands", value: "dutch" },
    { label: "Français", value: "french" },
    { label: "Deutsch", value: "german" },
    { label: "ગુજરાતી", value: "gujarati" },
    { label: "Italiano", value: "italian" },
    { label: "Português", value: "portuguese" },
    { label: "Русский", value: "russian" },
    { label: "Español", value: "spanish" },
];
const route_btn_class = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap rounded-full px-2.5 py-2 text-[12px] font-semibold uppercase tracking-wide transition-colors ${isActive
        ? `bg-white text-[#1f7a2e] shadow-[inset_0_0_6px_0_#0340065c]`
        : "text-[#1f2937] hover:text-[#1f7a2e]"
    }`;
// const LANGUAGES_OPTIONS = [
//     { label: "English", value: "english" },
//     { label: "हिन्दी", value: "हिन्दी" },
//     { label: "ಕನ್ನಡ", value: "ಕನ್ನಡ" },
// ];




// on hover dropdown will opens
// function DesktopDropdown({ item }: { item: NavItem }) {
//     const [open, setOpen] = useState(false);
//     const ref = useRef<HTMLDivElement>(null);
//     const { pathname } = useLocation();

//     // true when the current route is one of this dropdown's children
//     const isChildActive = !!item.children?.some(
//         (c) => pathname === c.to || pathname.startsWith(`${c.to}/`)
//     );

//     useEffect(() => setOpen(false), [pathname]);

//     useEffect(() => {
//         const onClick = (e: MouseEvent) => {
//             if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
//         };
//         document.addEventListener("mousedown", onClick);
//         return () => document.removeEventListener("mousedown", onClick);
//     }, []);

//     return (
//         <div
//             ref={ref}
//             className="relative"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//         >
//             <button
//                 type="button"
//                 aria-haspopup="menu"
//                 aria-expanded={open}
//                 onClick={() => setOpen((o) => !o)}
//                 className={`flex cursor-pointer items-center gap-1 rounded-full ml-1 px-2.5 py-2 text-[12px] font-semibold uppercase tracking-wide transition-colors ${isChildActive
//                     ? "bg-white text-[#1f7a2e] shadow-[inset_0_0_6px_0_#0340065c]"
//                     : "text-[#1f2937] hover:text-[#1f7a2e]"
//                     }`}
//             >
//                 {item.label}
//                 <ChevronDown
//                     size={13}
//                     className={`transition-transform ${open ? "rotate-180" : ""}`}
//                 />
//             </button>

//             {open && (
//                 <div className="absolute left-0 top-full z-50 pt-2">
//                     <div className="min-w-[140px] overflow-hidden rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 -mt-2 px-2">
//                         {item.children?.map((c) => (
//                             <NavLink
//                                 key={c.to}
//                                 to={c.to}
//                                 className={({ isActive }) =>
//                                     `block px-2 py-2 text-[12px] font-medium hover:bg-[#f1f7f2] ${isActive
//                                         ? "text-[#1f7a2e] border-b border-[#1f7a2e]"
//                                         : "text-[#1f2937]"
//                                     }`
//                                 }
//                             >
//                                 {c.label}
//                             </NavLink>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }



function DesktopDropdown({ item }: { item: NavItem }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();

    const isChildActive = !!item.children?.some(
        (c) => pathname === c.to || pathname.startsWith(`${c.to}/`)
    );

    // Close dropdown whenever the route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (
                ref.current &&
                !ref.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", onClick);

        return () => {
            document.removeEventListener("mousedown", onClick);
        };
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
                className={`ml-1 flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-2 text-[12px] font-semibold uppercase tracking-wide transition-colors ${isChildActive
                        ? "bg-white text-[#1f7a2e] shadow-[inset_0_0_6px_0_#0340065c]"
                        : "text-[#1f2937] hover:text-[#1f7a2e]"
                    }`}
            >
                {item.label}
                <ChevronDown
                    size={13}
                    className={`transition-transform ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div className="absolute left-0 top-full z-50 pt-2">
                    <div className="-mt-2 min-w-[140px] overflow-hidden rounded-md bg-white px-2 py-1 shadow-lg ring-1 ring-black/5">
                        {item.children?.map((c) => (
                            <NavLink
                                key={c.to}
                                to={c.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `block px-2 py-2 text-[12px] font-medium hover:bg-[#f1f7f2] ${isActive
                                        ? "border-b border-[#1f7a2e] text-[#1f7a2e]"
                                        : "text-[#1f2937]"
                                    }`
                                }
                            >
                                {c.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}


const buttonsClass = "whitespace-nowrap rounded-full bg-[#f7941d] border border-[#b74f00] px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md  touchable-opacity";
const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();
    const [selectedLanguage, setSelectedLanguage] = useState({ label: "English", value: "english" })
     useEffect(() => setSidebarOpen(false), [pathname]);
    return (
        <>
            <header className="sticky top-0 z-30 w-full bg-[#fff]">
                <div className="flex h-[60px]  items-center justify-between gap-3 px-3 md:px-4">
                    <div className="flex items-center gap-4 xl:gap-6">
                        <Link to="/" aria-label="Home" className="shrink-0">
                            <video
                                src={AppLogoVid}
                                // poster={GaushalaAppLogo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                disablePictureInPicture
                                controls={false}
                                aria-label="Logo"
                                className="h-13 w-auto md:h-10 pointer-events-none bg-white fill-white"
                            />
                        </Link>
                        {/* <Link to="/" aria-label="Home" className="shrink-0">
                            <img src={GaushalaAppLogo} alt="Logo" className="h-8 md:h-10 w-auto" />
                        </Link> */}
                        <div className="md:flex hidden">
                            <CustomDropDown
                                value={selectedLanguage}
                                onChange={setSelectedLanguage}
                                options={LANGUAGES_OPTIONS}
                                displayed_text_color={'text-green-theme'}
                            />
                        </div>
                    </div>
                    <nav
                        aria-label="Main"
                        className="hidden items-center gap-1 rounded-full bg-white px-2 py-1.5 shadow-sm lg:flex"
                    >
                        {NAV_ITEMS.map((item) =>
                            item.children ? (
                                <DesktopDropdown key={item.label} item={item} />
                            ) : (
                                <NavLink key={item.to} to={item.to!} end={item.to === "/"} className={route_btn_class}>
                                    {item.label}
                                </NavLink>
                            )
                        )}
                        <div className="flex items-center gap-3 ml-3">
                            <div className="hidden items-center gap-3 lg:flex">
                                <Link to="https://visit.srisrigaushala.org/" className={buttonsClass}>
                                    Visit Us
                                </Link>
                                <Link to="https://vaidicpujas.org/support" className={buttonsClass}>
                                    Donate Now
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={sidebarOpen}
                        onClick={() => setSidebarOpen(true)}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md touchable-opacity lg:hidden "
                    >
                        <Menu size={22} className={'text-[#1f7a2e]'} />
                    </button>
                </div>
            </header>
            <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    );
};
export default NavBar;