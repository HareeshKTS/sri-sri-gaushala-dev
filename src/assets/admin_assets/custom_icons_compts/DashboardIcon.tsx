type DashBoardIconProps = {
    color?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    secondaryColor?: string;
    primaryColor?: string;
}
const DashBoardIcon: React.FC<DashBoardIconProps> = ({
    width = 18.321,
    height = 18.321,
    secondaryColor = "#002602",
    primaryColor = "#ffffff",
    className = "",
}) => {

    const path = `
        M4.018 13.178h6.107a1.021 1.021 0 0 0 1.018-1.018V4.018
        A1.021 1.021 0 0 0 10.125 3H4.018A1.021 1.021 0 0 0 3 4.018v8.143
        a1.021 1.021 0 0 0 1.018 1.017Zm0 8.143h6.107a1.021 1.021 0 0 0 1.018-1.021
        v-4.068a1.021 1.021 0 0 0-1.018-1.018H4.018A1.021 1.021 0 0 0 3 16.232V20.3
        a1.021 1.021 0 0 0 1.018 1.021Zm10.178 0H20.3a1.021 1.021 0 0 0 1.021-1.021
        v-8.139a1.021 1.021 0 0 0-1.021-1.018h-6.1a1.021 1.021 0 0 0-1.018 1.018V20.3
        a1.021 1.021 0 0 0 1.018 1.021Zm-1.018-17.3v4.068A1.021 1.021 0 0 0 14.2 9.107
        h6.1a1.021 1.021 0 0 0 1.018-1.018V4.018A1.021 1.021 0 0 0 20.3 3h-6.1
        a1.021 1.021 0 0 0-1.022 1.018Z
    `;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 18.321 18.321"
        >
            <path
                d={path}
                transform="translate(-3 -3)"
                fill={secondaryColor}
            />

            <path
                d={path}
                transform="translate(-3 -3)"
                fill={primaryColor}
                opacity={0.5}
            />
        </svg>
    )
}
export default DashBoardIcon