type NavItem = {
    label: string;
    to?: string;
    children?: { label: string; to: string }[];
};
export const NAV_ITEMS: NavItem[] = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Gausewa", to: "/gausewa" },
    {
        label: "Resources",
        children: [
            { label: "BLOG & ARTICLES", to: "/resources/blogs_articles" },
            { label: "VIDEOS", to: "/resources/videos" },
        ],
    },
    { label: "Know The Breeds", to: "/breeds" },
    { label: "Other Gaushalas", to: "/other_gaushalas" },
    { label: "Gallery", to: "/gallery" },
];