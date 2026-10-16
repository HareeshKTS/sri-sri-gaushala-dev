import * as React from "react";
import { TableCell } from "@/components/ui/table";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface CustomTooltipTableCellProps {
    text: string | null | undefined;
    fallback: string;
    clampLines?: 1 | 2 | 3 | 4;
    side?: "top" | "bottom" | "left" | "right";
    className?: string;
    textClassName?: string;
    tooltipClassName?: string;
    // hideArrow?: boolean;
}
const clampClassMap: Record<number, string> = {
    1: "line-clamp-1",
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
};
const TRUNCATION_TOLERANCE_PX = 2;
export function CustomTooltipTableCell({
    text,
    fallback = "-",
    clampLines = 2,
    side = "right",
    className,
    textClassName,
    tooltipClassName
    // hideArrow = false,
}: CustomTooltipTableCellProps) {
    const displayText = text || fallback;
    const clampClass = clampClassMap[clampLines] ?? "line-clamp-2";
    const textRef = React.useRef<HTMLDivElement>(null);
    const [isTruncated, setIsTruncated] = React.useState(false);
    const checkTruncation = React.useCallback(() => {
        const el = textRef.current;
        if (!el) return;
        if (el.clientHeight === 0) return;
        const truncated =
            el.scrollHeight > el.clientHeight + TRUNCATION_TOLERANCE_PX;
        setIsTruncated(truncated);
    }, []);

    React.useLayoutEffect(() => {
        checkTruncation();
        const raf1 = requestAnimationFrame(() => {
            const raf2 = requestAnimationFrame(() => {
                checkTruncation();
            });
            // @ts-expect-error - store nested id for cleanup below
            raf1.raf2 = raf2;
        });
        let cancelled = false;
        if (document.fonts?.ready) {
            document.fonts.ready.then(() => {
                if (!cancelled) checkTruncation();
            });
        }
        return () => {
            cancelled = true;
            cancelAnimationFrame(raf1);
            // @ts-expect-error - cleanup nested rAF
            if (raf1.raf2) cancelAnimationFrame(raf1.raf2);
        };
    }, [displayText, clampLines, checkTruncation]);

    React.useEffect(() => {
        const el = textRef.current;
        if (!el) return;
        const handleResize = () => checkTruncation();
        window.addEventListener("resize", handleResize);
        let observer: ResizeObserver | undefined;
        if (typeof ResizeObserver !== "undefined") {
            observer = new ResizeObserver(() => checkTruncation());
            observer.observe(el);
        }
        return () => {
            window.removeEventListener("resize", handleResize);
            observer?.disconnect();
        };
    }, [checkTruncation]);
    const textNode = (
        <div
            ref={textRef}
            className={cn("break-words overflow-hidden", clampClass, textClassName)}
        >
            {displayText}
        </div>
    );
    return (
        <TableCell className={cn("!whitespace-normal align-middle", className)}>
            {isTruncated ? (
                <TooltipProvider>
                    <Tooltip >
                        <TooltipTrigger asChild>
                            <div className="cursor-pointer">{textNode}</div>
                        </TooltipTrigger>
                        <TooltipContent
                            side={side}
                            // hideArrow={hideArrow}
                            className={cn(
                                "max-w-xs break-all bg-white text-gray-800 border border-gray-200 shadow-md rounded-none px-3 py-2 text-xs",
                                tooltipClassName
                            )}
                        >
                            {displayText}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ) : (
                <div className="cursor-default">{textNode}</div>
            )}
        </TableCell>
    );
}
export default CustomTooltipTableCell;