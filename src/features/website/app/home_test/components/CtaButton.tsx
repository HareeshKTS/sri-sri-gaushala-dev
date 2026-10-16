import type { ReactNode } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  to: string;
  children: ReactNode;
  /** compact version (e.g. "Visit us" on the banner) */
  small?: boolean;
  className?: string;
  button_class_name?:string
}

/** Green square button with ↗ — a real router Link, grows slightly on hover. */
export function CtaButton({ to, children, small = false, className = "", button_class_name='' }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className={`inline-block ${className}`}>
      <Button
        asChild
        className={`group rounded-none bg-[#67aa41] font-saira font-medium uppercase tracking-wide text-white shadow-md hover:bg-[#4a8a28] ${
          small ? "h-7 px-3 text-[10px]" : "h-9 px-6 text-xs"
        } ${button_class_name}`}
      >
        <Link to={to}>
          {children}
          <ArrowUpRight
            className={`ml-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
              small ? "size-3" : "size-4"
            }`}
          />
        </Link>
      </Button>
    </motion.div>
  );
}
