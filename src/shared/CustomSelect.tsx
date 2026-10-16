import { forwardRef } from "react";
import {
    Controller,
    type Control,
    type FieldValues,
    type RegisterOptions,
} from "react-hook-form";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FieldLabel } from "@/components/ui/field";

export type SelectOption = {
    label: string;
    value: string;
};

type CustomSelectProps<T extends FieldValues = FieldValues> = {
    name?: string;
    control?: Control<T>;
    rules?: RegisterOptions<T>;

    options: SelectOption[];
    label?: string;

    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;

    placeholder?: string;
    disabled?: boolean;

    triggerClassName?: string;
    contentClassName?: string;
    itemClassName?: string;
    LabelClassName?: string;

    className?: string;
};

const CustomSelect = forwardRef<HTMLButtonElement, CustomSelectProps>((
    {
        name,
        control,
        rules,
        options,
        label,

        value,
        defaultValue,
        onValueChange,

        placeholder = "Select option",
        disabled = false,

        triggerClassName = "",
        contentClassName = "",
        itemClassName = "",
        LabelClassName,

        className = "",
    },
    ref
) => {
    const renderSelect = (
        selectedValue?: string,
        handleChange?: (value: string) => void
    ) => {
        return (
            <div className={`${className} flex w-full flex-col gap-1`}>
                {label && (
                    <FieldLabel
                        htmlFor={name}
                        className={`text-[clamp(14px,1vw,0.8rem)]! font-saira! tracking-[0.09px]! font-medium!
                                 text-[#000000]! ${LabelClassName ?? ""
                            }`}
                    >
                        {label}

                    </FieldLabel>
                )}

                <Select
                    value={selectedValue}
                    defaultValue={
                        selectedValue
                            ? undefined
                            : defaultValue
                    }
                    onValueChange={handleChange}
                    disabled={disabled}
                >
                    <SelectTrigger
                        ref={ref}
                        className={`h-8!
                                    min-w-!
                                    rounded-none!
                                    bg-green-theme!
                                    border
                                    border-[#23852D]!
                                    px-3! text-[14px]!
                                    font-normal!
                                    text-white!
                                    cursor-pointer!
                                    font-saira! ${triggerClassName}`}
                    >
                        <SelectValue
                            placeholder={placeholder}
                        />
                    </SelectTrigger>

                    <SelectContent
                        className={`rounded-[10px]! border-[#23852D]! bg-white! ${contentClassName}`}
                    >
                        <SelectGroup>
                            {options.map((item) => (
                                <SelectItem
                                    key={item.value}
                                    value={item.value}
                                    className={` 
                                        rounded-md
                                        px-2
                                        py-2
                                        text-[14px]!
                                        font-saira!
                                        text-[#002602]!
                                        focus:bg-[#EAF6EB]
                                        focus:text-[#23852D]
                                        cursor-pointer!${itemClassName}
                                        `}
                                >
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        );
    };

    // Control Way
    if (control && name) {
        return (
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) =>
                    renderSelect(
                        field.value,
                        field.onChange
                    )
                }
            />
        );
    }

    // Normal
    return renderSelect(
        value,
        onValueChange
    );
}
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;