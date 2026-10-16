import { Link } from "react-router";
import {
  Diamond,
} from "lucide-react";
import {
  EmailIcon,
  FacebookIcon,
  FooterGrassImage,
  FooterWhiteCowImage,
  InstagramIcon,
  KtsLogo,
  LocationIcon,
  PhoneIcon,
  YoutubeIcon,
} from "@/assets/website_assets";

const GREEN_BG = "bg-[#62a844]";

const QUICK_LINKS = [
  { label: "Gausewa", to: "/gausewa" },
  { label: "About us", to: "/about-us" },
  { label: "Videos", to: "/videos" },
  { label: "Blog", to: "/resources/blogs" },
  { label: "FAQs", to: "/resources/faqs" },
];



const SOCIALS = [
  {
    icon: YoutubeIcon,
    label: "https://www.youtube.com/@srisrigaushala",
    href: "https://www.youtube.com/@srisrigaushala",
  },
  {
    icon: InstagramIcon,
    label: "https://www.instagram.com/srisrigaushala/",
    href: "https://www.instagram.com/srisrigaushala/",
  },
  {
    icon: FacebookIcon,
    label: "facebook.com/srisri.gaushala",
    href: "https://facebook.com/srisri.gaushala",
  },
];

const headingClass =
  "text-[11px] font-semibold uppercase tracking-wide text-white";

const textClass = "text-[11px] leading-relaxed text-white/90";

const Footer = () => {
  // const GaushalaMapsURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.259944646941!2d77.49559417457618!3d12.828356787474004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae411d9fe1859b%3A0x77fa0bb3c8652305!2sSri%20Sri%20Gaushala%20-%20Art%20of%20Living%20International%20Center!5e1!3m2!1sen!2sin!4v1782378910879!5m2!1sen!2sin";
  const GaushalaMapsURL ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.259944646941!2d77.49559417457618!3d12.828356787474004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae411d9fe1859b%3A0x77fa0bb3c8652305!2sSri%20Sri%20Gaushala%20-%20Art%20of%20Living%20International%20Center!5e0!3m2!1sen!2sin!4v1782378910879!5m2!1sen!2sin";
  return (
    <footer className="w-full">
      {/* Grass strip */}
      <img
        src={FooterGrassImage}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none -mb-px block h-auto w-full select-none"
      />
      <div className={`${GREEN_BG} text-white`}>
        <div className="mx-auto max-w-[95%] px-5 pt-2 pb-2 md:px-6">
          <img
            src={FooterWhiteCowImage}
            alt="Sri Sri Gaushala"
            className="h-16 w-auto"
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-0 mt-2">
            <div className="md:pr-8">
              <div className="border-y border-black py-2">
                <p className={textClass}>
                  Sri Sri Gaushala is dedicated to the loving care and protection
                  of cows, inspired by the timeless values of compassion and
                  service.
                </p>
              </div>

              <div className="mt-3">
                <p className="text-[11px] font-semibold text-white">
                  Follow &amp; Subscribe
                </p>

                <p className={`${textClass} mt-1`}>
                  Visit our official YouTube and Instagram channels to explore
                  our videos, events and the inspiring work of our Gaushala.
                </p>

                <ul className="mt-3 space-y-2">
                  {SOCIALS.map(({ icon: Icon, label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[11px] font-medium text-white hover:underline"
                      >
                        <img src={Icon} alt="" className="h-4 w-4" />
                        {/* <Icon size={16} className="shrink-0" /> */}
                        <span className="break-all">{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:border-l md:border-white/30 md:px-8 flex flex-col md:items-center">
              <h3 className={headingClass}>Quick Links</h3>

              <ul className="mt-4 space-y-3.5 grid md:grid-cols-1 grid-cols-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2.5 text-[11px] text-white hover:underline"
                    >
                      <Diamond
                        size={7}
                        fill="#034006"
                        color="#034006"
                        className="shrink-0"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:border-l md:border-white/30 md:pl-8">
              <h3 className={headingClass}>Visit Us</h3>



              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-2.5">
                  <img src={LocationIcon} alt="" className="h-4 w-4 mt-0.5" />
                  <address className={`${textClass} not-italic`}>
                    Inside Art of Living International Center, 21st KM
                    Kanakapura Main Road, Udayapura Post, South, Bengaluru,
                    Karnataka 560082
                  </address>
                </li>
                <li>
                  <a
                    href="mailto:gaushalaashram@gmail.com"
                    className="flex items-center gap-2.5 text-[11px] text-white hover:underline"
                  >
                    <img src={EmailIcon} alt="" className="h-4 w-4" />

                    <span>gaushalaashram@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917026972000"
                    className="flex items-center gap-2.5 text-[11px] text-white hover:underline"
                  >
                    <img src={PhoneIcon} alt="" className="h-4 w-4" />

                    <span>+91-70269-72000</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative mt-4 overflow-hidden ">
            <iframe
              src={GaushalaMapsURL}
              width="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-40 w-full md:h-50"
            />
          </div>
          <div className={`text-white text-center pb-5 md:pb-2 px-3 text-[10px] font-medium tracking-[0.5px] mt-4  w-full flex flex-wrap items-center justify-center gap-1 select-none`}>
            <span className="whitespace-nowrap">
              Crafted with precision by
            </span>
            <a href="https://kyurius.tech/"><img src={KtsLogo} alt="kts" className="inline-block max-h-[1rem]" /></a>
            <span className="break-all">
              Kyurius Tech Studios, the architects of digital experiences
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
