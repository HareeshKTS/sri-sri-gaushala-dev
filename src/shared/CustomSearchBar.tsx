import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Card } from "@/components/ui/card";
import { Search, Loader } from "lucide-react";
import { cn } from "@/lib/utils";

type CustomSearchBarProps = {
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    debounceTime?: number;
    disabled?: boolean;
    className?: string;
    inputClassName?: string;
    onChange?: (value: string) => void;
    isLoading?: boolean;
};

const CustomSearchBar = ({
    value,
    defaultValue = "",
    placeholder = "Search",
    debounceTime = 300,
    disabled = false,
    className,
    inputClassName,
    onChange,
    isLoading = false,
}: CustomSearchBarProps) => {
    const [searchValue, setSearchValue] = useState(value ?? defaultValue);
    const [debouncedValue] = useDebounce(searchValue, debounceTime);

    // Sync when the parent changes the controlled value
    useEffect(() => {
        if (value !== undefined) {
            setSearchValue(value);
        }
    }, [value]);

    // Trigger callback after the user stops typing
    useEffect(() => {
        if (value !== undefined && searchValue === value) {
            return;
        }

        onChange?.(debouncedValue);
    }, [debouncedValue]);

    return (
        <Card
            className={cn(
                "flex w-full items-center gap-3 rounded-sm px-1.5 py-1 shadow-none lg:w-[35%]!",
                className
            )}
        >
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                className={cn(
                    `w-full bg-[#f5f5f5] px-4 py-1 font-gotham
                    font-normal text-[#46484b] outline-none
                    placeholder:text-sm placeholder:text-[#a2d5a4]
                    disabled:cursor-not-allowed disabled:opacity-50`,
                    inputClassName
                )}
            />

            {isLoading ? (
                <Loader
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 animate-spin"
                />
            ) : (
                <Search
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0"
                />
            )}
        </Card>
    );
};

export default CustomSearchBar;