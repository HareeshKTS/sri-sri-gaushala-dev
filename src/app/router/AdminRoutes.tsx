import { useRoutes } from "react-router";
import AdminContext from "../context/AdminContext";
import PageNotFound from "@/features/PageNotFound";
import AuthLayout from "../layout/admin/AuthLayout";
import MainLayout from "../layout/admin/MainLayout";
import AuthGuard from "./guards/AuthGuard";
import AppGuard from "./guards/AppGuard";
import { lazy } from "react";
import { admin_route_name } from "./RouteNameEnums";
import Gallery from "@/features/admin/app/gallery/Gallery";
const Login = lazy(() => import("@/features/admin/auth/login/Login"));
const ForgotPassword = lazy(() => import("@/features/admin/auth/components/ForgotPassword"));
const VerifyCode = lazy(() => import("@/features/admin/auth/components/VerifyCode"));
const ResetPassword = lazy(() => import("@/features/admin/auth/components/ResetPassword"))
const ResetSuccess = lazy(() => import("@/features/admin/auth/components/ResetSuccess"))
const Dashboard = lazy(() => import("@/features/admin/app/dashboard/Dashboard"));
const Home = lazy(() => import("@/features/admin/app/home/Home"));
const Aboutus = lazy(() => import("@/features/admin/app/about_us/Aboutus"));
const Breeds = lazy(() => import("@/features/admin/app/breeds/Breeds"));
const Settings = lazy(() => import("@/features/admin/app/settings/Settings"));
const Gausewa = lazy(() => import("@/features/admin/app/gausewa/Gausewa"));
function AdminRoutes() {
    const routes = useRoutes([
        {
            element: <AuthGuard />,
            children: [
                {
                    element: <AuthLayout />,
                    children: [
                        { path: "/", element: <Login /> },
                        { path: "/forgot-password", element: <ForgotPassword /> },
                        { path: "/verify-code", element: <VerifyCode /> },
                        { path: "/reset-password", element: <ResetPassword /> },
                        { path: "/reset-success", element: <ResetSuccess /> },

                    ],
                },
            ],
        },
        {
            element: <AppGuard />,
            children: [
                {
                    element: <MainLayout />,
                    children: [
                        { path: "/dashboard", element: <Dashboard /> },
                        { path: "/home", element: <Home /> },
                         { path: "/about_us", element: <Aboutus /> },
                        { path: "/breeds", element: <Breeds /> },
                        { path: "/gausewa", element: <Gausewa /> },
                        { path: "/gallery", element: <Gallery /> },
                        { path: "/settings", element: <Settings /> },
                        { path: "*", element: <PageNotFound route_name={`/${admin_route_name}`} /> },
                    ],
                },
            ],
        },
    ]);
    return <AdminContext>{routes}</AdminContext>;
}
export default AdminRoutes;
