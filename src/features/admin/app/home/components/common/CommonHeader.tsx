import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router"
import type { RouteSections } from "../../Types";
type CommonHeaderProps = {
    route: RouteSections;
};
const CommonHeader: React.FC<CommonHeaderProps> = ({ route }) => {
    const navigate = useNavigate()
    return (
        <Card className=" bg-[#4CAF50]! rounded-sm flex! items-center! justify-between! font-saira! py-2 px-2 text-white!">
            <div className="font-medium tracking-[0.08px]! text-[clamp(14px,1vw,0.8rem)]! font-stretch-normal!">
                <p>{route.title}</p>
            </div>
            <div className="flex! gap-2 items-center justify-center font-normal! tracking-[0.08px]! font-stretch-normal! text-[clamp(12px,1vw,0.8rem)]">
                <p>{route.route}</p>
                <button
                    onClick={() => navigate(route.path)}
                    type="button"
                    className="cursor-pointer"
                >
                    <ArrowUpRight color="#fff" size={25} />
                </button>
            </div>
        </Card>
    )
}

export default CommonHeader
