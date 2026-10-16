import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useLenis } from "lenis/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { EASE } from "@/shared/animations/WebsiteAnimations";

interface LightboxPhoto {
  id: string;
  src: string;
  fullSrc?: string;
  alt: string;
}

interface Props {
  photos: LightboxPhoto[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}
const slide: Variants = {
  enter: (d: number) => ({ x: d * 80, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE } },
  exit: (d: number) => ({ x: -d * 80, opacity: 0, scale: 0.97, transition: { duration: 0.25, ease: EASE } }),
};

const SWIPE_DISTANCE = 80;
const SWIPE_VELOCITY = 500;

const arrowCls = "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white outline-none transition-colors hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white sm:size-12";

export function Lightbox({ photos, index, onChange, onClose }: Props) {
  const open = index !== null;
  const [direction, setDirection] = useState(0);
  const lenis = useLenis();
  const closeRef = useRef<HTMLButtonElement>(null);
  const go = useCallback(
    (step: 1 | -1) => {
      if (index === null || photos.length < 2) return;
      setDirection(step);
      onChange((index + step + photos.length) % photos.length); // loops around
    },
    [index, photos.length, onChange]
  );

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      lenis?.start();
    };
  }, [open, lenis]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go, onClose]);
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);
  useEffect(() => {
    if (index === null) return;
    [1, -1].forEach((s) => {
      const p = photos[(index + s + photos.length) % photos.length];
      if (p) new Image().src = p.fullSrc ?? p.src;
    });
  }, [index, photos]);

  const photo = index !== null ? photos[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && photo && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/90"
        >
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-3 sm:p-5">
            <span className="rounded-full bg-white/15 px-3 py-1 font-gotham text-xs text-white sm:text-sm" aria-live="polite">
              {(index ?? 0) + 1} / {photos.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close preview"
              onClick={onClose}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white outline-none transition-colors hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="size-5" />
            </button>
          </div>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                className={`${arrowCls} left-2 sm:left-5`}
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                className={`${arrowCls} right-2 sm:right-5`}
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          )}
          <div className="absolute inset-0 flex items-center justify-center px-14 py-16 sm:px-24">
            <AnimatePresence initial custom={direction} mode="popLayout">
              <motion.img
                key={photo.id}
                src={photo.fullSrc ?? photo.src}
                alt={photo.alt}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                drag={photos.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -SWIPE_DISTANCE || info.velocity.x < -SWIPE_VELOCITY) go(1);
                  else if (info.offset.x > SWIPE_DISTANCE || info.velocity.x > SWIPE_VELOCITY) go(-1);
                }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
                className="max-h-full max-w-full select-none rounded-lg object-contain shadow-2xl"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}