import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <main className="flex h-dvh w-full overflow-auto">
            <Outlet />
        </main>
    );
};
export default AuthLayout;