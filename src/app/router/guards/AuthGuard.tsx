import { useAdminContext } from '@/app/context/AdminContext';
import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { admin_route_name } from '../RouteNameEnums';
const AuthGuard = () => {
    const {AccessToken } = useAdminContext();
    if (AccessToken) {
        return <Navigate to={`/${admin_route_name}/dashboard`} replace />;
    }
    return <Outlet />;
}
export default AuthGuard