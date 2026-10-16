import { useState } from "react";
import {
    Select,
    SelectContent,
    CustomSelectItem,
    SelectTrigger,
    // SelectValue,
} from "@/components/ui/select";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
export type Option<T extends string | number = string> = {
    label: string;
    value: T;
};

type CustomDropDownProps<T extends string | number = string> = {
    label?: string;
    name?: string;
    placeholder?: string;
    options: Option<T>[];
    value?: Option<T> | null;
    defaultValue?: Option<T> | null;
    onChange?: (option: Option<T>) => void;
    disabled?: boolean;
    required?: boolean;
    description?: string;
    error?: string;
    displayed_text_color?:string
    trigger_classname?:string
};

const CustomDropDown = <T extends string | number = string>({
    label,
    name,
    placeholder = "Select",
    options,
    value,
    defaultValue = null,
    onChange,
    disabled = false,
    required = false,
    description,
    error,
    displayed_text_color='',
    trigger_classname=''
}: CustomDropDownProps<T>) => {
    const [internalValue, setInternalValue] = useState<Option<T> | null>(
        defaultValue ?? null
    );
    const selectedValue = value ?? internalValue;
    const handleChange = (newValue: string) => {
        const selectedOption = options.find(
            (option) => String(option.value) === newValue
        );

        if (!selectedOption) return;

        if (value === undefined) {
            setInternalValue(selectedOption);
        }

        onChange?.(selectedOption);
    };

    return (
        <Field data-invalid={!!error} className="relative">
            {label && (
                <FieldLabel htmlFor={name}>
                    {label}
                    {required && <span className="text-destructive">*</span>}
                </FieldLabel>
            )}

            <Select
                value={selectedValue ? String(selectedValue.value) : undefined}
                onValueChange={handleChange}
                disabled={disabled}
            >
                <SelectTrigger
                    id={name}
                    aria-invalid={!!error}
                    className={`w-full bg-white border-white shadow min-h-8.75 font-semibold rounded-full px-4 md:min-w-32.5 ${trigger_classname}`}
                    
                >
                    <span className={selectedValue && displayed_text_color ? displayed_text_color :""} >
                        {selectedValue?.label ?? placeholder}
                    </span>
                    {/* <SelectValue placeholder={placeholder} /> */}
                </SelectTrigger>
                <SelectContent position="popper" className="p-1 font-poppins flex flex-col gap-y-2! py-0 min-w-37.5 ">
                    {options.map((option) => (
                        <CustomSelectItem key={option.value} value={String(option.value)}
                                    className="cursor-pointer my-1 py-1.5
                                    data-highlighted:bg-[#d4e5d1] pr-2">
                            {option.label}
                        </CustomSelectItem>
                    ))}
                </SelectContent>
            </Select>

            {description && <FieldDescription>{description}</FieldDescription>}

            {error && (
                <FieldError
                    errors={[{ message: error } as any]}
                    className="absolute -bottom-5"
                />
            )}
        </Field>
    );
};

export default CustomDropDown;
