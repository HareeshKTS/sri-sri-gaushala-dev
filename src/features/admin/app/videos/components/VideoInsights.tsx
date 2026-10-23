import { Card } from "@/components/ui/card"


type InsightsTypes = {
    title: string;
    count: string | number;
    name: string;
}


const VideoInsightsData: InsightsTypes[] = [
    {
        title: "Total Videos",
        count: '22',
        name: "All Videos"
    },
    {
        title: "Uploaded Videos",
        count: '10',
        name: "All Uploaded Videos"
    },
    {
        title: "YouTube Videos",
        count: '12',
        name: "All YouTube Videos"
    },
    {
        title: "Total Views",
        count: '91,810',
        name: "All Time Views"
    },
    {
        title: "Last Updated",
        count: '20 Jul 2026',
        name: "Recently Updated"
    },
]

const VideoInsights = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-2 ">
            {
                VideoInsightsData?.map((item, idx) => (
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

export default VideoInsights
