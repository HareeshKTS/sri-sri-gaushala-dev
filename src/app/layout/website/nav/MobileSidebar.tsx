/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "./NavRoutes";
import { ChevronDown, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import { GaushalaAppLogo } from "@/assets/website_assets";

const buttonsClass =
    "whitespace-nowrap rounded-full bg-[#f7941d] border border-[#b74f00] px-5 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-white shadow-md  touchable-opacity";

const ACTIVE = "bg-white text-[#1f7a2e] shadow-[inset_0_0_6px_0_#0340065c]";
const INACTIVE = "text-[#1f2937] hover:bg-[#f1f7f2]";

export default function MobileSidebar({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const { pathname } = useLocation();

    const isChildRouteActive = (children?: { to: string }[]) =>
        !!children?.some(
            (c) => pathname === c.to || pathname.startsWith(`${c.to}/`)
        );

    // lock body scroll + close on Escape
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [open, onClose]);

    // when the sidebar opens on a child route, show that dropdown expanded
    useEffect(() => {
        if (!open) return;
        const hasActiveChild = NAV_ITEMS.some(
            (item) => item.children && isChildRouteActive(item.children)
        );
        if (hasActiveChild) setResourcesOpen(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, pathname]);

    return (
        <>
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />
            <aside
                aria-hidden={!open}
                className={`fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-[250px] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between border-b px-4 py-3">
                    <img src={GaushalaAppLogo} alt="Logo" className="h-10 w-auto" />
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={onClose}
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-3">
                    {NAV_ITEMS.map((item) => {
                        if (item.children) {
                            const childActive = isChildRouteActive(item.children);
                            return (
                                <div key={item.label}>
                                    <button
                                        type="button"
                                        onClick={() => setResourcesOpen((o) => !o)}
                                        aria-expanded={resourcesOpen}
                                        className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-semibold uppercase transition-colors ${childActive ? ACTIVE : INACTIVE
                                            }`}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    {resourcesOpen && (
                                        <div className="ml-3 mt-1 border-l-2 border-[#e7f1e8] pl-2">
                                            {item.children.map((c) => (
                                                <NavLink
                                                    key={c.to}
                                                    to={c.to}
                                                    onClick={onClose}
                                                    className={({ isActive }) =>
                                                        `block rounded-lg px-3 py-2.5 text-[13px] ${isActive
                                                            ? "font-semibold text-[#1f7a2e] underline underline-offset-4"
                                                            : "text-[#374151] hover:bg-[#f1f7f2]"
                                                        }`
                                                    }
                                                >
                                                    {c.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                key={item.to}
                                to={item.to!}
                                end={item.to === "/"}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `block rounded-lg px-3 py-3 text-[13px] font-semibold uppercase transition-colors ${isActive ? ACTIVE : INACTIVE
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>

                <div className="flex flex-col gap-3 border-t p-4">
                    <Link to="/visit-us" onClick={onClose} className={`${buttonsClass} text-center`}>
                        Visit Us
                    </Link>
                    <Link to="/donate" onClick={onClose} className={`${buttonsClass} text-center`}>
                        Donate Now
                    </Link>
                </div>
            </aside>
        </>
    );
}