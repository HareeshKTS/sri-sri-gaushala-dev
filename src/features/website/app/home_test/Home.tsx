import { MotionConfig } from "motion/react";
import { HomeHero } from "./components/HomeHero";
import { WhoWeAre } from "./components/WhoWeAre";
import { VisitBanner } from "./components/VisitBanner";
import { GausewaPreview } from "./components/GausewaPreview";
import { VideosSection } from "./components/VideosSection";
import { VolunteerCta } from "./components/VolunteerCta";
import { FaqSection } from "./components/FaqSection";
import { DonateSection } from "./components/DonateSection";
import { BreedsMarquee } from "./components/BreedsMarquee";
import { Testimonials } from "./components/Testimonials";
const Home = () => {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full overflow-x-clip bg-[#fffcf6]">
        <HomeHero />
        <WhoWeAre />
        <VisitBanner />
        <GausewaPreview />
        <VideosSection />
        <VolunteerCta />
        <FaqSection />
        <DonateSection />
        <BreedsMarquee />
        <Testimonials />
      </main>
    </MotionConfig>
  );
};
export default Home;
