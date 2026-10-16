import { MotionConfig } from "motion/react";
import HeroBanner from "./components/HeroBanner";
import WhoWeAre from "./components/WhoWeAre";
import Sanctuary from "./components/Sanctuary";
import Inspiration from "./components/Inspiration";
import VisionMission from "./components/VisionMission";
function About_us() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full overflow-x-clip ">
        <HeroBanner
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