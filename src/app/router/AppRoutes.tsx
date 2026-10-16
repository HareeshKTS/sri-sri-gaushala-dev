import { useRoutes } from "react-router";
// import AdminRoutes from "./AdminRoutes";
import WebsiteRoutes from "./WebsiteRoutes";
// import { admin_route_name } from "./RouteNameEnums";
function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/*",
      element: <WebsiteRoutes/>,
    },
  ]);
  return routes;
}
export default AppRoutes;
