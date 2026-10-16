import { Card } from "@/components/ui/card"
import type { insightsTypes } from "../../Types"
import {
    total_bulls,
    total_cows,
    total_pages,
    visitors,
    website_visitors
} from "@/assets/admin_assets"
import { ArrowUp } from "lucide-react"

const InsightsData: insightsTypes[] = [
    {
        title: "Total Cows",
        icon: total_cows,
        count: '10',
        name: "2 Added this month"
    },
    {
        title: "Total Bulls",
        icon: total_bulls,
        count: '10',
        name: "2 Added this month"
    },
    {
        title: "Website Visitors",
        icon: website_visitors,
        count: '15,482',
        name: "This Month"
    },
    {
        title: "Total Pages",
        icon: total_pages,
        count: '10',
        name: "Total Pages"
    },
    {
        title: "Visitors",
        icon: visitors,
        count: '28',
        name: "This Month"
    },
]

const Insights = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-2">
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
                                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                            w-full h-full p-2 flex flex-col items-center  justify-center gap-0 lg:justify-evenly leading-snug  
                                            font-stretch-normal"
                            >
                                <p className="font-gotham font-bold tracking-[0.17px] text-[clamp(18px,2vw,1.5rem)] text-[#002602]">
                                    {item.title}
                                </p>
                                <p className="font-medium text-green-theme  text-[clamp(18px,2.5vw,2.2rem)]">
                                    {item.count}
                                </p>
                                <div className="flex gap-1 items-center">
                                    {
                                        (item.title === "Total Cows" || item.title === "Total Bulls") && (
                                            <ArrowUp color="#2e7d32" size={15} />
                                        )
                                    }
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

export default Insights
