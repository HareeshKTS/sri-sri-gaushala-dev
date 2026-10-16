import { Controller } from "react-hook-form";

import type {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export interface Option {
  label: string;
  value: string;
}

interface InputBoxProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  className?: string;
  inputclassname?: string;
  labelClassname?: string
}

interface TextareaProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  inputclassname?: string;
  labelClassname?: string;
  rows?: number;
}





export function CustomInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  disabled,
  className,
  inputclassname,
  labelClassname
}: InputBoxProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className={`space-y-2 relative ${className}`}>
          {label && (
            <Label className={`font-saira font-semibold text-black ${labelClassname}`}>
              {label}
            </Label>
          )}

          <Input
            {...field}
            value={field.value ?? ""}
            type={isPassword && !showPassword ? "password" : "text"}
            placeholder={placeholder}
            disabled={disabled}
            className={`font-montserrat text-sm placeholder:text-gray-400 ${inputclassname}`}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              disabled={disabled}
              className="cursor-pointer absolute right-4 top-[60%] -translate-y-1/2 text-black hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          )}
          <div className="h-1">
            {fieldState.error && (
              <p className="absolute -bottom-2 right-2 font-montserrat text-xs sm:text-sm text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </div>
        </div>
      )}
    />
  );
}

export function CustomTextarea<T extends FieldValues>({ 
  control,
   name, 
   label,
    placeholder, 
    disabled, 
    className, 
    inputclassname, 
    labelClassname,
     rows = 4, 
    }: TextareaProps<T>) 
    { 
      return ( 
      <Controller 
      control={control} 
      name={name} 
      render={({ field, fieldState }) => (
         <div className={`space-y-2 relative ${className ?? ""}`}> 
         {label && ( 
          <Label className={`font-saira font-semibold text-black ${ labelClassname ?? "" }`} >
             {label} 
             </Label> 
             )
             } 
             <Textarea 
             {...field} value={field.value ?? ""} 
             placeholder={placeholder} 
             disabled={disabled} 
             rows={rows} 
             className={`font-montserrat text-sm placeholder:text-gray-400 resize-none ${ inputclassname ?? "" }`} />
              <div className="h-1"> {fieldState.error && ( <p className="absolute -bottom-2 right-2 font-montserrat text-xs sm:text-sm text-red-500">
                 {fieldState.error.message} 
                 </p> 
                 )} 
                 </div> 
                 </div> 
                 )} 
                 /> 
                );
              }

