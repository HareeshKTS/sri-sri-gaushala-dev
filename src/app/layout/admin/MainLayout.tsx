import { useState, useTransition, Suspense } from "react";
import { Outlet } from "react-router";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";
import CustomPageLoader from "@/shared/loaders/CustomPageLoader";
import LayerSidebar from "./sidebar/LayerSidebar";


const MainLayout = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [, startTransition] = useTransition();

  return (
    <div className="flex h-dvh w-full  bg-[#fffcf6] dark:bg-black">
      <div className="lg:block hidden">
        <Sidebar
          startTransition={startTransition}
          setOpenSidebar={setOpenSidebar}
          openSidebar={openSidebar}
        />
      </div>
      <div>
        <LayerSidebar
          setOpenSidebar={setOpenSidebar}
          openSidebar={openSidebar}
          startTransition={startTransition}
        />
      </div>

      <div className="flex w-full lg:w-[calc(100vw-200px)]  flex-col">
        <header className="py-4 px-2">
          <NavBar
            setOpenSidebar={setOpenSidebar}
            openSidebar={openSidebar}
          />
        </header>
        <main
          id="main-scroll-container"
          className="flex-1 h-[calc(100vh-60px)] w-full overflow-auto custom-scroll"
        >
          <Suspense fallback={<CustomPageLoader />}>
            <Outlet />
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
export default MainLayout;