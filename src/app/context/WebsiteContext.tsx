import { useMediaQuery } from "@/shared/utils";
import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
interface ProviderProps {
  children: ReactNode;
}

type ContextType = {
  isSmallerDevices?: boolean;
};
const UserGlobalContext = createContext<ContextType | undefined>(undefined);
const WebsiteContext = ({ children }: ProviderProps) => {
  const isSmallerDevices = useMediaQuery("(max-width:800px)");

  return (
    <UserGlobalContext.Provider
      value={{
        isSmallerDevices
      }}
    >
      {children}
    </UserGlobalContext.Provider>
  );
};
export default WebsiteContext;
// eslint-disable-next-line react-refresh/only-export-components
export const useWebsiteContext = () => {
  const context = useContext(UserGlobalContext);
  if (!context) {
    throw new Error("useUserContext must be used inside GlobalProvider");
  }
  return context;
};
