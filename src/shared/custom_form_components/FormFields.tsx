import { useState } from "react";
import {
    Controller,
    type Control,
    type FieldValues,
    type Path,
    type RegisterOptions,
} from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// Form Input --------------------------------------->

interface FormInputFieldProps<TFieldValues extends FieldValues> {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    label?: string;
    rules: RegisterOptions<TFieldValues, Path<TFieldValues>>;
    description?: string;
    placeholder?: string;
    type?: string;
    autoComplete?: string;
    disabled?: boolean;
    className?: string;
    containerClassName?: string;
    LabelClassName?: string;
    InputClassName?: string;
    textareaClassName?: string;
    required?: boolean;
    IsPasswordField?: boolean;
    ErrorClassName?: string;
    onChange?: (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
}


export function FormInputField<TFieldValues extends FieldValues>({
    name,
    control,
    label,
    description,
    placeholder,
    type = "text",
    autoComplete = "off",
    disabled,
    className,
    containerClassName,
    LabelClassName,
    InputClassName,
    required,
    IsPasswordField,
    ErrorClassName,
    rules,
    onChange,
}: FormInputFieldProps<TFieldValues>) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Controller
            name={name}
            rules={rules}
            control={control}
            render={({ field, fieldState }) => (
                <Field
                    data-invalid={fieldState.invalid}
                    className={`relative flex w-full flex-col gap-1 ${containerClassName ?? ""
                        } ${className ?? ""}`}
                >
                    {label && (
                        <FieldLabel
                            htmlFor={name}
                            className={`text-[clamp(14px,1vw,0.8rem)] font-saira! tracking-[0.09px]! font-medium!
                                 text-[#000000]! ${LabelClassName ?? ""
                                }`}
                        >
                            {label}

                            {required && (
                                <span className="text-destructive">
                                    *
                                </span>
                            )}
                        </FieldLabel>
                    )}

                    <div className="relative">
                        <Input
                            {...field}
                            id={name}
                            type={
                                IsPasswordField
                                    ? showPassword
                                        ? "text"
                                        : "password"
                                    : type
                            }
                            value={field.value ?? ""}
                            onChange={(event) => {
                                const value =
                                    event.target.value;

                                // Update React Hook Form
                                if (type === "number") {
                                    field.onChange(
                                        value === ""
                                            ? null
                                            : Number(value),
                                    );
                                } else {
                                    field.onChange(value);
                                }

                                // Call external onChange
                                onChange?.(event);
                            }}
                            aria-invalid={fieldState.invalid}
                            placeholder={placeholder}
                            autoComplete={autoComplete}
                            disabled={disabled}
                            className={`
                                bg-[#f8f6f2]
                                shadow-none
                                focus-visible:ring-0
                                focus-visible:ring-offset-0
                                
                                ${fieldState.error
                                    ? "border-[#bb0000]!"
                                    : ""
                                }
                                ${!fieldState.error
                                    ? "focus:border-[#a2d5a4] focus-visible:border-[#a2d5a4]"
                                    : ""
                                }
                                text-[clamp(0.9rem,0.9vw,1rem)]
                                outline-none
                                h-full
                                font-gotham!
                                placeholder:font-gotham! placeholder:text-[#cbcbcb]
                                min-h-10
                                rounded-md
                                text-[#6a6d70]
                                ring-0!
                                pr-10
                                ${InputClassName ?? ""}
                            `}
                        />

                        {IsPasswordField && (
                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        (prev) => !prev,
                                    )
                                }
                                className="absolute right-3 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center text-[#6a6d70] hover:text-[#32363a]"
                            >
                                {
                                    showPassword ? (<EyeOff size={20} />) : (<Eye size={20} />)
                                }
                            </button>
                        )}

                        {fieldState.invalid && (
                            <FieldError
                                errors={[
                                    fieldState.error,
                                ]}
                                className={`
                                    absolute -bottom-4 right-0
                                    mt-1
                                    text-[11px]
                                    font-saira
                                    text-[#bb0000]
                                    ${ErrorClassName ?? ""}
                                `}
                            />
                        )}
                    </div>

                    {description && (
                        <FieldDescription>
                            {description}
                        </FieldDescription>
                    )}
                </Field>
            )}
        />
    );
}

// Text Area Input --------------------------------------->


interface FormTextAreaProps<T extends FieldValues>
    extends Omit<
        React.ComponentProps<"textarea">,
        "name" | "value" | "defaultValue" | "onChange"
    > {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    LabelClassName?: string;
    InputClassName?: string;
    rules?: RegisterOptions<T, Path<T>>;
    onChange?: (value: string) => void;
}

export const FormTextArea = <T extends FieldValues>({
    name,
    control,
    label,
    placeholder = "",
    LabelClassName,
    disabled,
    rules,
    className,
    onChange,
    ...props
}: FormTextAreaProps<T>) => {
    if (control && name) {
        return (
            <Controller
                name={name}
                rules={rules}
                control={control}
                render={({ field, fieldState }) => (
                    <div className="w-full relative">
                        {label && (
                            <label
                                htmlFor={field.name}
                                className={`mb-1.5 block text-sm font-saira text-[clamp(14px,1vw,0.8rem)]! tracking-[0.09px] font-medium font-stretch-normal
                                     ${LabelClassName}`}
                            >
                                {label}
                            </label>
                        )}

                        <Textarea
                            {...props}
                            {...field}
                            id={field.name}
                            placeholder={placeholder}
                            disabled={disabled}
                            className={className}
                            aria-invalid={fieldState.invalid}
                            onChange={(event) => {
                                field.onChange(event);
                                onChange?.(event.target.value);
                            }}
                        />

                        {fieldState.error?.message && (
                            <p className="mt-1 text-[11px] text-[#bb0000] font-saira font-normal absolute -bottom-4 right-0">
                                {fieldState.error.message}
                            </p>
                        )}
                    </div>
                )}
            />

        )
    }
    return (
        <Textarea
            {...props}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            className={className}
            onChange={(event) => {
                onChange?.(event.target.value);
            }}
        />
    )
}

// Radio Input --------------------------------------->

interface FormRadioInputProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    value: string;
    label?: string;
    className?: string;
    labelClassName?: string;
    disabled?: boolean;
    rules?: RegisterOptions<T, Path<T>>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRadioInput = <T extends FieldValues>({
    name,
    control,
    className = "",
    labelClassName = "",
    label,
    value,
    onChange,
    disabled = false,
    rules,
}: FormRadioInputProps<T>) => {
    const inputId = `${String(name)}-${value}`;

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <div className="relative flex items-center gap-2">
                    <label
                        htmlFor={inputId}
                        className="relative flex cursor-pointer items-center"
                    >
                        <input
                            {...field}
                            id={inputId}
                            value={value}
                            checked={field.value === value}
                            disabled={disabled}
                            type="radio"
                            className={`peer h-5 w-5 appearance-none rounded-full
                                transition-all checked:border-[#4caf50] border border-[#ececec]
                                ${className}
                                ${disabled
                                    ? "bg-[#2E2F33]"
                                    : "bg-[#f8f6f2]"
                                }`}
                            onChange={(event) => {
                                if (disabled) return;

                                field.onChange(event.target.value);
                                onChange?.(event);
                            }}
                        />

                        <span
                            className="absolute left-1/2 top-1/2 h-3.75! w-3.75!
                            -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#4caf50]
                            opacity-0 transition-opacity duration-200
                            peer-checked:opacity-100"
                        />
                    </label>

                    <label
                        htmlFor={inputId}
                        className={`cursor-pointer font-saira! text-[clamp(14px,1vw,0.8rem)]!
                            font-medium font-stretch-normal tracking-[0.09px]! 2xl:text-sm ${labelClassName}`}
                    >
                        {label}
                    </label>

                    {fieldState.error?.message && (
                        <p className="mt-1 text-[11px] text-[#bb0000] font-saira font-normal absolute -bottom-4 right-0">
                            {fieldState.error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
};

export default FormRadioInput;
