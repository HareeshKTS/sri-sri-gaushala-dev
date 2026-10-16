import {
    BadgeInfo,
    CircleCheckIcon,
    OctagonXIcon,
    TriangleAlertIcon,
    X,
} from "lucide-react";
import { toast } from "sonner";
import type { ExternalToast } from "sonner";
import React from "react";
export type ToastType = "success" | "error" | "warning" | "info";
type ToastMessage = string | string[];
type ToastAction = React.ReactNode;
interface ToastOptions {
    duration?: number;
    action?: ToastAction;
    style?: React.CSSProperties;
}
export const ShowToast = (
    message: ToastMessage = "",
    type: ToastType = "info",
    options?: ToastOptions
) => {
    const typeColors: Record<ToastType, string> = {
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        info: "#277FD6",
    };
    const typeIcons: Record<ToastType, React.ReactNode> = {
        success: <CircleCheckIcon className="size-4.5" />,
        info: <BadgeInfo className="size-4.5" />,
        warning: <TriangleAlertIcon className="size-4.5" />,
        error: <OctagonXIcon className="size-4.5" />,
    };
    const style: React.CSSProperties = {
        backgroundColor: typeColors[type],
        ...(options?.style ?? {}),
    };
    const renderMessage = () => {
        if (Array.isArray(message)) {
            return message.map((msg, index) => (
                <span key={index}>{`${index + 1}. ${msg}`}</span>
            ));
        }
        return <span>{message}</span>;
    };
    return toast.custom(
        (id: string | number) => (
            <div
                style={style}
                className="text-white !rounded-none flex items-center px-2 pr-5 !font-72 py-1.5 !font-medium gap-2  text-[0.8rem] min-h-[40px]  max-w-full min-w-[300px] relative"
            >
                <span className="shrink-0">{typeIcons[type]}</span>

                <div className="flex flex-col gap-0.5">{renderMessage()}</div>

                <button
                    onClick={() => toast.dismiss(id)}
                    className="absolute right-1 top-3 -translate-y-1/2 flex items-center justify-center rounded-full cursor-pointer"
                >
                    <X className="size-3.5 hover:text-[#c9c9f2]" />
                </button>

                {options?.action && <div className="mt-1">{options.action}</div>}
            </div>
        ),
        {
            duration: options?.duration,
        } satisfies ExternalToast
    );
};