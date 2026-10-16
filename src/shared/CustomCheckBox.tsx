import React, { forwardRef } from "react";
import styled from "styled-components";
import {
    Controller,
    type Control,
    type FieldValues,
    type RegisterOptions,
} from "react-hook-form";
import { Check } from "lucide-react";

type StyledCheckboxProps = {
    $border: string;
    $backgroundcolor: string;
    $checkedColor?: string;
    $checkMarkColor?: string;
    $borderradius: string;
    $marginTopForTick?: string;
};

type CustomCheckBoxProps<T extends FieldValues = FieldValues> =
    Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "type"
    > & {
        control?: Control<T>;
        rules?: RegisterOptions<T>;

        backgroundcolor?: string;
        checkedColor?: string;
        checkMarkColor?: string;
        borderradius?: string;
        marginTopForTick?: string;
        border?: string;
    };

const CustomCheckbox = styled.input<StyledCheckboxProps>`
    appearance: none;
    border: ${(props) => props.$border};
    background-color: ${(props) => props.$backgroundcolor};
    cursor: pointer;
    border-radius: ${(props) => props.$borderradius};
    width: 16px;
    height: 16px;
    position: relative;

    &:checked {
        background-color: ${(props) =>
        props.$checkedColor || "#ffffff"};

        border-color: ${(props) =>
        props.$checkedColor || "#48af55"};
    }


    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const CustomCheckBox = forwardRef<HTMLInputElement, CustomCheckBoxProps>((props, ref) => {
    const {
        name,
        id,
        checked = false,
        onChange,
        onClick,
        onBlur,
        disabled = false,

        backgroundcolor = "#ffffff",
        checkedColor,
        checkMarkColor,

        className = "",

        border = "1px solid #48af55",
        borderradius = "2px",
        marginTopForTick,

        control,
        rules,

        ...rest
    } = props;

    const renderCheckbox = (
        field?: {
            name: string;
            value: unknown;
            onChange: (...event: unknown[]) => void;
            onBlur: () => void;
            ref: (instance: HTMLInputElement | null) => void;
        }
    ) => {
        return (
            <div
                className={`flex items-center justify-center ${disabled ? "opacity-50" : ""} ${className} w-fit font-saira`}
            >
                <CustomCheckbox
                    {...rest}
                    name={field?.name ?? name}
                    id={id}
                    type="checkbox"
                    ref={field?.ref ?? ref}
                    checked={
                        field
                            ? Boolean(field.value)
                            : checked
                    }
                    onChange={
                        field
                            ? field.onChange
                            : onChange
                    }
                    onClick={onClick}
                    onBlur={
                        field
                            ? field.onBlur
                            : onBlur
                    }
                    disabled={disabled}
                    $backgroundcolor={backgroundcolor}
                    $checkedColor={checkedColor}
                    $checkMarkColor={checkMarkColor}
                    $border={border}
                    $borderradius={borderradius}
                    $marginTopForTick={
                        marginTopForTick
                    }
                />
                {(field ? Boolean(field.value) : checked) && (
                    <Check
                        size={14}
                        strokeWidth={3}
                        color={checkMarkColor || "#48af55"}
                        className={`pointer-events-none absolute `}
                    />
                )}
            </div>
        );
    };

    if (control && name) {
        return (
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) =>
                    renderCheckbox({
                        name: field.name,
                        value: field.value,
                        onChange: field.onChange,
                        onBlur: field.onBlur,
                        ref: field.ref,
                    })
                }
            />
        );
    }

    // Normal checkbox
    return renderCheckbox();
});

CustomCheckBox.displayName = "CustomCheckBox";

export default CustomCheckBox;