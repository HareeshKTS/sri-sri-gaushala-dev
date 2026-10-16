import { cow_feeding, cows, farm, gaushala, gurudev, visitors_icon } from "@/assets/admin_assets"
import type { GalleryListTypes } from "../Types"
import { Trash } from "lucide-react"
import { Card } from "@/components/ui/card"


const GalleryData: GalleryListTypes[] = [
    { name: "Gurudev", icon: gurudev, photo_count: "2 Photos" },
    { name: "Visitors", icon: visitors_icon, photo_count: "12 Photos" },
    { name: "Cow Feeding", icon: cow_feeding, photo_count: "2 Photos" },
    { name: "Cow's", icon: cows, photo_count: "10 Photos" },
    { name: "Gaushala", icon: gaushala, photo_count: "20 Photos" },
    { name: "Farm", icon: farm, photo_count: "12 Photos" },
]

const GalleryList = () => {
    return (
        <div className="flex flex-col gap-2">
            <p className="font-saira font-medium tracking-[0.09px] text-base">Albums</p>
            <div className="flex flex-col lg:flex-row gap-3">
                {
                    GalleryData?.map((item, index) => (
                        <div key={index} className="relative backdrop-blur-lg bg-[#00000012] p-1 rounded-md shadow-md ">
                            <div>
                                <img src={item.icon} alt={item.name}  className="object-contain w-full h-auto"/>
                            </div>
                            <Card className="flex justify-between rounded-md bg-[#ffffff] absolute p-2 left-0 right-0 m-1 bottom-0">
                                <div className="font-saira">
                                    <p className="text-[#034006] font-semibold text-[clamp(16px,1vw,0.8rem)]">{item.name}</p>
                                    <p className="text-[#aaaaaa] text-sm">{item.photo_count}</p>
                                </div>
                                <button type="button" className="cursor-pointer">
                                    <Trash className="text-[#cbcbcb] hover:text-[#ff0000]" size={20} />
                                </button>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default GalleryList
