import { motion } from "motion/react";
import { ZoomIn } from "lucide-react";
import { fadeBottom } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";

interface PhotoCardData {
  src: string;
  alt: string;
  ratio?: number;
}

interface Props {
  photo: PhotoCardData;
  index: number;
  onOpen: (index: number, trigger: HTMLElement) => void;
}
export function PhotoCard({ photo, index, onOpen }: Props) {
  return (
    <div className=" break-inside-avoid mb-3">
      <motion.button
        type="button"
        variants={fadeBottom}
        custom={(index % 4) * 0.06}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        whileTap={{ scale: 0.98 }}
        onClick={(e) => onOpen(index, e.currentTarget)}
        aria-label={`Open photo: ${photo.alt}`}
        style={photo.ratio ? { aspectRatio: String(photo.ratio) } : undefined}
        className="group relative block w-full cursor-zoom-in overflow-hidden  bg-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-[#67aa41] focus-visible:ring-offset-2"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${photo.ratio ? "h-full" : "h-auto"
            }`}
        />
        <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
        <span className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-white/85 text-neutral-800 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ZoomIn className="size-4" />
        </span>
      </motion.button>
    </div>
  );
}