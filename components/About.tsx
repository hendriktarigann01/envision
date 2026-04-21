"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const pillarKeys = ["bespoke", "seamless", "enterprise", "endtoend"] as const;

export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 px-6" ref={ref}>
      <div className="absolute top-[35%] lg:-top-[15%] -left-[60%] lg:-left-[25%] z-0 pointer-events-none">
        <Image
          src="/images/effects/blur.webp"
          alt="blur-effect"
          width={1000}
          height={1000}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl relative mx-auto z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6 p-3 rounded-full w-fit px-4 justify-center border border-brand-blue"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue" />
          <span className="text-sm font-body text-[#3B82F6] tracking-widest">
            {t("label")}
          </span>
        </motion.div>

        {/* Mobile: stacked. Desktop: side by side */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl leading-[1.1] text-white max-w-sm"
          >
            {t("headline")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-white text-sm max-w-lg leading-relaxed"
          >
            {t("subheadline")}
          </motion.p>
        </div>

        {/* Cards: 2-col on mobile, 2-col on desktop */}
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {pillarKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              className="group relative bg-[#060A1A] p-5 md:p-8 transition-colors duration-300 overflow-hidden border border-brand-indigo rounded-lg"
            >
              <div className="absolute inset-0 bg-brand-blue/0 transition-all duration-500 pointer-events-none" />
              <h3 className="font-display font-semibold text-sm md:text-lg text-white mb-2 md:mb-3">
                {t(`pillars.${key}.title`)}
              </h3>

              <p className="font-body text-xs md:text-sm text-white leading-relaxed">
                {/* Logika Switch Deskripsi */}
                <span className="md:hidden">
                  {t(`pillars.${key}.description_mobile`)}
                </span>
                <span className="hidden md:inline">
                  {t(`pillars.${key}.description`)}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
