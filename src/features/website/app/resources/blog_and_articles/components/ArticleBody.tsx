import { Fragment, type ReactNode } from "react";
import { motion } from "motion/react";
import type { Block } from "./BlogsDummyData";
import { fadeBottom, stagger } from "@/shared/animations/WebsiteAnimations";

const renderInline = (text: string): ReactNode =>
  text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-neutral-900">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );

const reveal = { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.15 } } as const;
const textCls = "font-gotham text-[13px] leading-relaxed text-neutral-700 sm:text-sm";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 pt-6 sm:px-8">
      <div className="space-y-4">
        {blocks.map((block, i) => {
          switch (block.type) {
            case "h2":
              return (
                <motion.h2
                  key={i}
                  variants={fadeBottom}
                  {...reveal}
                  className="pt-4 font-saira text-2xl font-bold leading-tight text-[#67aa41] sm:text-3xl"
                >
                  {block.text}
                </motion.h2>
              );
            case "ul":
            case "ol": {
              const List = block.type === "ul" ? motion.ul : motion.ol;
              return (
                <List
                  key={i}
                  variants={stagger(0.08)}
                  {...reveal}
                  className={`${block.type === "ul" ? "list-disc" : "list-decimal"} space-y-1 pl-10 ${textCls}`}
                >
                  {block.items.map((item, j) => (
                    <motion.li key={j} variants={fadeBottom}>
                      {renderInline(item)}
                    </motion.li>
                  ))}
                </List>
              );
            }
            default:
              return (
                <motion.p key={i} variants={fadeBottom} {...reveal} className={`whitespace-pre-line ${textCls}`}>
                  {renderInline(block.text)}
                </motion.p>
              );
          }
        })}
      </div>
    </div>
  );
}
