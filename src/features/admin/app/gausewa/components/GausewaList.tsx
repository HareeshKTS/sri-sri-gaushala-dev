import { elderly_cows, indigenous_breeds, support_farmers } from "@/assets/admin_assets"
import type { BannerList } from "../Types"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { CirclePlus, SquarePen } from "lucide-react";
import CustomButton from "@/shared/CustomButton";
import { useState } from "react";
import AddEditGausewa from "./modals/AddEditGausewa";
import CustomModal from "@/shared/CustomModal";

const GausewaDataList: BannerList[] = [
    {
        id: 1,
        icon: indigenous_breeds,
        subject: "Preserve Indigenous Breeds",
        description: `We provide a safe, natural home for Indian cows like Gir, Kankrej, Sahiwal, Ongole, and more.
         Our cows are never forced for milk or labor—they live freely and are cared for with love`
    },
    {
        id: 2,
        icon: support_farmers,
        subject: "Support Farmers",
        description: `We gift purebred cows and Nandi bulls to rural and tribal farmers, helping them revive traditional 
        farming and become self-reliant. Training in natural, cow-based agriculture is also provided`
    },
    {
        id: 3,
        icon: elderly_cows,
        subject: "Care for Elderly Cows",
        description: `Elderly and injured cows receive special attention, with dedicated spaces for rest,
         nutrition, and gentle care.`
    },
    {
        id: 4,
        icon: indigenous_breeds,
        subject: "Preserve Indigenous Breeds",
        description: `We provide a safe, natural home for Indian cows like Gir, Kankrej, Sahiwal, Ongole, and more.
         Our cows are never forced for milk or labor—they live freely and are cared for with love`
    },
    {
        id: 5,
        icon: support_farmers,
        subject: "Support Farmers",
        description: `We gift purebred cows and Nandi bulls to rural and tribal farmers, helping them revive traditional 
        farming and become self-reliant. Training in natural, cow-based agriculture is also provided`
    },
];

const GausewaList = () => {
    const [IsAddModal, setIsAddModal] = useState(false);
    const [IsEditModal, setIsEditModal] = useState(false);
    const [selected, setSelected] = useState<any>(null);

    const openEdit = (activity: any) => {
        setIsEditModal(true);
        setSelected(activity);
    };
    return (
        <div>
            <div className="flex justify-end">
                <CustomButton
                    type="button"
                    Text="Add Key Activity"
                    TextClassName="text-sm! font-medium! text-[#4caf50]!"
                    Icon={<CirclePlus strokeWidth={2.25} size={16} color="#4caf50" />}
                    className='w-fit! py-1! px-2! bg-white! border border-dashed!  border-[#4caf50]! 
                    rounded-sm flex flex-row-reverse! gap-2!'
                    onClick={()=>setIsAddModal(true)}
                />
            </div>
            <div className="relative w-full px-3 py-2">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="ml-0!">
                        {GausewaDataList?.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="relative min-w-0 px-2! basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="shape-wrapper h-full w-full">
                                    <Card className="shape  flex h-full w-full flex-col gap-2 rounded-md px-2 py-3">
                                        <div>
                                            <img
                                                src={item.icon}
                                                alt={item.subject}
                                                className="h-auto w-auto object-contain"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-saira text-[clamp(14px,1.2vw,1rem)] font-bold text-green-theme">
                                                {item.subject}
                                            </p>
                                        </div>

                                        <div className="border-b border-[#D2EBD3]" />

                                        <p className="font-saira text-sm font-normal tracking-[0.08px] py-2 px-2">
                                            {item.description}
                                        </p>
                                    </Card>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => openEdit(item)}
                                    className="absolute bottom-2 right-3 cursor-pointer!">
                                    <SquarePen strokeWidth={2.25} size={28} color="#0099ff" />
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="-left-2" />
                    <CarouselNext className="-right-2" />
                </Carousel>
            </div>

            {
                IsAddModal && (
                    <CustomModal
                        open={IsAddModal}
                        onOpenChange={setIsAddModal}
                    >
                        <AddEditGausewa
                            open={IsAddModal}
                            onOpenChange={setIsAddModal}
                            IsEditModal={false}
                        />
                    </CustomModal>
                )}
            {
                IsEditModal && (
                    <CustomModal
                        open={IsEditModal}
                        onOpenChange={setIsEditModal}
                    >
                        <AddEditGausewa
                            open={IsEditModal}
                            onOpenChange={setIsEditModal}
                            selected={selected}
                            IsEditModal={true}
                        />
                    </CustomModal>
                )}
        </div>
    )
}

export default GausewaList
