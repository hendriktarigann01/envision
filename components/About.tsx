"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

// const pillarKeys = ["bespoke", "seamless", "enterprise", "endtoend"] as const;
const pillarKeys = ["artistry", "engineering", "ecosystem"] as const;

export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 lg:py-32 px-6"
      ref={ref}
    >
      <div className="max-w-7xl relative mx-auto z-50">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#424242]">
          {pillarKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.2 }}
              className="flex flex-col justify-center items-center text-center px-6 lg:px-10 py-10 md:py-16 md:min-h-[320px]"
            >
              {/* Label */}
              <div className="mb-12 md:mb-24 flex items-center mx-auto gap-2 px-4 py-2 rounded-full w-fit border border-white">
                <span className="text-sm font-body text-white tracking-widest">
                  {t(`pillars.${key}.badge`)}
                </span>
              </div>
              <p className="mb-2 md:mb-4 font-body text-sm md:text-xl text-white leading-relaxed max-w-sm">
                {t(`pillars.${key}.title`)}
              </p>
              <p className="font-body text-[10px] md:text-xs text-[#BDBDBD] leading-relaxed max-w-[200px]">
                {t(`pillars.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
