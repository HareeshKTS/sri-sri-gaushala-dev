import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOGS_BASE_PATH, formatBlogDate, type Article } from "./BlogsDummyData";
import { fadeBottom } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";
interface Props {
  article: Article;
  index?: number;
}
export function BlogCard({ article, index = 0 }: Props) {
  return (
    <motion.article
      variants={fadeBottom}
      custom={(index % 3) * 0.1}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group flex h-full flex-col rounded-xl bg-white pb-3 shadow-md transition-shadow duration-300 font-saira"
    >
      <div className="h-44 w-full overflow-hidden rounded-2xl sm:h-48 lg:h-52">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mx-2.5 mt-2 flex flex-1 flex-col rounded-xl p-4 shadow-[inset_0_1px_4px_rgba(0,0,0,0.12)]">
        <h3 className="font-saira text-sm font-semibold leading-snug text-[#67aa41] sm:text-[15px]">{article.title}</h3>
        <p className="mt-2 line-clamp-6 whitespace-pre-line font-gotham text-sm leading-relaxed text-neutral-700">
          {article.excerpt}
        </p>
        <div className="mt-auto flex justify-center pt-4">
          <Button
            asChild
            className="group/btn h-9 rounded-none bg-[#67aa41] px-6 text-xs font-medium uppercase tracking-wide text-white shadow-md hover:bg-[#4a8a28]"
          >
            <Link to={`${BLOGS_BASE_PATH}/${article.id}`}>
              Read more
              <ArrowUpRight className="ml-1 size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-xs text-neutral-300">{formatBlogDate(article.date)}</p>
      </div>
    </motion.article>
  );
}
