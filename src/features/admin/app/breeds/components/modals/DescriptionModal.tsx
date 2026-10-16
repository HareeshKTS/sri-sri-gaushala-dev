import { Card } from "@/components/ui/card";
import CustomButton from "@/shared/CustomButton";
import type { Dispatch, SetStateAction } from "react";

type DescriptionProps = {
    setOpen: Dispatch<SetStateAction<number | null>>;
};

const DescriptionModal = ({ setOpen }: DescriptionProps) => {
    return (
        <div className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[42vw] font-72 min-h-[35vh] h-[40h] flex overflow-auto ">
            <div className="flex flex-col   justify-between py-2">
                <div className="px-4">
                    <p className="text-green-theme font-gotham tracking-[0.09px] text-base font-semibold">Description</p>
                </div>
                <Card className="overflow-auto px-4 py-2  shadow rounded-lg my-2 flex flex-col justify-center flex-1">
                    <p>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    </p>
                </Card>
                <div className="flex gap-2 justify-end py-2">
                    <CustomButton
                        onClick={() => setOpen(null)}
                        type="button"
                        Text="Cancel"
                        TextClassName="text-sm! font-medium!"
                        className='w-fit! py-0.5! px-4! bg-white! border! border-[#ff0000]! text-[#ff0000]! rounded-sm bg-blue-theme!'
                    />

                </div>
            </div>
        </div>
    )
}

export default DescriptionModal
