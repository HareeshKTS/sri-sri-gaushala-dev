import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import CustomButton from "@/shared/CustomButton";
import BannerForm from "./components/forms/BannerForm";
import type { MainFormValues } from "./Types";
import Sections from "./components/common/Sections";

const MainPage = () => {
    const { control, trigger, handleSubmit, setValue } = useForm<MainFormValues>({
        defaultValues: {
            banner_type: 'single',
            quote_one: '',
            quote_two: '',
            pure_indian_breeds: "",
            dedicated_gausewaks: "",
            hectares_of_grazing_land: "",
            indigenous_cows: "",
            years_of_service: "",
            banner_images: [],
            visit_us_quote: '',
            volunteer_heading: '',
            volunteer_description: '',
            volunteer_button_name: '',
            volunteer_button_link: '',
            donate_now_heading: '',
            donate_now_sub_heading: '',
            donate_now_description_one: '',
            donate_now_description_two: '',
            donate_now_button_name: '',
            donate_now_button_link: ''
        },
        mode: "onChange"
    })
    const handleHomeData = async (data: MainFormValues) => {
        const isValid = await trigger();
        if (!isValid) return;
        const payload = {
            banner_type: data.banner_type,
            quote_one: data.quote_one,
            quote_two: data.quote_two,
            pure_indian_breeds: data.pure_indian_breeds,
            dedicated_gausewaks: data.dedicated_gausewaks,
            hectares_of_grazing_land: data.hectares_of_grazing_land,
            indigenous_cows: data.indigenous_cows,
            years_of_service: data.years_of_service,
            banner_images: data.banner_images,
            visit_us_quote: data.visit_us_quote,
            volunteer_heading: data.volunteer_heading,
            volunteer_description: data.volunteer_description,
            volunteer_button_name: data.volunteer_button_name,
            volunteer_button_link: data.volunteer_button_link,
            donate_now_heading: data.donate_now_heading,
            donate_now_sub_heading: data.donate_now_sub_heading,
            donate_now_description_one: data.donate_now_description_one,
            donate_now_description_two: data.donate_now_description_two,
            donate_now_button_name: data.donate_now_button_name,
            donate_now_button_link: data.donate_now_button_link
        }
        console.log(payload, 'payload');
    }

    // const handleHomeData = async (data: MainFormValues) => {
    //     const isValid = await trigger();

    //     if (!isValid) return;

    //     const formData = new FormData();

    //     // Normal fields
    //     formData.append("banner_type", data.banner_type);
    //     formData.append("quote_one", data.quote_one);
    //     formData.append("quote_two", data.quote_two);
    //     formData.append(
    //         "pure_indian_breeds",
    //         data.pure_indian_breeds
    //     );
    //     formData.append(
    //         "dedicated_gausewaks",
    //         data.dedicated_gausewaks
    //     );
    //     formData.append(
    //         "hectares_of_grazing_land",
    //         data.hectares_of_grazing_land
    //     );
    //     formData.append(
    //         "indigenous_cows",
    //         data.indigenous_cows
    //     );
    //     formData.append(
    //         "years_of_service",
    //         data.years_of_service
    //     );

    //     // Images
    //     data.banner_images.forEach((file) => {
    //         formData.append("banner_images", file);
    //     });

    //     // Check FormData
    //     for (const [key, value] of formData.entries()) {
    //         console.log(key, value, "fhgjdfjdjd");
    //     }

    //     // API call
    //     try {
    //         const response = await fetch("/api/banner", {
    //             method: "POST",
    //             body: formData,
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to save banner");
    //         }

    //         const result = await response.json();

    //         console.log(result, "API response");
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    return (
        <div className="flex-1 flex flex-col overflow-auto py-1">
            <form className=" flex-1 flex flex-col overflow-auto" onSubmit={handleSubmit(handleHomeData)}>
                <div className=" flex-1 flex flex-col overflow-auto px-2 py-1 gap-4">
                    <Card className="rounded-sm  py-2 px-4 border border-[#4caf50] shadow-[0px_2px_4px_0px_rgba(99,99,99,0.2)]!">
                        <BannerForm
                            control={control}
                            setValue={setValue}
                        />
                    </Card>
                    <Sections
                        control={control}
                    />
                </div>
                <div className="flex justify-end px-2 py-1">
                    <CustomButton
                        type="submit"
                        Text="Save Changes"
                        TextClassName="text-sm! font-normal!"
                        className="bg-blue-theme text-white w-fit! px-4! py-1! bg-[#4caf50]! rounded-sm text-sm! font-72! font-normal flex flex-row-reverse!"
                    />
                </div>
            </form>
        </div>
    )
}

export default MainPage
