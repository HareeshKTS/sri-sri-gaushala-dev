// created by Hareesh
import { Loader2 } from "lucide-react";
import React from "react";
type CustomButtonProps = {
    Text?: string;
    Icon?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    TextClassName?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    IsLoading?: boolean;
    LoaderClassName?: string;
    type?: "button" | "submit" | "reset"
};
const CustomButton: React.FC<CustomButtonProps> = ({
    Text,
    Icon,
    disabled,
    className = "",
    TextClassName = "",
    onClick,
    IsLoading = false,
    LoaderClassName,
    type = 'button'
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || IsLoading}
            className={`touchable-opacity
            flex items-center w-full justify-center gap-1 px-3 py-2.5 font-72  text-white
           ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
           ${disabled ? "bg-[#a2abb5]" : "bg-yellow-theme"}
           ${!disabled ? 'hover:bg-yellow-theme/95' : ''}
           ${IsLoading ? 'pointer-events-none' : ''}
           ${className}
        `}
        >
            {Text && (
                <div className={`flex items-center gap-1  text-[17px] font-semibold ${TextClassName}`}>
                    {Text}
                    {IsLoading && !Icon && (
                        <Loader2 className={`animate-spin ${LoaderClassName}`} size={20} />
                    )}
                </div>
            )}
            {Icon &&
                (IsLoading ? (
                    <Loader2 className={`animate-spin text-white ${LoaderClassName}`} />
                ) : (
                    Icon
                ))}
        </button>
    );
};
export default CustomButton;