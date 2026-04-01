"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const reasonKeys = ["bespoke", "seamless", "enterprise", "partner"] as const;

export default function WhyEnvision() {
  const t = useTranslations("why");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why"
      className="relative py-24 lg:py-32 px-6 min-h-screen overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
        <Image
          src="/images/effects/blur.webp"
          alt="blur-effect"
          width={1000}
          height={1000}
          className="object-contain"
        />
      </div>
      <div className="absolute inset-0 hidden md:flex justify-center items-center z-20 pointer-events-none">
        <Image
          src="/images/effects/pattern.webp"
          alt="blur-effect"
          width={1000}
          height={1000}
          className="object-contain"
        />
      </div>
      <div className="max-w-7xl space-y-4 lg:space-y-0 mx-auto relative z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center mx-auto gap-2 mb-6 p-3 rounded-full w-44 justify-center border border-brand-blue"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue" />
          <span className="text-sm font-body text-[#3B82F6] tracking-widest">
            {t("label")}
          </span>
        </motion.div>
        {/* Center headline — mobile: before cards, desktop: between rows via order */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-16 max-w-sm mx-auto text-center md:hidden"
        >
          <h2 className="font-display text-lg text-white leading-[1.1]">
            {t("centerHeadline")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 max-w-7xl gap-4 md:gap-64 p-0 lg:p-5 mx-auto">
          {reasonKeys.slice(0, 2).map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
              className="bg-[#060A1A] border border-brand-indigo rounded-xl px-5 py-10"
            >
              <h3 className="font-display font-semibold text-xl text-white mb-2">
                {t(`reasons.${key}.title`)}
              </h3>
              <p className="font-body text-sm text-white leading-relaxed">
                {t(`reasons.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center headline desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-16 max-w-sm mx-auto text-center hidden md:block"
        >
          <h2 className="font-display md:text-4xl text-white leading-[1.1]">
            {t("centerHeadline")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 max-w-7xl gap-4 md:gap-64 p-0 lg:p-5 mx-auto">
          {reasonKeys.slice(2).map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
              className="bg-[#060A1A] border border-brand-indigo rounded-xl px-5 py-10"
            >
              <h3 className="font-display font-semibold text-xl text-white mb-2">
                {t(`reasons.${key}.title`)}
              </h3>
              <p className="font-body text-sm text-white leading-relaxed">
                {t(`reasons.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
