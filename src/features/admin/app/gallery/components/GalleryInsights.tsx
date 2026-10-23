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
        title: "Total Albums",
        icon: total_breeds,
        count: '6',
        name: "Active breeds in Gaushala"
    },
    {
        title: "Total Media",
        icon: total_breed_cows,
        count: '20',
        name: "Across all breeds"
    },
    {
        title: "Total Views",
        icon: total_breed_bulls,
        count: '1000',
        name: "Across all breeds"
    },
    {
        title: "Last Updated",
        icon: total_breed_bulls,
        count: '18 Jul 2026',
        name: "Across all breeds"
    },
]

const GalleryInsights = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-2 ">
            {
                InsightsData?.map((item, idx) => (
                    <Card
                        key={idx}
                        className="rounded-sm bg-white"
                    >
                         <div
                            className="h-full p-2 flex-1 flex flex-col items-center text-center justify-center gap-0   
                                      font-stretch-normal leading-snug font-gotham "
                        >
                            <p className=" font-bold tracking-[0.17px] text-[clamp(18px,2vw,1rem)] text-[#002602]">
                                {item.title}
                            </p>
                            <p className="font-saira font-semibold  text-green-theme font text-[clamp(16px,2vw,1.5rem)]">
                                {item.count}
                            </p>
                            <div className="flex gap-1 items-center">
                                <p className="font-normal text-sm text-green-theme">{item.name}</p>
                            </div>
                        </div>
                    </Card>
                ))
            }

        </div>
    )
}

export default GalleryInsights
