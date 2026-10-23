import { MotionConfig } from "motion/react";
import { BreedsShowcase } from "./components/BreedsShowcase";
import { BreedsBannerImage } from "@/assets/website_assets";
import HeroBannerSection from "@/shared/website_shared_cmpnts/HeroBannerSection";


const KnowBreeds = () => {
  return (
    // reducedMotion="user": no motion for people who turned animations off in their OS
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full overflow-x-clip bg-[#fffcf6]">
        <HeroBannerSection
          image={BreedsBannerImage}
          badge={"KNOW THE BREEDS"}
          quote={"A sanctuary where every cow is cherished. A future built on care, kindness, and sustainability."}
        />
        <BreedsShowcase />
      </main>
    </MotionConfig>
  );
};

export default KnowBreeds;
