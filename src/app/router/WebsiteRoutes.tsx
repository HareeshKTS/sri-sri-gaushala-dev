import { useRoutes } from "react-router";
import PageNotFound from "@/features/PageNotFound";
import MainLayout from "../layout/website/MainLayout";
import { lazy } from "react";
import WebsiteContext from "../context/WebsiteContext";
const Home = lazy(() => import("@/features/website/app/home/Home"));
const AboutUs = lazy(() => import("@/features/website/app/about_us/About_us"));
const Gausewa = lazy(() => import("@/features/website/app/gausewa/Gausewa"));
const BlogAndArticles = lazy(() => import("@/features/website/app/resources/blog_and_articles/BlogAndArticles"));
const GaushalaVideos = lazy(() => import("@/features/website/app/resources/videos/GaushalaVideos"));
const KnowBreeds = lazy(() => import("@/features/website/app/know_the_breeds/KnowBreeds"));
const OtherGaushalas = lazy(() => import("@/features/website/app/other_gaushalas/OtherGaushalas"));
const Gallery = lazy(() => import("@/features/website/app/gallery/Gallery"));
function WebsiteRoutes() {
    const routes = useRoutes([
        {
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                }, 
                {
                    path: "/about-us",
                    element: <AboutUs />,
                },
                {
                    path: "/gausewa",
                    element: <Gausewa />,
                }, 
                {
                    path: "/resources/blogs_articles/*",
                    element: <BlogAndArticles />,
                },
                {
                    path: "/resources/videos",
                    element: <GaushalaVideos />,
                },
                {
                    path: "/breeds",
                    element: <KnowBreeds />,
                },
                {
                    path: "/other_gaushalas",
                    element: <OtherGaushalas />,
                },
                {
                    path: "/gallery",
                    element: <Gallery />,
                },
            ],
        },
        { path: "*", element: <PageNotFound route_name="/"/> },
    ]);
    return <WebsiteContext>{routes}</WebsiteContext>;
}
export default WebsiteRoutes;
