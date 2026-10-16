type GalleryIconProps = {
    color?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    secondaryColor?: string;
    primaryColor?: string;
};

const GalleryIcon: React.FC<GalleryIconProps> = ({
    width = 15,
    height = 20,
    secondaryColor = "#002602",
    primaryColor = "#ffffff",
    className = "",
}) => {

    const path = `
        M2.5 7.047a7.062 7.062 0 0 1 .31-3A2.842 2.842 0 0 1 4.052 2.81
        a7.062 7.062 0 0 1 3-.31h8.905a7.062 7.062 0 0 1 3 .31
        2.842 2.842 0 0 1 1.233 1.242 7.062 7.062 0 0 1 .31 3v8.905
        a7.062 7.062 0 0 1-.31 3 2.842 2.842 0 0 1-1.242 1.242
        7.062 7.062 0 0 1-3 .31H7.047a7.062 7.062 0 0 1-3-.31
        2.842 2.842 0 0 1-1.237-1.251 7.062 7.062 0 0 1-.31-3Zm14.589-2.652
        H5.911a2.354 2.354 0 0 0-1 .1.947.947 0 0 0-.414.414
        2.354 2.354 0 0 0-.1 1v9.379L6.1 13.581a3.529 3.529 0 0 1
        1.168-.949 1.421 1.421 0 0 1 .879 0 3.529 3.529 0 0 1
        1.168.949l.761.761 3.129-3.129a3.529 3.529 0 0 1 1.168-.949
        1.421 1.421 0 0 1 .879 0 3.529 3.529 0 0 1 1.168.949
        l2.182 2.182V5.911a2.354 2.354 0 0 0-.1-1 .947.947 0 0 0
        -.414-.414 2.354 2.354 0 0 0-1-.1M8.184 9.605a1.421 1.421 0 1 0
        -1.421-1.421 1.421 1.421 0 0 0 1.421 1.421
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
                transform="translate(-2.5 -2.5)"
                fill={secondaryColor}
                fillRule="evenodd"
            />

            <path
                d={path}
                transform="translate(-2.5 -2.5)"
                fill={primaryColor}
                fillRule="evenodd"
                opacity={0.5}
            />
        </svg>
    );
};

export default GalleryIcon;
