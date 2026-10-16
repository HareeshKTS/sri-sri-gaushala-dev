import { BlogBannerImage } from "@/assets/website_assets";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface Article {
  id: string; 
  title: string;
  excerpt: string;
  image: string;
  date: string; 
  content: Block[];
}

export const BLOGS_BASE_PATH = "/resources/blogs_articles";

export const BLOGS: Article[] = [
  {
    id: "science-meets-ancient-wisdom",
    title: "Modern Science Meets Ancient Wisdom: Vedic Yagnas, Cow Products & Health",
    excerpt:
      "Can a sacred fire actually purify the air?\nCan cow dung protect against harmful bacteria?\nCan gomutra (cow urine) really support liver health?\nModern research says: Yes.\nFor centuries, Indian scriptures have described Yagna and cow-based products as vital tools for environmental balance, health, and spiritual elevation.",
    image: BlogBannerImage,
    date: "2025-07-17",
    content: [
      {
        type: "p",
        text: "Can a sacred fire actually purify the air?\nCan cow dung protect against harmful bacteria?\nCan gomutra (cow urine) really support liver health?",
      },
      { type: "p", text: "Modern research says: **Yes**." },
      {
        type: "p",
        text: "For centuries, Indian scriptures have described **Yagna** and **cow-based products** as vital tools for environmental balance, health, and spiritual elevation. Today, science is beginning to validate what our rishis knew intuitively.",
      },
      {
        type: "p",
        text: "Let's explore how **ancient Gau-Vedic wisdom and cutting-edge research are finally shaking hands.**",
      },
      { type: "h2", text: "1. Yagna: Not Just Ritual – A Natural Air Purifier" },
      { type: "p", text: "**Yagna** (or homa) involves:" },
      {
        type: "ul",
        items: [
          "Fire lit using desi cow ghee + herbs (samidha)",
          "Offerings of rice, havan samagri, etc.",
          "Chanting of mantras (vibrational resonance)",
        ],
      },
      { type: "p", text: "Recent Study (Art of Living Research @ IIT Mandi):" },
      {
        type: "ul",
        items: [
          "Yagna fire significantly reduces aerosol bacterial count",
          "Neutralizes airborne E. coli, Staph, and fungal spores",
          "Enhances positivity and reduces stress markers in body",
        ],
      },
      { type: "p", text: "The combination of heat + herbs + mantras creates a microbial firewall in the air." },
      { type: "h2", text: "2. Cow Ghee – The Anti-Toxin Carrier" },
      { type: "p", text: "Ghee made from desi cows (A2 ghee):" },
      {
        type: "ul",
        items: [
          "Detoxifies internal organs when consumed",
          "Lubricates joints, supports brain function",
          "Burning it in Yagna emits oxygen & purifies air",
        ],
      },
    ],
  },
  {
    id: "indigenous-cow-breeds-of-india",
    title: "10 Most Powerful Indigenous Cow Breeds of India – A Heritage to Be Preserved",
    excerpt:
      "India is home to over 40+ registered indigenous cow breeds, each uniquely adapted to its geography, climate, and cultural fabric. These are not just cattle — they are living legacies, offering A2 milk, spiritual value, and sustainable farming.",
    image: BlogBannerImage,
    date: "2025-07-17",
    content: [
      {
        type: "p",
        text: "India is home to over **40+ registered indigenous cow breeds**, each uniquely adapted to its geography, climate, and cultural fabric. These are not just cattle — they are living legacies, offering A2 milk, spiritual value, and sustainable farming.",
      },
    ],
  },
  {
    id: "start-gau-seva-in-daily-life",
    title: "How to Start Gau Seva in Daily Life – A Beginner's Guide to Serving Cows",
    excerpt:
      "Gau Seva (serving cows) is not just a ritual—it's a lifestyle that aligns you with nature, compassion, and spiritual progress. But many people wonder: “How do I begin Gau Seva if I live in a city?”",
    image: BlogBannerImage,
    date: "2025-07-17",
    content: [
      {
        type: "p",
        text: "Gau Seva (serving cows) is not just a ritual—it's a lifestyle that aligns you with nature, compassion, and spiritual progress.",
      },
    ],
  },
];

export const formatBlogDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
