type SettingsIconProps = {
    color?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    secondaryColor?: string;
    primaryColor?: string;
};

const SettingsIcon: React.FC<SettingsIconProps> = ({
    width = 15,
    height = 20,
    secondaryColor = "#002602",
    primaryColor = "#ffffff",
    className = "",
}) => {

    const path = `
        M17.724 5A1.705 1.705 0 0 1 19.4 6.407l.147.827a1.706 1.706 0 0 0 2.266 1.306
        l.79-.286a1.706 1.706 0 0 1 2.06.751l.917 1.587a1.709 1.709 0 0 1-.379 2.16
        l-.643.541a1.706 1.706 0 0 0 0 2.611l.643.541a1.709 1.709 0 0 1 .379 2.16
        l-.917 1.587a1.706 1.706 0 0 1-2.06.751l-.79-.286a1.706 1.706 0 0 0-2.261 1.306
        l-.147.827a1.705 1.705 0 0 1-1.68 1.407h-1.834a1.705 1.705 0 0 1-1.68-1.407
        l-.147-.828a1.706 1.706 0 0 0-2.264-1.306l-.79.287a1.706 1.706 0 0 1-2.059-.752
        L8.037 18.6a1.706 1.706 0 0 1 .378-2.159l.643-.541a1.707 1.707 0 0 0 0-2.611
        l-.643-.541a1.707 1.707 0 0 1-.379-2.159l.917-1.587a1.707 1.707 0 0 1 2.06-.752
        l.79.287a1.707 1.707 0 0 0 2.261-1.306l.147-.828A1.705 1.705 0 0 1 15.891 5Zm-.917 6.186
        a3.413 3.413 0 1 0 3.414 3.414 3.413 3.413 0 0 0-3.413-3.414Z
    `;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 18 19.198"
        >
            <path
                d={path}
                transform="translate(-7.808 -5)"
                fill={secondaryColor}
                fillRule="evenodd"
            />

            <path
                d={path}
                transform="translate(-7.808 -5)"
                fill={primaryColor}
                fillRule="evenodd"
                opacity={0.5}
            />
        </svg>
    );
};

export default SettingsIcon;
