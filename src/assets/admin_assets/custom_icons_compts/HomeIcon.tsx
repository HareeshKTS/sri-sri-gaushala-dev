type HomeIconProps = {
    color?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    secondaryColor?: string;
    primaryColor?: string;
}
const HomeIcon: React.FC<HomeIconProps> = ({
    width = 20,
    height = 20.415,
    secondaryColor = "#002602",
    primaryColor = "#ffffff",
    className = "",
}) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 20 20.415">
            <g data-name="Group 17527">
                <path data-name="Path 38017"
                    d="M15.6 288.644a.356.356 0 0 0-.252.1l-1.262 1.261 3.031 3.032 1.261-1.26a.357.357 0 0 0 0-.507l-2.524-2.524a.358.358 0 0 0-.255-.106Zm-2.019 1.872-5.052 5.052a.357.357 0 0 0-.1.253v2.526a.357.357 0 0 0 .356.356h2.526a.357.357 0 0 0 .253-.105q2.523-2.529 5.052-5.05Z" transform="translate(1.518 -278.287)"
                    fill={secondaryColor} />
                <path data-name="Path 38018"
                    d="M10.343 280.971a.349.349 0 0 0-.248.106c-2.978 2.958-5.955 5.97-8.929 8.926a.357.357 0 0 0 .253.612h2.95v7.141a.357.357 0 0 0 .356.359H8.3a.357.357 0 0 0 .356-.359v-4.584h3.384v3.128l4.284-4.282v-1.407h2.95a.357.357 0 0 0 .253-.609l-8.927-8.925a.358.358 0 0 0-.255-.106Z" transform="translate(-1.058 -280.971)"
                    fill={primaryColor} />
            </g>
        </svg>

    )
}
export default HomeIcon