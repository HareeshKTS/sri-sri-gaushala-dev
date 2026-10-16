import HeroBanner from "./components/HeroBanner";
import { BlogCard } from "./components/BlogCard";
import { BLOGS } from "./components/BlogsDummyData";

const BlogsHome = () => {
  return (
    <main className={`min-h-screen w-full overflow-x-clip bg-[#fffcf6]`}>
      <HeroBanner
        badge={"BLOG & ARTICLES"}
        quote={"A sanctuary where every cow is cherished. A future built on care, kindness, and sustainability."}
      />
      <section className="p-4 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3  max-w-[90%] md:max-w-[85%] pt-10">
          {BLOGS.map((article, i) => (
            <BlogCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogsHome;
