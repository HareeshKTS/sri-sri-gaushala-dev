import { admin_route_name } from "@/app/router/RouteNameEnums";
import AboutusIcon from "@/assets/admin_assets/custom_icons_compts/AboutusIcon";
import BlogsIcon from "@/assets/admin_assets/custom_icons_compts/BlogsIcon";
import BreedsIcon from "@/assets/admin_assets/custom_icons_compts/BreedsIcon";
// import CtasIcon from "@/assets/admin_assets/custom_icons_compts/CtasIcon";
import DashBoardIcon from "@/assets/admin_assets/custom_icons_compts/DashboardIcon";
import FaqsIcon from "@/assets/admin_assets/custom_icons_compts/FaqsIcon";
import GalleryIcon from "@/assets/admin_assets/custom_icons_compts/GalleryIcon";
import GausevaIcon from "@/assets/admin_assets/custom_icons_compts/GausevaIcon";
import HomeIcon from "@/assets/admin_assets/custom_icons_compts/HomeIcon";
import SettingsIcon from "@/assets/admin_assets/custom_icons_compts/SettingsIcon";
import TestmonialsIcons from "@/assets/admin_assets/custom_icons_compts/TestmonialsIcons";
import VideosIcon from "@/assets/admin_assets/custom_icons_compts/VideosIcon";
import type { ComponentType } from "react";

export interface SubRouteItem {
    id: number;
    title: string;
    icon: string | ComponentType<any> | null;
    route: string;
}

export interface NavTitles {
    title: string;
    sub_title: string
}

export interface RouteItem {
    id: number;
    title: string;
    icon: string | ComponentType<any>  | null;
    route: string;
    subRoute?: SubRouteItem[];
    nav_title?: NavTitles;
}

const admin_routes: RouteItem[] = [
    {
        id: 1,
        title: "Dashboard",
        icon: DashBoardIcon,
        route: `/${admin_route_name}/dashboard`,
        subRoute: [],
        nav_title: {
            title: "Dashboard Overview",
            sub_title:
                "Welcome back, Admin! Here's what's happening at your Gaushala today.",
        },
    },

    {
        id: 2,
        title: "Home",
        icon: HomeIcon,
        route: `/${admin_route_name}/home`,
        subRoute: [],
        nav_title: {
            title: "Home Page",
            sub_title:
                "Manage and update the content displayed on your Gaushala's home page.",
        },
    },

    {
        id: 3,
        title: "About Us",
        icon: AboutusIcon,
        route: `/${admin_route_name}/about_us`,
        subRoute: [],
        nav_title: {
            title: "About Us",
            sub_title:
                "Manage your Gaushala's information, story, mission, and other details.",
        },
    },

    {
        id: 4,
        title: "Breeds",
        icon: BreedsIcon,
        route: `/${admin_route_name}/breeds`,
        subRoute: [
            // {
            //     id: 1,
            //     title: "Indian Breeds",
            //     icon: null,
            //     route: "indian_breeds",
            // },
            // {
            //     id: 2,
            //     title: "Foreign Breeds",
            //     icon: null,
            //     route: "foreign_breeds",
            // },
        ],
        nav_title: {
            title: "Cattle Breeds",
            sub_title: "Manage Indian and foreign cattle breeds and their information.",
        },
    },

    {
        id: 5,
        title: "Gausewa",
        icon: GausevaIcon,
        route: `/${admin_route_name}/gausewa`,
        subRoute: [],
        nav_title: {
            title: "Gausewa Management",
            sub_title: "Manage Gausewa activities, services, and information for your Gaushala.",
        },
    },

    // {
    //     id: 6,
    //     title: "CTAs",
    //     icon: CtasIcon,
    //     route: `/${admin_route_name}/CTAs`,
    //     subRoute: [],
    //     nav_title: {
    //         title: "Call to Actions",
    //         sub_title: "Create and manage call-to-action sections displayed across the website.",
    //     },
    // },

    {
        id: 6,
        title: "Gallery",
        icon: GalleryIcon,
        route: `/${admin_route_name}/gallery`,
        subRoute: [],
        nav_title: {
            title: "Gallery",
            sub_title: "Manage photos and visual content showcasing your Gaushala's activities.",
        },
    },

    {
        id: 7,
        title: "Videos",
        icon: VideosIcon,
        route: `/${admin_route_name}/videos`,
        subRoute: [],
        nav_title: {
            title: "Videos",
            sub_title: "Manage and organize videos related to your Gaushala and its activities.",
        },
    },

    {
        id: 8,
        title: "Testimonials",
        icon: TestmonialsIcons,
        route: `/${admin_route_name}/testimonials`,
        subRoute: [],
        nav_title: {
            title: "Testimonials",
            sub_title: "Manage testimonials and experiences shared by your visitors and supporters.",
        },
    },

    {
        id: 9,
        title: "Blog & Articles",
        icon: BlogsIcon,
        route: `/${admin_route_name}/blog_and_articles`,
        subRoute: [],
        nav_title: {
            title: "Blogs & Articles",
            sub_title: "Create, edit, and manage articles and blog content for your website.",
        },
    },

    {
        id: 10,
        title: "FAQs",
        icon: FaqsIcon,
        route: `/${admin_route_name}/FAQs`,
        subRoute: [],
        nav_title: {
            title: "Frequently Asked Questions",
            sub_title: "Manage common questions and answers to help visitors find information quickly.",
        },
    },

    {
        id: 11,
        title: "Settings",
        icon: SettingsIcon,
        route: `/${admin_route_name}/settings`,
        subRoute: [],
        nav_title: {
            title: "Settings",
            sub_title: "Manage all settings here.",
        },
    },
];

export default admin_routes;