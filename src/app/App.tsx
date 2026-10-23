import { BrowserRouter } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import CustomPageLoader from "@/shared/loaders/CustomPageLoader";
import AppRoutes from "./router/AppRoutes";
const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_APP_BASEURL||'/'}>
      <div className='h-full '>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3500,
          }}
        />
        <Suspense
          fallback={<CustomPageLoader />}
        >
          <AppRoutes />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
export default App;