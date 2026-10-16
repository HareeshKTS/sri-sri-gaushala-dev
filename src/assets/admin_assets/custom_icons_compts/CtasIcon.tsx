type CtasIconProps = {
    color?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    secondaryColor?: string;
    primaryColor?: string;
};

const CtasIcon: React.FC<CtasIconProps> = ({
    width = 18,
    height = 18.685,
    secondaryColor = "#002602",
    primaryColor = "#ffffff",
    className = "",
}) => {

    const path = `
        M15.874 4.714a.62.62 0 0 0-.762.441.623.623 0 0 0 .062.472l5.87 10.173
        a.623.623 0 0 0 1.141-.151.623.623 0 0 0-.062-.472L16.253 5a.635.635 0 0 0-.379-.29Zm4.284 2.475
        a.346.346 0 0 1-.649-.238l.658-1.8a.346.346 0 0 1 .649.238ZM21.931 8.9
        a.346.346 0 0 1-.346-.6l1.663-.96a.346.346 0 0 1 .346.6Zm.134 2.475
        a.346.346 0 0 1 .119-.681l1.889.33a.346.346 0 0 1-.119.681Zm-2.108 3.915
        a8.17 8.17 0 0 0-3.39.093 26.556 26.556 0 0 0-7.1 3.142 1.3 1.3 0 0 1-1.264.031
        c-1.249-.6-2.738-3.382-1.188-4.277a26.505 26.505 0 0 0 6.27-4.575
        8.168 8.168 0 0 0 1.775-2.889Zm-.765-6.58a1.243 1.243 0 0 1 1.191 2.065Zm-5.767 8.526
        c-.61.28-1.273.609-2 1l4.644 4.821a1.064 1.064 0 0 0 1.531-1.483Z
    `;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 18 18.685"
        >
            <path
                d={path}
                transform="translate(-6.355 -4.692)"
                fill={secondaryColor}
                fillRule="evenodd"
            />

            <path
                d={path}
                transform="translate(-6.355 -4.692)"
                fill={primaryColor}
                fillRule="evenodd"
                opacity={0.5}
            />
        </svg>
    );
};

export default CtasIcon;
