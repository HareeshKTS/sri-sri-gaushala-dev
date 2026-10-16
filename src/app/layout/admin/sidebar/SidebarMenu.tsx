import { useEffect, useState, type Dispatch, type SetStateAction, type TransitionStartFunction } from "react";
import { NavLink, type NavigateFunction } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { RouteItem } from "./Routes";
import { useMediaQuery } from "@/shared/utils";

interface SidebarMenuProps {
  route: RouteItem;
  isParentActive: boolean,
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  startTransition: TransitionStartFunction;
  navigate: NavigateFunction;
}

const SidebarMenu = (
  { openSidebar,
    setOpenSidebar,
    startTransition,
    route,
    isParentActive,
    navigate,
  }: SidebarMenuProps) => {
  // console.log(route, 'routeName');
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  const hasSubRoutes = Array.isArray(route.subRoute) && route.subRoute.length > 0;

  const isSubRouteActive =
    route.subRoute?.some((subRoute) => {
      const subPath = `${route.route}/${subRoute.route}`;

      return location.pathname === subPath;
    }) ?? false;

  useEffect(() => {
    if (!hasSubRoutes) {
      setOpen(false);
      return;
    }

    if (isParentActive || isSubRouteActive) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [
    hasSubRoutes,
    isParentActive,
    isSubRouteActive,
  ]);

  const handleParentClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasSubRoutes && isParentActive) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }

    startTransition(() => navigate(route.route));
    if (isMobile) {
      setOpenSidebar(!openSidebar);
    }
  };

  return (
    <div className="w-full">
      <NavLink
        to={route.route}
        onClick={handleParentClick}
        className={`flex items-center justify-center gap-3 w-full rounded-md py-2 px-6 cursor-pointer transition-colors duration-200
          ${isParentActive
            ? "bg-green-theme text-white"
            : "hover:bg-[#72a573] hover:text-white text-[#002602]"
          } polygonshape`}
      >
        {typeof route.icon === "string" ? (
          <img
            src={route.icon}
            alt={route.title}
            className="w-5 h-5 object-contain"
          />
        ) : route.icon ? (
          <route.icon
            primaryColor={isParentActive ? "#fff" : "#002602"}
            secondaryColor={isParentActive ? "#fff" : "#002602"}
            className="w-5 h-5 shrink-0"
          />
        ) : null}

        <span className="flex-1 text-[clamp(14px,1vw,0.8rem)] font-saira font-medium">
          {route.title}
        </span>

        {hasSubRoutes && (
          <span >
            {open ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </span>
        )}
      </NavLink>

      {hasSubRoutes && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ml-6 pl-3 border-l border-primary
            ${open ? "max-h-125 opacity-100 translate-y-0 mt-1" : "max-h-0 opacity-0 -translate-y-2 mt-0"}`}
        >
          <div className="flex flex-col gap-1">
            {route.subRoute?.map((subRoute) => {
              const isSub = `${route.route}/${subRoute.route}`
              return (
                <NavLink
                  onClick={() => {
                    startTransition(() => navigate(isSub));
                    if (isMobile) {
                      setOpenSidebar(!openSidebar);
                    }
                  }}
                  key={subRoute.id}
                  to={isSub}
                  className={({ isActive }) =>
                    `flex items-center justify-center gap-2 rounded-md py-1 px-3  font-medium transition-colors
                    ${isActive
                      ? "bg-green-theme text-white "
                      : "hover:bg-[#72a573] hover:text-white text-[#002602]"
                    } polygonshape`
                  }
                >
                  <span className="font-saira text-[clamp(12px,0.8vw,0.6rem)]">{subRoute.title}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
