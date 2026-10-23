import React, { useState } from 'react'
import TestimonialHeader from './components/TestimonialHeader'
import GridGallery from './components/GridGallery'
import CustomModal from '@/shared/CustomModal';
import AddTestimonial from './components/modals/AddTestimonial';

function Testimonial() {
   const [showAddTestimonial, setShowAddTestimonial] = useState<boolean>(false);
  return (
    <div className='h-full overflow-auto px-4 flex flex-col  gap-4'>
        <TestimonialHeader  setOpen={setShowAddTestimonial}/>
        <GridGallery/>
  {
                showAddTestimonial && (
                    <CustomModal
                        open={showAddTestimonial}
                        onOpenChange={setShowAddTestimonial}
                    >
                        <AddTestimonial
                            setOpen={setShowAddTestimonial}
                        />
                    </CustomModal>
                )
            }
    </div>
  )
}

export default Testimonial