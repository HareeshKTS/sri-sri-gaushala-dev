import { useMediaQuery } from "@/shared/utils";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface ProviderProps {
  children: ReactNode;
}
type ContextType = {
  AccessToken: string | null;
  Save_Jwt_Tokens: (tokens: any) => void;
  isSmallerDevices?: boolean;
  logout: () => void
};
const GlobalContext = createContext<ContextType | undefined>(undefined);
const AdminContext = ({ children }: ProviderProps) => {

  const [AccessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem("admin_accessToken");
  });

  const isSmallerDevices = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    const handleStorage = () => {
      setAccessToken(localStorage.getItem("admin_accessToken"));
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const Save_Jwt_Tokens = (tokens: any) => {
    localStorage.setItem("admin_accessToken", tokens?.access_token);
    localStorage.setItem("admin_refreshToken", tokens?.refresh_token);
    setAccessToken(tokens?.access_token);
  };
  const clearAuth = () => {
    localStorage.removeItem("admin_accessToken");
    localStorage.removeItem("admin_refreshToken");
    localStorage.removeItem("admin_fcm_token");
    setAccessToken(null);
  };
  const logout = () => {
    clearAuth()
  };
  return (
    <GlobalContext.Provider
      value={{ AccessToken, Save_Jwt_Tokens, logout, isSmallerDevices }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AdminContext;
// eslint-disable-next-line react-refresh/only-export-components
export const useAdminContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useAppContext must be used inside GlobalProvider");
  }
  return context;
};
