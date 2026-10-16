import { Card } from "@/components/ui/card";
import CustomButton from "@/shared/CustomButton";

type BreedTypes = {
    no: string;
    name: string;
    breed: string;
    count: string;
}

const BreedData: BreedTypes[] = [
    {
        no: "1", name: "Sahiwal",
        breed: "Rathi", count: "10",
    },
    {
        no: "2", name: "Rathi",
        breed: "Cow", count: "10",
    },
    {
        no: "3", name: "Tharparkar",
        breed: "Cow", count: "10",
    },
    {
        no: "4", name: "Gir",
        breed: "Cow", count: "10",
    },
    {
        no: "5", name: "Kankrej",
        breed: "Cow", count: "10",
    },
    {
        no: "6", name: "Khillari",
        breed: "Cow", count: "10",
    },
    {
        no: "7", name: "Lal Kandhari",
        breed: "Cow", count: "10",
    },
    {
        no: "8", name: "Dangi",
        breed: "Cow", count: "10",
    },
   

]

const BreedDetails = () => {
    return (
        <Card className='rounded-sm w-full lg:w-[20%]! flex flex-col overflow-auto gap-2  py-4'>
            <div className='px-4 text-[#002602] flex items-center flex-wrap justify-between'>
                <p className='font-saira tracking-[0.1px]
                 font-stretch-normal font-bold  text-[clamp(16px,1.5vw,1rem)]'>
                    Breed Count
                </p>
                <p className="font-medium text-[clamp(13px,0.8vw,0.5rem)] tracking-[0.08px]">Total Count: 200</p>
            </div>
            <div className="px-4  overflow-x-auto overflow-y-auto flex-1 ">
                <table className=" w-full">
                    <thead className="sticky top-0 bg-white">
                        <tr className="text-[#002602] border-b-[0.2px]! border-b-[#4caf50] text-center font-saira font-medium 
                        text-[clamp(13px,0.8vw,0.5rem)] tracking-[0.08px]">
                            <td className="px-2">No.</td>
                            <td className="px-2 text-left">Name</td>
                            <td className="px-2">Breed</td>
                            <td className="px-2">Count</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            BreedData.map((item, idx) => {
                                return (
                                    <tr
                                        key={idx}
                                        className="font-medium text-center  font-saira  text-[#002602] text-[clamp(13px,0.8vw,0.5rem)] tracking-[0.08px]">
                                        <td className="px-2">{item.no}</td>
                                        <td className="px-2 text-left">{item.name}</td>
                                        <td className="px-2">{item.breed}</td>
                                        <td className="px-2">{item.count}</td>
                                    </tr>
                                )
                            }

                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='px-2'>
                <CustomButton
                    type="button"
                    Text="View All Breeds"
                    TextClassName="text-sm! font-normal!"
                    className='w-full py-1.5! px-2! rounded-sm bg-white! text-[#4caf50]! 
                    border flex flex-row-reverse! border-[#4caf50] hover:bg-blue-theme/15!'
                />
            </div>
        </Card>
    )
}

export default BreedDetails
