import { Card } from "@/components/ui/card"
import {
    total_breed_bulls,
    total_breed_cows,
    total_breeds,
} from "@/assets/admin_assets"

type insightsTypes = {
    title: string;
    icon: string | null;
    count: string | number;
    name: string;
}


const InsightsData: insightsTypes[] = [
    {
        title: "Total Breeds",
        icon: total_breeds,
        count: '20+',
        name: "Active breeds in Gaushala"
    },
    {
        title: "Total Cows",
        icon: total_breed_cows,
        count: '10+',
        name: "Across all breeds"
    },
    {
        title: "Total Bulls",
        icon: total_breed_bulls,
        count: '10+',
        name: "Across all breeds"
    },
]
const BreedAnalytics = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-2 ">
            {
                InsightsData?.map((item, idx) => (
                    <Card
                        key={idx}
                        className="rounded-sm"
                    >
                        <div className="relative ">

                            {item.icon && (
                                <div className="flex justify-center items-center w-full h-full">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="object-contain w-auto h-auto backdrop-blur-[#00000012]"
                                    />
                                </div>
                            )}
                            <div
                                className=" absolute top-1/2 right-4 translate-x-0 -translate-y-1/2
                                                    h-full p-2 flex flex-col items-start  justify-center gap-0   
                                                   font-stretch-normal leading-snug"
                            >
                                <p className="font-gotham font-bold tracking-[0.17px] text-[clamp(20px,2.5vw,1.5rem)] text-[#002602]">
                                    {item.title}
                                </p>
                                <p className="font-medium text-green-theme  text-[clamp(18px,2.5vw,2.2rem)]">
                                    {item.count}
                                </p>
                                <div className="flex gap-1 items-center">
                                    <p className="font-normal text-sm text-green-theme">{item.name}</p>
                                </div>

                            </div>

                        </div>
                    </Card>
                ))
            }

        </div>
    )
}

export default BreedAnalytics
