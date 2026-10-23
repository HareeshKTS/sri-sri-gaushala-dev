import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { fadeBottom } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";
interface Gaushala {
  id: string;
  name: string;
  image: string;
  mapUrl?: string;
}
interface Props {
  gaushala: Gaushala;
  index?: number;
}
const getMapUrl = (g: Gaushala) => g.mapUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Sri Sri Gaushala ${g.name}`)}`;
export function GaushalaCard({ gaushala, index = 0 }: Props) {
  return (
    <motion.article
      variants={fadeBottom}
      custom={(index % 4) * 0.1}
      initial="show"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      // whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group flex h-full flex-col gap-4 overflow-hidden rounded-xl bg-white shadow-md border p-2 transition-shadow duration-300 "
    >
      <div className="h-44 w-full overflow-hidden rounded-2xl sm:h-48 lg:h-60">
        <img
          src={gaushala.image}
          alt={gaushala.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-end p-4 min-h-35 md:min-h-40 gap-6 border rounded-xl">
        <h3 className=" font-saira text-sm font-bold leading-snug text-[#67aa41] sm:text-base lg:text-lg">
          {gaushala.name}
        </h3>
        <Button
          asChild
          className="group/btn  h-8 w-full rounded-none bg-[#5ba233] text-[10px] font-medium uppercase tracking-wide text-white shadow-md hover:bg-[#4a8a28] sm:text-xs"
        >
          <a
            href={getMapUrl(gaushala)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Locate ${gaushala.name} on Google Maps (opens in a new tab)`}
          >
            Locate us
            <ArrowUpRight className="ml-1 size-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>
        </Button>
      </div>

    </motion.article>
  );
}
