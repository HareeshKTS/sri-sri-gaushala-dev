import { Card } from '@/components/ui/card'
import { dummy_one, dummy_three, dummy_two } from "@/assets/admin_assets";

import { SquarePen, Trash, Trash2 } from 'lucide-react';
import { useState } from 'react';
import CustomModal from '@/shared/CustomModal';
import EditTestimonial from './modals/EditTestimonial';

const gallery = [
    {
        // image:""
        image: dummy_one,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
    {
        image: dummy_two,
        name: "Mika Singh",
        profession: "Indian Singer, Rapper, Musician and Actor"
    },
    {
        image: dummy_three,
        name: "Abobaker Mojadidi",
        profession: "Spiritual leader and Socio-political Activist in Afghanistan"
    },
    {
        image: dummy_one,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
    {
        image: dummy_two,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
    {
        image: dummy_three,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
    {
        image: dummy_one,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
    {
        image: dummy_two,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
    {
        image: dummy_three,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
    {
        image: dummy_one,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
    {
        image: dummy_two,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
    {
        image: dummy_three,
        name: "Jacqueline Fernandez",
        profession: "Bollywood Actress"
    },
]

function GridGallery() {

    const [IsEditModal, setIsEditModal] = useState(false);

    const openEdit = (activity: any) => {
        setIsEditModal(true);
        // setSelected(activity);
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-y-8 gap-x-6">
            {gallery.map((item, index) => (
                <div className='relative'>
                <div
                    key={index}
                    className="relative rounded-md overflow-hidden h-full"
                >
                    <div className="shape-wrapper h-full w-full">
                        <Card className="shape border-none! shadow-md flex h-full w-full flex-col gap-2 rounded-md! px-2 py-3">
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-auto w-full object-contain"
                                />
                            </div>
                            <div>
                                <p className="font-saira text-[clamp(14px,1.2vw,1rem)] font-bold text-green-theme">
                                    {item.name}
                                </p>
                            </div>

                            <div className="border-b border-[#D2EBD3]" />

                            <p className="font-saira text-sm font-normal tracking-[0.08px] py-2 pr-7 px-2">
                                {item.profession}
                            </p>
                        </Card>

                    </div>
                    <button
                        type="button"
                        onClick={() => openEdit(item)}
                        className="absolute bottom-1 right-2 cursor-pointer!">
                        <SquarePen strokeWidth={2.25} size={28} color="#0099ff" />
                    </button>
                   
                    {/* Inward curve */}
                    

                </div>
                 <button
                        type="button"
                        // onClick={(event) =>
                        //     handleRemove(event)
                        // }
                        className="absolute top-4 -right-4 -translate-x-1/2 -translate-y-1/2
                                        w-8 h-8 rounded-full  text-white flex items-center justify-center text-sm bg-red-600
                                         hover:bg-red-700 transition-colors cursor-pointer shadow-lg"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            ))}

             {IsEditModal && (
                    <CustomModal
                        open={IsEditModal}
                        onOpenChange={setIsEditModal}
                    >
                        <EditTestimonial
                          setOpen={setIsEditModal}
                        />
                    </CustomModal>
                )}
        </div>
    )
}

export default GridGallery