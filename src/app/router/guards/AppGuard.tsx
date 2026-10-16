import { useAdminContext } from '@/app/context/AdminContext';
import { Navigate, Outlet } from 'react-router';
import { admin_route_name } from '../RouteNameEnums';
const AppGuard = () => {
    const { AccessToken } = useAdminContext();
    if (!AccessToken) {
        return <Navigate to={`/${admin_route_name}/`} replace />;
    }
    return <Outlet />;
}
export default AppGuard