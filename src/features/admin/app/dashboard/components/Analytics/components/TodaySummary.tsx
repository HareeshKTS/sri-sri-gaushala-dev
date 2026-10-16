import { Card } from '@/components/ui/card'
import type { TodaysSummaryTypes } from '../../../Types'
import CustomButton from '@/shared/CustomButton'

const SummaryData: TodaysSummaryTypes[] = [
    { summary: "New Contact Enquiries", count: "42" },
    { summary: "New Donations", count: "5" },
    { summary: "Blog Published", count: "8" },
    { summary: "Gallery Updated", count: "10" },
    { summary: "Events / Programs Added", count: "10" },
    { summary: "New Donations", count: "5" },
    { summary: "Blog Published", count: "8" },
    { summary: "Gallery Updated", count: "10" },
]

const TodaySummary = () => {
    return (
        <Card className='rounded-sm  lg:w-[20%] w-full flex flex-col overflow-auto  gap-2 py-4 h-64'>
            <div className='px-4 '>
                <p className='font-saira tracking-[0.1px]
                 font-stretch-normal font-bold text-[#002602] text-[clamp(16px,1.5vw,1rem)]'>
                    Today's Summary
                </p>
            </div>
            <div className='flex flex-col gap-2 flex-1 overflow-auto py-1 font-saira  px-4 mx-2'>
                {
                    SummaryData?.map((item, idx) => (
                        <div
                            key={idx}
                            className='flex tracking-[0.08px] justify-between items-center font-medium gap-1 
                            text-[clamp(13px,0.8vw,0.5rem)] text-wrap'>
                            <p className='text-[#002602] '>{item.summary}</p>
                            <p className='text-[#4caf50]'>{item.count}</p>
                        </div>
                    ))
                }

            </div>
            <div className='px-2'>
                <CustomButton
                    type="button"
                    Text="View All"
                    TextClassName="text-sm! font-normal!"
                    className='w-full py-1.5! px-2! rounded-sm bg-white! text-[#4caf50]! 
                    border flex flex-row-reverse! border-[#4caf50] hover:bg-blue-theme/15!'
                />
            </div>
        </Card>
    )
}

export default TodaySummary
