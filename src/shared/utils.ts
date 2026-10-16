import { useEffect, useState } from "react";
import { AxiosError } from "axios";

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean>(() =>
        typeof window !== "undefined" ? window.matchMedia(query).matches : false,
    );
    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);

        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);
    return matches;
};

const REQUIRED_WIDTH = 1080;
const REQUIRED_HEIGHT = 1920;

export const validateImageDimensions = (
    file: File
): Promise<boolean> => {
    return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
            const isValid =
                img.naturalWidth === REQUIRED_WIDTH &&
                img.naturalHeight === REQUIRED_HEIGHT;

            URL.revokeObjectURL(img.src);

            resolve(isValid);
        };

        img.onerror = () => {
            URL.revokeObjectURL(img.src);
            resolve(false);
        };

        img.src = URL.createObjectURL(file);
    });
};

export const GetErrorMessage = (
    error: unknown,
    fallback = "Something went wrong"
): string => {
    const err = error as AxiosError<any>;
    return (
        err?.response?.data?.message ||
        err?.response?.data?.msg ||
        err?.response?.data?.error ||
        err?.response?.data?.detail ||
        err?.response?.data?.result?.msg ||
        err?.response?.statusText ||
        err?.message ||
        fallback
    );
};