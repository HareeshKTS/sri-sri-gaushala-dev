import { useParams, useNavigate } from "react-router";
import { ArrowLeft, SquarePen, Trash } from "lucide-react";
import { blogsArticles } from "./BlogsList";
import { Card } from "@/components/ui/card";
import { admin_route_name } from "@/app/router/RouteNameEnums";

const BlogsView = () => {
    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();

    const blog = blogsArticles.find(
        (item) => item.id === Number(id)
    );
    console.log(blog, "Blog_Details");


    if (!blog) {
        return (
            <div className="flex flex-col flex-1 items-center justify-center gap-4">
                <h2 className="text-xl font-semibold">Blog not found</h2>
                <button
                    type="button"
                    onClick={() => navigate(`/${admin_route_name}/blog_and_articles`)}
                    className="text-green-theme underline"
                >
                    Back to blogs
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col flex-1 gap-4 overflow-auto p-4">
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={() => navigate(`/${admin_route_name}/blog_and_articles`)}
                    className="flex items-center justify-center rounded-full border border-green-theme p-2 cursor-pointer"
                    aria-label="Back to blogs"
                >
                    <ArrowLeft size={18} />
                </button>

                <h1 className="text-sm font-semibold font-saira">
                    Blog Details
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div>
                    <img
                        src={blog.icon}
                        alt={blog.title}
                        className="w-full h-auto rounded-md object-contain"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-green-theme font-saira text-[clamp(16px,4vw,1.5rem)]">
                        {blog.title}
                    </h2>
                </div>
                <div className="flex items-center justify-end gap-4 cursor-pointer">
                    <SquarePen strokeWidth={2.25} size={20} color="#0099ff" />
                    <Trash strokeWidth={2.25} size={20} color="#ff0000" />
                </div>
            </div>
            <Card className="flex flex-col gap-4 rounded-md p-4 shadow-[inset_0_0_6px_0_rgba(0,0,0,0.16)]!">
                <div className="flex flex-col gap-2">
                    <p className="whitespace-pre-line leading-5 font-gotham text-sm">
                        {blog.paragraph}
                    </p>
                    {blog.date && (
                        <p className="text-sm text-[#cbcbcb]">
                            {blog.date}
                        </p>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default BlogsView;