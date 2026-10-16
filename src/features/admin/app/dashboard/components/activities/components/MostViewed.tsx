import { Card } from "@/components/ui/card"
import type { MostViewedTypes } from "../../../Types"


const ViewedData: MostViewedTypes[] = [
    { page_name: "Home Page", count: "23 Times" },
    { page_name: "Visitors", count: "15 Times" },
    { page_name: "Donations", count: "10 Times" },
    { page_name: "Gausewa", count: "5 Times" },
    { page_name: "About Us", count: "3 Times" },
    { page_name: "Blog & Articles", count: "3 Times" },
    { page_name: "Know the Breeds", count: "3 Times" },
    { page_name: "Other Gaushalas", count: "3 Times" },
    { page_name: "Gallery", count: "3 Times" },
]

const MostViewed = () => {
    return (
        <Card className='rounded-sm  flex-1 flex flex-col overflow-auto  gap-2 py-4 '>
            <div className='px-4 '>
                <p className='font-saira tracking-[0.1px]
                 font-stretch-normal font-bold text-[#002602] text-[clamp(16px,1.5vw,1rem)]'>
                    Most Viewed Pages
                </p>
            </div>
            <div className='flex flex-col gap-2 flex-1 overflow-auto py-1  font-saira  px-4 '>
                {
                    ViewedData?.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className='flex tracking-[0.08px] justify-between items-center font-medium gap-1 
                            text-[clamp(13px,0.8vw,0.5rem)] text-wrap'>
                                <p className='text-[#002602] '>{item.page_name}</p>
                                <p className='text-[#cbcbcb]'>{item.count}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
        </Card>
    )
}

export default MostViewed
