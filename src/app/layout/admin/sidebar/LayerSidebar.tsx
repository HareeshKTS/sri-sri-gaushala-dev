import type { Dispatch, SetStateAction, TransitionStartFunction } from "react";
import Sidebar from "./Sidebar";

type LayerProps = {
    openSidebar: boolean;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
    startTransition: TransitionStartFunction;
};
const LayerSidebar: React.FC<LayerProps> = ({  openSidebar, setOpenSidebar, startTransition }) => {
    return (
        <>
            {openSidebar && (
                <div
                    className="fixed inset-0 bg-black/10 z-50"
                    onClick={() => setOpenSidebar(false)}
                />
            )}
            <div
                className={` z-99999!
              transition-all ease-in-out duration-500  fixed left-0 top-0 bottom-0 
              ${openSidebar ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <Sidebar
                    startTransition={startTransition}
                    setOpenSidebar={setOpenSidebar}
                    openSidebar={openSidebar}
                />
            </div>
        </>
    )
}

export default LayerSidebar
