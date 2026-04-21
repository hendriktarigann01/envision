"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const stepKeys = [
  "discovery",
  "spatial",
  "technology",
  "installation",
  "support",
] as const;

const stepIcons: Record<string, string> = {
  discovery: "/images/icons/check.webp",
  spatial: "/images/icons/layout.webp",
  technology: "/images/icons/code.webp",
  installation: "/images/icons/construction.webp",
  support: "/images/icons/handshake.webp",
};

export default function Process() {
  const t = useTranslations("process");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-24 lg:py-32 px-6" ref={ref}>
      <div className="absolute -top-[5%] lg:top-0 -right-[40%] lg:right-0 z-0 pointer-events-none">
        <Image
          src="/images/effects/blur.webp"
          alt="blur-effect"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl relative space-y-6 mx-auto z-50">
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

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl leading-[1.1] text-white max-w-md"
        >
          {t("headline")}
        </motion.h2>

        {/* ── Row 1: mobile 2-col / desktop 3-col ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stepKeys.slice(0, 3).map((key, i) => (
            <StepCard
              key={key}
              stepKey={key}
              index={i}
              inView={inView}
              t={t}
              // Logic ini memastikan item ke-3 mengambil baris penuh di mobile (col-span-2)
              className={i === 2 ? "col-span-2 md:col-span-1" : ""}
            />
          ))}
        </div>

        {/* ── Row 2: mobile 2-col / desktop 2-col ── */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 rounded-sm overflow-hidden">
          {stepKeys.slice(3).map((key, i) => (
            <StepCard
              key={key}
              stepKey={key}
              index={i + 3}
              inView={inView}
              t={t}
              // Jika jumlah item di Row 2 ganjil, item terakhir akan memenuhi lebar mobile
              className={
                i === stepKeys.slice(3).length - 1 &&
                stepKeys.slice(3).length % 2 !== 0
                  ? "col-span-2 md:col-span-1"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  stepKey,
  index,
  inView,
  t,
  className = "",
}: {
  stepKey: string;
  index: number;
  inView: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      className={`group bg-[#060A1A] px-4 py-8 border border-brand-indigo rounded-xl transition-colors duration-300 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/4 transition-all duration-500 pointer-events-none" />
      <h3 className="font-display font-semibold text-sm md:text-base text-white mb-2">
        {t(`steps.${stepKey}.title`)}
      </h3>
      <p className="font-body text-xs md:text-sm min-h-[100px] md:min-h-10 text-white leading-relaxed">
        {t(`steps.${stepKey}.description`)}
      </p>
      <div className="w-full h-28 md:h-32 flex justify-center items-center relative mt-4">
        <div className="absolute w-20 h-20 bg-[#223DAA] rounded-full blur-3xl pointer-events-none" />
        <Image
          src={stepIcons[stepKey]}
          alt={stepKey}
          width={80}
          height={80}
          className="object-contain relative"
        />
      </div>
    </motion.div>
  );
}
