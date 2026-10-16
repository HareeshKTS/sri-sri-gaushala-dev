import { recent_activity } from "@/assets/admin_assets"
import { Card } from "@/components/ui/card"
import type { RecentTypes } from "../../../Types"
import { CircleCheck } from "lucide-react"


const RecentData: RecentTypes[] = [
    { name: "Blog Benefits of Indigenous Cow Breeds published.", time: "23 Times" },
    { name: "Gallery updated with 20 new photos.", time: "15 Times" },
    { name: `New program "Go Seva" added for visitors.`, time: "10 Times" },
    { name: "Hero banner updated.", time: "5 Times" },
    { name: "New volunteer registration received.", time: "3 Times" },
]

const RecentActivities = () => {
    return (
        <Card className='rounded-sm  flex-1 flex flex-col overflow-auto  gap-2 py-4 '>
            <div className='px-4 '>
                <p className='font-saira tracking-[0.1px]
                 font-stretch-normal font-bold text-[#002602] text-[clamp(16px,1.5vw,1rem)]'>
                    Recent Activities
                </p>
            </div>
            <div className='flex flex-col gap-2 flex-1 overflow-auto py-1 font-saira  px-1 mx-2'>
                {
                    RecentData.length && RecentData?.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className='flex flex-col lg:flex-row tracking-[0.08px] justify-between lg:items-center font-medium gap-2 px-2
                            text-[clamp(13px,0.8vw,0.5rem)] text-nowrap'>
                                <div className="flex items-start justify-start  gap-2">
                                    <div>
                                        <CircleCheck fill="#4caf50" color="#fff" size={15}/>
                                    </div>
                                     <p className='text-[#002602]'>{item.name}</p>
                                </div>
                                <p className='text-[#cbcbcb] self-end lg:self-auto'>{item.time}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <div className="border-b border-b-[#cbcbcb] mx-4"/>
            <div className="font-saira  flex flex-col justify-center items-center py-2">
                <div>
                    <img
                        src={recent_activity}
                        alt="recent_activity"
                        className="h-auto w-auto object-contain"
                    />
                </div>
                <p className="font-medium text-[clamp(14px,1.1vw,1rem)] font-stretch-normal tracking-[0.08px] text-[#4caf50]">
                    No more activities
                </p>
                <p className="text-[12px] text-[#aaaaaa] tracking-[0.07px] font-normal">
                    You're all caught up! New activities will appear here.
                </p>
            </div>
        </Card>
    )
}

export default RecentActivities
