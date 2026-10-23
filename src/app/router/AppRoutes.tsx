import { useRoutes } from "react-router";
import AdminRoutes from "./AdminRoutes";
import WebsiteRoutes from "./WebsiteRoutes";
import { admin_route_name } from "./RouteNameEnums";
function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/*",
      element: <WebsiteRoutes/>,
    },
    {
      path: `/${admin_route_name}/*`,
      element: <AdminRoutes />,
    },
  ]);
  return routes;
}
export default AppRoutes;
