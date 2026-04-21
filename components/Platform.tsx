"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const reasonKeys = ["bespoke", "seamless", "enterprise", "partner"] as const;

export default function Platform() {
  const t = useTranslations("platform");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="platform"
      className="relative py-24 lg:py-32 px-6 overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-[25%] lg:top-[10%] left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <Image
          src="/images/effects/blur.webp"
          alt="blur-effect"
          width={1500}
          height={1500}
          className="object-contain scale-[5] md:scale-[1.6]"
        />
      </div>
      <div className="max-w-7xl relative mx-auto z-50">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center mx-auto gap-2 mb-8 px-4 py-2 rounded-full w-fit border border-[#1843F5]"
        >
          <span className="w-2 h-2 rounded-full bg-[#1843F5]" />
          <span className="text-sm font-body text-[#3B82F6] tracking-widest">
            {t("label")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-white text-center leading-[1.1] mb-6"
        >
          {t("headline")}
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-white/60 text-sm md:text-base text-center max-w-xl mx-auto leading-relaxed mb-14"
        >
          {t("subheadline")}
        </motion.p>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl border border-[#1843F5]/30 bg-[#060A1A] overflow-hidden"
        >
          {/* ── DESKTOP: 3 columns ── */}
          <div className="hidden md:grid md:grid-cols-[1fr_320px_1fr] xl:grid-cols-[1fr_380px_1fr] h-[460px]">
            {/* Left col */}
            <div className="flex flex-col divide-y divide-[#1843F5]/20">
              {reasonKeys.slice(0, 2).map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="flex-1 p-8 flex flex-col justify-center"
                >
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {t(`reasons.${key}.title`)}
                  </h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {t(`reasons.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Center image */}
            <div className="relative">
              <Image
                src="/images/common/platform.webp"
                alt="Platform visual"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060A1A]/60 via-transparent to-[#060A1A]/60" />
            </div>

            {/* Right col */}
            <div className="flex flex-col divide-y divide-[#1843F5]/20">
              {reasonKeys.slice(2).map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="flex-1 p-8 flex flex-col justify-center"
                >
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {t(`reasons.${key}.title`)}
                  </h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {t(`reasons.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── MOBILE: top 2 / image / bottom 2 ── */}
          <div className="md:hidden">
            {/* Top 2 reasons: 2 columns */}
            <div className="grid grid-cols-2 divide-x divide-[#1843F5]/20 border-b border-[#1843F5]/20">
              {reasonKeys.slice(0, 2).map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-3"
                >
                  <h3 className="font-display font-semibold text-base text-white mb-2">
                    {t(`reasons.${key}.title`)}
                  </h3>
                  <p className="font-body text-xs text-white leading-relaxed">
                    {t(`reasons.${key}.description_mobile`)}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="relative h-56">
              <Image
                src="/images/common/platform-mobile.webp"
                alt="Platform visual"
                fill
                className="object-contain object-center scale-105"
              />
            </div>

            <div className="grid grid-cols-2 border-t border-[#1843F5]/20">
              {reasonKeys.slice(2).map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="p-3"
                >
                  <h3 className="font-display font-semibold text-base text-white mb-2">
                    {t(`reasons.${key}.title`)}
                  </h3>
                  <p className="font-body text-xs text-white leading-relaxed">
                    {t(`reasons.${key}.description_mobile`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
