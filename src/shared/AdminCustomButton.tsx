import React from "react";
import { Loader2 } from "lucide-react";

interface AdminCustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text?: React.ReactNode;
  Icon?: React.ReactNode;
  IsLoading?: boolean;
  LoaderClassName?: string;
  TextClassName?: string;
}

const AdminCustomButton = React.forwardRef<
  HTMLButtonElement,
  AdminCustomButtonProps
>(
  (
    {
      Text,
      Icon,
      disabled = false,
      className = "",
      TextClassName = "",
      onClick,
      IsLoading = false,
      LoaderClassName = "",
      type = "button",
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || IsLoading;

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        {...rest}
        className={`
          flex h-11 font-saira font-semibold text-sm w-full items-center justify-center gap-1
          rounded-xl px-3 py-3 text-white
          ${isDisabled ? "cursor-not-allowed bg-[#a2abb5]" : "cursor-pointer bg-green-theme"}
          ${!isDisabled ? "" : ""}
          ${IsLoading ? "pointer-events-none" : ""}
          ${className}
        `}
      >
        {/* Icon */}
        {Icon &&
          (IsLoading ? (
            <Loader2
              className={`animate-spin text-white ${LoaderClassName}`}
            />
          ) : (
            Icon
          ))}

        {/* Text */}
        {Text && (
          <span
            className={`flex items-center gap-1 text-[14px] ${TextClassName}`}
          >
            {Text}

            {IsLoading && !Icon && (
              <Loader2
                size={20}
                className={`animate-spin ${LoaderClassName}`}
              />
            )}
          </span>
        )}
      </button>
    );
  }
);
AdminCustomButton.displayName = "AdminCustomButton";
export default AdminCustomButton;