type VideosIconProps = {
    color?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    secondaryColor?: string;
    primaryColor?: string;
};

const VideosIcon: React.FC<VideosIconProps> = ({
    width = 15,
    height = 20,
    secondaryColor = "#002602",
    primaryColor = "#ffffff",
    className = "",
}) => {

    const path = `
        M17.153 8H5.187a3.017 3.017 0 0 0-3.017 3.017v8.448
        a3.017 3.017 0 0 0 3.017 3.017h11.966a3.017 3.017 0 0 0 3.017-3.017
        v-8.448A3.017 3.017 0 0 0 17.153 8ZM14.4 16.038l-4.95 2.655
        a.9.9 0 0 1-1.334-.8v-5.31a.905.905 0 0 1 1.334-.8l4.95 2.661
        a.905.905 0 0 1 0 1.593ZM9.324 13.09l4.01 2.151-4.01 2.151Z
    `;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 18 14.482"
        >
            <path
                d={path}
                transform="translate(-2.17 -8)"
                fill={secondaryColor}
            />

            <path
                d={path}
                transform="translate(-2.17 -8)"
                fill={primaryColor}
                opacity={0.5}
            />
        </svg>
    );
};

export default VideosIcon;
