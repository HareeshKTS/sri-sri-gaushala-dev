import { Route, Routes } from "react-router";
import BlogsList from "./blogs_list/BlogsList";
import BlogsView from "./blogs_list/BlogsView";

const BlogsAndArticles = () => {
    return (
        <div className="h-full overflow-auto px-4 flex flex-col gap-4">
            <Routes>
                <Route path="/" element={<BlogsList />} />
                <Route path="/blog_view/:id" element={<BlogsView />} />
            </Routes>
        </div>
    );
};

export default BlogsAndArticles;