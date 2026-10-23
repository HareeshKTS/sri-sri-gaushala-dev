import { useEffect,  type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { fadeBottom } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";
import { ManyCows } from "@/assets/website_assets";
import { useSearchParams } from "react-router";


type BreedTabKey = "cows" | "bulls";
interface Breed {
  id: string;
  name: string;
  description: string;
  image: string; 
}
 const BREEDS: Record<BreedTabKey, Breed[]> = {
  cows: [
    {
      id: "kankrej",
      name: "Kankrej",
      description:"With a silvery coat that glimmers in the dawn, the Kankrej of Gujarat and Rajasthan is a gentle giant. Her bullocks are the silent heroes of the fields, and her calm presence brings peace to every herd.",
      image: ManyCows,
    },
    {
      id: "kasara-god",
      name: "Kasara God",
      description:
        "From Kerala's coastal lands, the Kasaragod is a small, hardy breed that thrives with little care. Drought-tolerant and gentle, they are perfect for homestead farming—bringing sustainability and quiet strength to rural families.",
      image: ManyCows,
    },
    {
      id: "kangayam",
      name: "Kangayam",
      description:
        "The Kangayam, disciplined and intelligent, is the pride of Tamil Nadu's carts and fields. Her strength is legendary, her temperament gentle—a true friend for every journey.",
      image: ManyCows,
    },
    {
      id: "tharparkar",
      name: "Tharparkar",
      description:
        "In the golden sands of Rajasthan, the Tharparkar endures where few can. She is a symbol of hope, thriving in the desert, giving both strength for the plough and nourishing milk for the children. Her spirit is as unyielding as the dunes she calls home.",
      image: ManyCows,
    },
    {
      id: "alambadi",
      name: "Alambadi",
      description:
        "Once the pride of temple processions, the Alambadi now waits for a loving hand to bring her back. She is a reminder of our duty to protect and cherish what is rare and precious.",
      image: ManyCows,
    },
    {
      id: "malnad-gidda",
      name: "Malnad Gidda",
      description:
        "In the misty Western Ghats, the tiny Malnad Gidda weaves through the forests, her milk a healing elixir, her presence a blessing for the land. She is nature's child, thriving where the wild things grow.",
      image: ManyCows,
    },
  ],
  bulls: [
    {
      id: "kasara-god-bull",
      name: "Kasara God",
      description:
        "From Kerala's coastal lands, the Kasaragod is a small, hardy breed that thrives with little care. Drought-tolerant and gentle, they are perfect for homestead farming—bringing sustainability and quiet strength to rural families.",
      image: ManyCows,
    },
    {
      id: "montu-kankrej",
      name: "Montu Kankrej",
      description:
        "From Gujarat and Rajasthan, the Kankrej is known for its powerful bullocks and fast milk yield. With a striking grey coat and lyre-shaped horns, this hardy breed is valued for strength, endurance, and adaptability in tough farming conditions.",
      image: ManyCows,
    },
    {
      id: "rathi",
      name: "Rathi",
      description:
        "The Rathi, sturdy and steadfast, is the pride of Rajasthan's arid plains. She is a friend to the farmer, adapting to the harshest sun, her strong frame a testament to survival and abundance in the toughest times.",
      image: ManyCows,
    },
    {
      id: "kangayam-bull",
      name: "Kangayam",
      description:
        "The Kangayam, disciplined and intelligent, is the pride of Tamil Nadu's carts and fields. His strength is legendary, his temperament gentle—a true friend for every journey.",
      image: ManyCows,
    },
    {
      id: "prince-gir",
      name: "Prince Gir",
      description:
        "From Gujarat, the Prince Gir stands out for its majestic curved horns and gentle nature. Renowned for rich, high-butterfat milk and resilience, this breed brings both nourishment and grace to every home.",
      image: ManyCows,
    },
    {
      id: "nand-gir",
      name: "Nand Gir",
      description:
        "From Gujarat, the Nand Gir bull is prized for its majestic build, curved horns, and gentle strength. Renowned for endurance and rich genetics, it brings power and grace to every herd.",
      image: ManyCows,
    },
  ],
  };

const TABS: { key: BreedTabKey; label: string }[] = [
  { key: "cows", label: "Cows" },
  { key: "bulls", label: "Bulls" },
];
export function BreedsShowcase() {
  // const [active, setActive] = useState<BreedTabKey>("cows");
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = searchParams.get("type");
  const active: BreedTabKey = TABS.some((t) => t.key === typeParam) ? (typeParam as BreedTabKey) : "cows";
  const setActive = (key: BreedTabKey) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev); // keeps any other query params
        next.set("type", key);
        return next;
      },
      { replace: true } // tab switches don't pile up history entries
    );
  };
  useEffect(() => {
    if (typeParam !== active) setActive(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeParam]);
  const breeds = BREEDS[active];
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const i = TABS.findIndex((t) => t.key === active);
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setActive(TABS[next].key);
  };
  return (
    <motion.section
      variants={fadeBottom}
      initial="hidden"
      animate="show"
      custom={0.2}
      className="mx-auto max-w-6xl px-4  pt-10 sm:pt-14"
    >
      <div
        role="tablist"
        aria-label="Breed type"
        onKeyDown={onKeyDown}
        className="relative z-10 -mb-px flex items-end gap-3 pl-10 sm:pl-9"
      >
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          const fade = {
            animate: { opacity: isActive ? 1 : 0 },
            transition: { duration: 0, delay: isActive ? 0 : 0 },
            initial: false as const,
          };

          return (
            <div key={tab.key} className="relative">
              <motion.span
                aria-hidden
                {...fade}
                className={`pointer-events-none absolute -inset-x-[10px] -bottom-[2px] h-[4px] bg-[#fff]`}
              />
              <motion.span
                aria-hidden
                {...fade}
                className={`pointer-events-none absolute bottom-0 right-[99%] size-[14px] rounded-br-[12px] border-b border-r border-[#b76e00]`}
              />
              <motion.span
                aria-hidden
                {...fade}
                className={`pointer-events-none absolute bottom-0 left-[99%] size-[14px] rounded-bl-[12px] border-b border-l border-[#b76e00]`}
              />
              <motion.button
                role="tab"
                id={`tab-${tab.key}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.key}`}
                tabIndex={isActive ? 0 : -1}
                type="button"
                initial={false}
                animate={{ y: isActive ? 0 : -5 }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActive(tab.key)}
                className={[
                  "relative w-[100px] md:w-[140px] cursor-pointer border py-1.5 font-saira text-base font-medium uppercase tracking-wide transition-colors duration-300 sm:w-[200px] sm:py-1.5 sm:text-xl lg:w-[230px]",
                  isActive
                    ? "rounded-xl border-[#b76e00] bg-[#ff9900] text-white shadow-sm"
                    : "rounded-xl border-transparent bg-white text-black shadow-[0_3px_8px_rgba(0,0,0,0.15)]",
                ].join(" ")}
              >
                {tab.label}
              </motion.button>
            </div>
          );
        })}
      </div>

      <div className={`rounded-3xl border border-[#b76e00]  pb-3 md:pb-6 pt-5 md:pt-8 px-2.5 md:px-6 sm:pb-8 sm:pt-10`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {breeds.map((breed, i) => (
              <motion.article
                variants={fadeBottom}
                custom={(i % 3) * 0.1}
                initial="show"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                // whileHover={{ y: -6 }}
                className="group flex h-full flex-col rounded-2xl pb-3 border border-[#ff9900] bg-[#fffcf6] transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="h-44 w-full overflow-hidden rounded-2xl  sm:h-48 lg:h-52 bg-[#fffcf6]  border   scale-101 -mt-2 ">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out "
                  />
                </div>
                {/* <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div> */}
                <h3 className="mt-3 text-center font-saira text-sm font-bold uppercase tracking-wide text-[#67aa41] sm:text-[15px]">
                  {breed.name}
                </h3>
                <div className="mx-2.5 mt-2 flex flex-1 flex-col rounded-xl p-4 shadow-[inset_0_1px_4px_rgba(0,0,0,0.12)]">
                  <p className="text-center font-gotham text-[11px] leading-relaxed text-neutral-700 sm:text-xs">
                    {breed.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
