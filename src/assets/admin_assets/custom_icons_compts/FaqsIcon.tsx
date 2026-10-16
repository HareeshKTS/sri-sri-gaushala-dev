type FaqsIconProps = {
    color?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    secondaryColor?: string;
    primaryColor?: string;
};

const FaqsIcon: React.FC<FaqsIconProps> = ({
    width = 15,
    height = 20,
    secondaryColor = "#002602",
    primaryColor = "#ffffff",
    className = "",
}) => {

    const path = `
        M11 2a9 9 0 1 0 9 9 9.026 9.026 0 0 0-9-9Zm0 13.5a.9.9 0 0 1 0-1.8
        .9.9 0 1 1 0 1.8Zm.9-3.6a.968.968 0 0 1-.9.9.968.968 0 0 1-.9-.9
        v-.63a.864.864 0 0 1 .63-.81l.63-.18a.787.787 0 0 0 .54-.81
        .807.807 0 0 0-.81-.81H11a1.111 1.111 0 0 0-.72.36.885.885 0 0 1-1.26.27
        1.008 1.008 0 0 1-.27-1.35 2.651 2.651 0 0 1 2.16-1.17H11
        a2.612 2.612 0 0 1 2.61 2.61 2.439 2.439 0 0 1-1.71 2.52Z
    `;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 18 18"
        >
            <path
                d={path}
                transform="translate(-2 -2)"
                fill={secondaryColor}
            />

            <path
                d={path}
                transform="translate(-2 -2)"
                fill={primaryColor}
                opacity={0.5}
            />
        </svg>
    );
};

export default FaqsIcon;
