import { Suspense, useEffect } from "react";
import { Outlet } from "react-router";
import CustomPageLoader from "@/shared/loaders/CustomPageLoader";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import SmoothScroll from "./SmoothScroll";

const MainLayout = () => {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("hide-scroll-bar");
    return () => html.classList.remove("hide-scroll-bar");
  }, []);

  return (
    <div className="min-h-screen w-full">
      <SmoothScroll />
      <NavBar />
      <main className="hide-scrollbar">
        <Suspense fallback={<CustomPageLoader />}>
          <Outlet />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};
export default MainLayout;