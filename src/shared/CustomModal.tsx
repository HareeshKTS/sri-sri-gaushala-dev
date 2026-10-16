import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { ReactNode } from "react";

type CustomModalProps = {
    open: boolean | any;
    onOpenChange: (open: boolean | any) => void;
    title?: string;
    children: ReactNode;
    className?: string;
    closeOnOutsideClick?: boolean;
    IsCloseIconRequired?: boolean
};

const CustomModal = ({
    open,
    onOpenChange,
    children,
    className = "",
}: CustomModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange} modal={false}>
            {open && (
                <div className="fixed inset-0 bg-black/60 z-50" />
            )}
            <DialogContent
                showCloseButton={false}
                onPointerDownOutside={(e) => {
                    e.preventDefault();
                }}
                onInteractOutside={(e) => {
                    e.preventDefault();
                }}
                onOpenAutoFocus={(e) => e.preventDefault()}
                className={`w-[90%] sm:w-fit! max-w-none! h-fit! p-3!
                border-0! gap-0! rounded-xl! overflow-hidden bg-white font-72! ring-0${className}`}
            >
                <div className="w-full bg-white">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
};
export default CustomModal;