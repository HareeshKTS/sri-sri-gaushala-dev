import { useNavigate } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/Header";
import type { BlogsListTypes } from "../Types";
import { blogs_one } from "@/assets/admin_assets";
import { admin_route_name } from "@/app/router/RouteNameEnums";

// eslint-disable-next-line react-refresh/only-export-components
export const blogsArticles: BlogsListTypes[] = Array(15).fill(null).map((_, index) => ({
    id: index,
    title: "Modern Science Meets Ancient Wisdom: Vedic Yagnas, Cow Products & Health",
    paragraph: `Can a sacred fire actually purify the air?
                Can cow dung protect against harmful bacteria?
                Can gomutra (cow urine) really support liver health?
                Modern research says: Yes.
                For centuries, Indian scriptures have described Yagna and`,
    icon: blogs_one,
    date: "July 17, 2025",
}));

const BlogsList = () => {
    const navigate = useNavigate();
    const navigateToBlogView = (id: number) => {
        navigate(`/${admin_route_name}/blog_and_articles/blog_view/${id}`);
    };
    return (
        <div className="flex flex-col flex-1 gap-2 overflow-auto">
            <Header />
            <div className="flex flex-col gap-2 flex-1 overflow-auto px-2 py-1">
                {
                    blogsArticles.map((blog) => (
                        <Card key={blog.id} className="flex flex-col lg:flex-row gap-4  p-4 rounded-md">
                            <div className="flex flex-col gap-4  justify-between">
                                <div className="flex gap-2 items-center">
                                    <img src={blog.icon} alt={blog.title} className=" object-contain w-full h-auto" />
                                </div>
                                {blog.date && (
                                    <p className="text-xs text-[#cbcbcb]">
                                        {blog.date}
                                    </p>
                                )}
                            </div>
                            <Card className="flex flex-col lg:flex-row gap-4 flex-1 rounded-2xl! p-4 shadow-[inset_0_0_6px_0_rgba(0,0,0,0.16)]!">
                                <CardHeader className="flex flex-col gap-2 flex-1 ">
                                    <CardTitle className="font-semibold text-green-theme font-saira text-[clamp(16px,1.5vw,1rem)]">
                                        {blog.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm font-gotham">
                                        {blog.paragraph}
                                    </CardDescription>
                                </CardHeader>
                                <div className="flex items-center justify-center">
                                    <button
                                        onClick={() => navigateToBlogView(blog.id)}
                                        type="button"
                                        className="flex items-center justify-center w-10 h-10 lg:w-16 lg:h-16 cursor-pointer
                                         rounded-full border border-green-theme">
                                        <ArrowUpRight strokeWidth={1.75} size={28} color="#2e7d32" />
                                    </button>
                                </div>
                            </Card>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogsList
