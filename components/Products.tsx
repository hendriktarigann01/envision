"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const pillarKeys = ["immersive", "interactive", "holographic", "arvr"] as const;

export default function Products() {
  const t = useTranslations("products");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      className="relative min-h-screen py-24 lg:py-32 px-6"
      ref={ref}
    >
      <div className="absolute -top-[10%] lg:-top-[40%] -left-[60%] lg:-left-[20%] z-0 pointer-events-none">
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
          className="flex items-center mx-auto gap-2 mb-6 p-3 rounded-full w-52 justify-center border border-brand-blue"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue" />
          <span className="text-sm font-body text-[#3B82F6] tracking-widest">
            {t("label")}
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
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
            className="font-body text-white text-sm max-w-xs leading-relaxed md:pt-4"
          >
            {t("subheadline")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-brand-indigo rounded-xl">
          {pillarKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              className={`group relative bg-[#02030A] p-8 transition-colors duration-300 overflow-hidden
        border-brand-indigo
        ${i < 3 ? "border-b" : ""}
        ${i % 2 === 0 ? "md:border-r" : ""}
        ${i < 2 ? "md:border-b" : "md:border-b-0"}`}
            >
              <div className="absolute inset-0 bg-brand-blue/0 transition-all duration-500 pointer-events-none" />
              <h3 className="font-display font-semibold text-lg text-white mb-3">
                {t(`pillars.${key}.title`)}
              </h3>
              <p className="font-body text-sm text-white leading-relaxed">
                {t(`pillars.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
