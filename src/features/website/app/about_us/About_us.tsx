import { MotionConfig } from "motion/react";
import WhoWeAre from "./components/WhoWeAre";
import Sanctuary from "./components/Sanctuary";
import Inspiration from "./components/Inspiration";
import VisionMission from "./components/VisionMission";
import HeroBannerSection from "@/shared/website_shared_cmpnts/HeroBannerSection";
import { AboutUsBannerImage } from "@/assets/website_assets";
function About_us() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full overflow-x-clip ">
        <HeroBannerSection
          image={AboutUsBannerImage}
          badge={"About Us"}
          quote={"Protecting indigenous cows with dedication and devotion. Preserving nature for generations to come."}
        />
        <WhoWeAre />
        <Sanctuary />
        <Inspiration />
        <VisionMission />
      </main>
    </MotionConfig>
  );
}
export default About_us;