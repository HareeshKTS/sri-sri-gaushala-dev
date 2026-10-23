import { MotionConfig } from "motion/react";
import { KeyActivities } from "./components/KeyActivities";
import { VolunteerCta } from "./components/VolunteerCta";
import { FaqSection } from "./components/FaqSection";
import HeroBannerSection from "@/shared/website_shared_cmpnts/HeroBannerSection";
import { BannerImageGausewa } from "@/assets/website_assets";
const Gausewa = () => {
    return (
        <MotionConfig reducedMotion="user">
            <main className={`min-h-screen w-full overflow-x-clip bg-[#fffcf6]`}>
                <HeroBannerSection image={BannerImageGausewa}  badge={'GAUSEWA'} quote={'Where tradition meets sustainable farming. Every cow is cared for with love and respect.'} />
                <KeyActivities />
                <VolunteerCta />
                <FaqSection />
            </main>
        </MotionConfig>
    );
};
export default Gausewa;
