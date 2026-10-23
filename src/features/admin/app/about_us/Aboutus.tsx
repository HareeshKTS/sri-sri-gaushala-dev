import { useForm } from "react-hook-form";

// import AboutUsBanner from "./components/AboutUsbanner";
import SanctuarySection from "./components/SanctuarySection";
import GurudevSection from "./components/GurudevSection";
import VisionMissionSection from "./components/VisionMissionSection";

import type { AboutUsFormData } from "./Types";
import CustomButton from "@/shared/CustomButton";
import AboutUsBanner from "./components/AboutUsBanner";

const AboutUs = () => {
    const form = useForm<AboutUsFormData>({
        defaultValues: {
            bannerImage: null,
            bannerQuote: "",
            sectionTitle: "",
            mainHeading: "",
            aboutUsDescription: "",
            aboutUsQuote: "",

            sanctuaryMedia: null,
            sanctuaryCtaText: "",
            sanctuaryCtaUrl: "",
            sanctuaryHeading: "",

            gurudevTitle: "",
            gurudevMainHeading: "",
            gurudevDescription: "",

            visionTitle: "",
            visionDescription: "",

            missionTitle: "",
            missionDescription: "",
        },
    });

    const onSubmit = async (data: AboutUsFormData) => {
        console.log("FINAL DATA:", data);

        // API call here
    };

    return (
        <form className="h-full flex flex-col overflow-auto" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="px-4 overflow-auto">
                <AboutUsBanner form={form} />

              <SanctuarySection form={form} />

   <GurudevSection form={form} />

     <VisionMissionSection form={form} />  
            </div>
            <div className="flex justify-end px-6 mt-8">
                <CustomButton
                    type="submit"
                    Text="Submit"
                    TextClassName="text-sm! font-medium! font-saira!"
                    className="bg-green-theme! text-white w-fit! px-5! py-2! h-8!  rounded-sm text-sm! font-72! font-normal flex flex-row-reverse!"
                />


            </div>

        </form>
    );
};

export default AboutUs;