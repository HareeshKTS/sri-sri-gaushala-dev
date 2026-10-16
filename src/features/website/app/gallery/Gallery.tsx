import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import HeroBanner from "./components/HeroBanner";
import { PhotoCard } from "./components/PhotoCard";
import { Lightbox } from "./components/Lightbox";
import CustomDropDown from "@/shared/CustomDropDown";
import { ManyCows } from "@/assets/website_assets";

interface Photo {
  id: string;
  src: string;
  fullSrc?: string;
  alt: string;
  category: string;
  ratio?: number;
}
const ALL_PHOTOS = "All Photos";
const FILTER_OPTIONS = [
  { label: ALL_PHOTOS, value: ALL_PHOTOS },
  { label: "Gurudev", value: "Gurudev" },
  { label: "Visitors", value: "Visitors" },
  { label: "Farm", value: "Farm" },
  { label: "Cows", value: "Cows" },
  { label: "Bulls", value: "Bulls" },
];
const CATEGORIES = FILTER_OPTIONS.slice(1).map((o) => o.value);
const RATIOS = [0.7, 1.4, 1.0, 0.8, 1.5, 0.75, 1.2, 1.0, 0.66, 1.33, 0.9, 1.5, 1.0, 0.8, 1.2, 0.75];
const PHOTOS: Photo[] = RATIOS.map((ratio, i) => ({
  id: `photo-${i + 1}`,
  src: ManyCows,
  alt: `Gaushala photo ${i + 1}`,
  category: CATEGORIES[i % CATEGORIES.length],
  ratio,
}));

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState<{ label: string; value: string }>(FILTER_OPTIONS[0]);
  const filter = selectedFilter.value;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const photos = useMemo(
    () => (filter === ALL_PHOTOS ? PHOTOS : PHOTOS.filter((p) => p.category === filter)),
    [filter]
  );
  const handleOpen = useCallback((index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOpenIndex(index);
  }, []);
  const handleClose = useCallback(() => {
    setOpenIndex(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full overflow-x-clip bg-[#fffcf6]">
        <HeroBanner
          badge={"Gallery"}
          quote={"Every photograph tells a story of compassion, care and the timeless bond between humanity and Gau Mata."}
        />
        <section className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
          <div className="mb-4 w-[200px]">
            <CustomDropDown
              value={selectedFilter}
              onChange={setSelectedFilter}
              options={FILTER_OPTIONS}
              displayed_text_color={""}
              trigger_classname="rounded-lg!"
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="columns-2 gap-3 sm:columns-3 lg:columns-4"
            >
              {photos.map((photo, i) => (
                <PhotoCard key={photo.id} photo={photo} index={i} onOpen={handleOpen} />
              ))}
            </motion.div>
          </AnimatePresence>
          {photos.length === 0 && (
            <p className="py-16 text-center font-gotham text-sm text-neutral-500">No photos in this category yet.</p>
          )}
        </section>
      </main>
      <Lightbox photos={photos} index={openIndex} onChange={setOpenIndex} onClose={handleClose} />
    </MotionConfig>
  );
};
export default Gallery;