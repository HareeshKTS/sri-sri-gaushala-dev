import { MotionConfig } from "motion/react";
import HeroBanner from "./components/HeroBanner";
import { BreedsShowcase } from "./components/BreedsShowcase";
import { BreedsBannerImage } from "@/assets/website_assets";


const KnowBreeds = () => {
  return (
    // reducedMotion="user": no motion for people who turned animations off in their OS
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full overflow-x-clip bg-[#fffcf6]">
        <HeroBanner
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
