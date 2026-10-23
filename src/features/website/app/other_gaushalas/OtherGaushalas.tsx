import { MotionConfig } from "motion/react";
import { GaushalaCard } from "./components/GaushalaCard";
import { GaushalaPlantVideo, ManyCows } from "@/assets/website_assets";
import HeroBannerSection from "@/shared/website_shared_cmpnts/HeroBannerSection";

interface Gaushala {
  id: string;
  name: string;
  image: string;
  /** Google Maps link for "Locate us". Optional — a maps search for the name is used if omitted. */
  mapUrl?: string;
}
const OtherGaushalas = () => {

  const GAUSHALAS: Gaushala[] = [
    { id: "omkareshwar", name: "Omkareshwar, Madhya Pradesh", image: ManyCows },
    { id: "vasad", name: "Vasad, Gujarat", image: ManyCows },
    { id: "ssu-orissa", name: "SSU Orissa, Bhubaneshwar", image: ManyCows },
    { id: "triveni-ashram", name: "Triveni Ashram, Pune", image: ManyCows },
  ];
  // const getMapUrl = (g: Gaushala) => g.mapUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Sri Sri Gaushala ${g.name}`)}`;



  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full overflow-x-clip bg-[#fffcf6]">
        <HeroBannerSection
          image={GaushalaPlantVideo}
          IsVideo={true}
          badge={"OTHER GAUSHALAS"}
          quote={"A sanctuary where every cow is cherished. A future built on care, kindness, and sustainability."}
        />
        <div className="flex items-center justify-center w-full">
          <section className="md:w-[80%] px-4 py-10 sm:py-14">
            <div className="grid grid-cols-1 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {GAUSHALAS.map((g, i) => (
                <GaushalaCard key={g.id} gaushala={g} index={i} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </MotionConfig>
  );
};

export default OtherGaushalas;
