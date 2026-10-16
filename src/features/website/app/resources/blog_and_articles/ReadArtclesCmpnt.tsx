import { Link, useParams } from "react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOGS, BLOGS_BASE_PATH, formatBlogDate } from "./components/BlogsDummyData";
import { ArticleHero } from "./components/ArticleHero";
import { ArticleBody } from "./components/ArticleBody";
import { fadeBottom } from "@/shared/animations/WebsiteAnimations";

const BackLink = () => (
  <Link
    to={BLOGS_BASE_PATH}
    className="group inline-flex items-center gap-1.5 font-saira text-sm font-semibold text-[#fff] absolute top-20 left-4 hover:underline"
  >
    <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
    Back to articles
  </Link>
);

const ReadArtclesCmpnt = () => {
  const { id } = useParams<{ id: string }>();
  const article = BLOGS.find((b) => b.id === id);

  // thin green reading-progress bar at the very top of the screen
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  if (!article) {
    return (
      <main className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 bg-[#fffcf6] px-4 text-center">
        <h1 className="font-saira text-2xl font-bold text-[#67aa41]">Article not found</h1>
        <p className="font-gotham text-sm text-neutral-600">The article you are looking for doesn't exist or was moved.</p>
        <Button asChild className="rounded-none bg-[#67aa41] text-xs uppercase tracking-wide hover:bg-[#4a8a28]">
          <Link to={BLOGS_BASE_PATH}>View all articles</Link>
        </Button>
      </main>
    );
  }



  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#fffcf6]">
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-[#67aa41]" />
      <ArticleHero image={article.image} title={article.title} />
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-8">
        <motion.div
          variants={fadeBottom}
          custom={0.5}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-between gap-2"
        >
          <BackLink />
          <span className="font-gotham text-xs text-neutral-400">{formatBlogDate(article.date)}</span>
        </motion.div>
      </div>
      <ArticleBody blocks={article.content} />
    </main>
  );
};

export default ReadArtclesCmpnt;
