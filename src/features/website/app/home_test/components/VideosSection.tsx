import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { fadeBottom,stagger } from "@/shared/animations/WebsiteAnimations";
import { vid1, vid2, vid3 } from "@/assets/website_assets";
interface VideoItem {
  id: string;
  src: string;
  title: string;
}
function VideoCard({ video }: { video: VideoItem }) {
  return (
    <motion.div
      variants={fadeBottom}
      whileHover={{ y: 0 }}
      className="group relative aspect-[8/13] overflow-hidden rounded-xl bg-neutral-200 shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <video
        src={video.src}
        title={video.title}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />
    </motion.div>
  );
}

export function VideosSection() {
  const VIDEOS: VideoItem[] = [
    {
      id: "v1",
      src: vid1,
      title: "Sri Sri Gaushala Bangalore",
    },
    {
      id: "v2",
      src: vid2,
      title: "Happy Makar Sankranti",
    },
    {
      id: "v3",
      src: vid3,
      title: "Calf cuddles",
    },
    {
      id: "v4",
      src: vid1,
      title: "A day at the gaushala",
    },
  ];
  return (
    <section className="py-4 md:py-8">
      <SectionHeading>Videos</SectionHeading>
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-5 md:mt-10 grid md:max-w-[90%] grid-cols-2 gap-3 px-4 sm:gap-4 lg:grid-cols-4"
      >
        {VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </motion.div>
    </section>
  );
}