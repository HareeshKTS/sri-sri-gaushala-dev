import { Card } from "@/components/ui/card";
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import type { AddEditFeqValues } from "../../Types";
import CustomButton from "@/shared/CustomButton";
import { FormInputField, FormTextArea } from "@/shared/custom_form_components/FormFields";
import { X } from "lucide-react";

type AddEditFeqProps = {
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const AddEditFeq = ({ setOpen }: AddEditFeqProps) => {

    const { control, trigger, handleSubmit } = useForm<AddEditFeqValues>({
        defaultValues: {
            question: "",
            answer: "",
        },
        mode: "onChange"
    });


    const handleFeqData = async (data: AddEditFeqValues) => {
        const isValid = await trigger();
        if (!isValid) return;
        const payload = {
            question: data.question,
            answer: data.answer,
        }
        console.log(payload, 'payload');
    }


    return (
        <div className="min-w-[80vw]  lg:min-w-[35vw] lg:max-w-[40vw]  min-h-[45vh] h-[60vh] flex overflow-auto">
            <div className="w-full flex flex-col bg-white  px-2">
                <div className="flex items-center justify-between ">
                    <div>
                        <p className="text-green-theme font-gotham tracking-[0.09px] text-base font-semibold">Add FAQ</p>
                    </div>
                    <div>
                        <button onClick={() => setOpen(false)} className='bg-transparent outline-0 cursor-pointer'>
                            <X color="#0f172a" strokeWidth={2.25} size={30} />
                        </button>
                    </div>
                </div>
                <Card className="overflow-auto px-2 shadow rounded-lg my-2 flex flex-col flex-1">
                    <form onSubmit={handleSubmit(handleFeqData)} className="flex flex-col overflow-auto flex-1  py-1">
                        <div className="flex-1 flex flex-col overflow-auto gap-4 px-2 py-2">
                            <FormInputField
                                label="Question"
                                name="question"
                                placeholder="Question"
                                control={control}
                                rules={{ required: "required" }}
                            />
                            <FormTextArea
                                name="answer"
                                control={control}
                                label="Answer"
                                placeholder="Enter Answer"
                                rules={{ required: "required" }}
                                className="min-h-36"
                            />
                        </div>
                        <div className="flex gap-2 justify-end py-2">
                            <CustomButton
                                onClick={() => setOpen(false)}
                                type="button"
                                Text="Cancel"
                                TextClassName="text-sm! font-medium!"
                                className='w-fit! py-0.5! px-4! bg-white! border! border-[#ff0000]! text-[#ff0000]! rounded-sm bg-blue-theme!'
                            />
                            <CustomButton
                                type="submit"
                                Text="Submit"
                                TextClassName="text-sm! font-medium!"
                                className='w-fit! py-0.5! px-4! bg-green-theme! rounded-sm bg-blue-theme!'
                            />
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default AddEditFeq
