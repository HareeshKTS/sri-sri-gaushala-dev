import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";
interface CustomPageLoaderProps {
    className?: string;
    color?: string
}
const CustomPageLoader: React.FC<CustomPageLoaderProps> = ({
    className = "",
    color = '#2e7d32'
}) => {
    return (
        <div className={`absolute inset-0 flex items-center justify-center bg-white/40 z-50 ${className}`} >
            <TailChase
                size={45}
                speed={1.75}
                color={color}
            />
        </div>
    );
};
export default CustomPageLoader;