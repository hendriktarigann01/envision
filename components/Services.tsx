"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const slideKeys = [
  "visual-engine",
  "kinesthetic-core",
  "spatial-audio",
  "frictionless-interaction",
  "atmospheric-synthesizer",
] as const;

type SlideKey = (typeof slideKeys)[number];

const slideImages: Record<SlideKey, string> = {
  "visual-engine": "/images/common/visual-engine.webp",
  "kinesthetic-core": "/images/common/kinesthetic-core.webp",
  "spatial-audio": "/images/common/spatial-audio.webp",
  "frictionless-interaction": "/images/common/frictionless-interaction.webp",
  "atmospheric-synthesizer": "/images/common/atmospheric-synthesizer.webp",
};

const FEATURE_COUNT = 4;

export default function Services() {
  const t = useTranslations("services");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const openExpanded = () => {
    setMobileExpanded(true);
    document.body.style.overflow = "hidden";
  };

  const closeExpanded = () => {
    setMobileExpanded(false);
    document.body.style.overflow = "";
  };

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      closeExpanded();
    },
    [current],
  );

  const prev = () => goTo((current - 1 + slideKeys.length) % slideKeys.length);
  const next = () => goTo((current + 1) % slideKeys.length);

  const key = slideKeys[current];

  return (
    <section id="services" className="relative py-24 lg:py-32 px-6" ref={ref}>
      <div className="max-w-7xl relative mx-auto z-10">
        {/* DESKTOP slide card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:block relative rounded-2xl overflow-hidden border border-[#1E3A8A]"
          style={{ aspectRatio: "21/9" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? "8%" : "-8%", opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d > 0 ? "-8%" : "8%", opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slideImages[key]}
                alt={t(`slides.${key}.title`)}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-[#02030A]/10" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute inset-0 flex flex-col justify-between p-10"
            >
              <div className="flex justify-between gap-10">
                <h3 className="font-display font-bold text-4xl text-white max-w-xs leading-tight">
                  {t(`slides.${key}.title`)}
                </h3>
                <p className="font-body text-base text-white/80 max-w-sm leading-relaxed text-right">
                  {t(`slides.${key}.description`)}
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: FEATURE_COUNT }).map((_, fi) => (
                  <div
                    key={fi}
                    className="bg-[#313036]/30 backdrop-blur-sm rounded-xl p-4 border border-[#7F7F7F]"
                  >
                    <p className="font-body text-sm text-white leading-snug">
                      <span className="font-semibold">
                        {t(`slides.${key}.features.${fi}.label`)}
                      </span>
                      {", "}
                      {t(`slides.${key}.features.${fi}.detail`)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* MOBILE slide card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:hidden relative rounded-2xl overflow-hidden border border-[#1E3A8A]"
          style={{ minHeight: "500px" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`mob-bg-${current}`}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? "8%" : "-8%", opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d > 0 ? "-8%" : "8%", opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slideImages[key]}
                alt={t(`slides.${key}.title`)}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <h3 className="font-display font-bold text-2xl text-white leading-tight max-w-[75%]">
              {t(`slides.${key}.title`)}
            </h3>
            <div className="flex flex-col gap-4">
              <p className="font-body text-sm text-white/80 leading-relaxed max-w-[85%]">
                {t(`slides.${key}.description`)}
              </p>
              <button
                onClick={openExpanded}
                className="self-start px-5 py-2.5 rounded-xl border border-[#1E3A8A] bg-transparent text-white text-sm font-body hover:bg-[#1E3A8A]/20 transition-all duration-200"
              >
                {t("readMore")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-8 h-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-[#1E3A8A] bg-[#0a0f1e] flex items-center justify-center text-white hover:bg-[#1E3A8A]/20 transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2 px-5 py-5 h-full rounded-full border border-[#1E3A8A] bg-[#0a0f1e]/80 backdrop-blur-sm">
            {slideKeys.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? "32px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === current ? "#ffffff" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-[#1E3A8A] bg-[#0a0f1e] flex items-center justify-center text-white hover:bg-[#1E3A8A]/20 transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* MOBILE expanded popup */}
      <AnimatePresence>
        {mobileExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[999] bg-[#060A1A]/95 backdrop-blur-md flex flex-col justify-center p-6 overflow-hidden"
          >
            <div className="absolute -top-[35%] -left-1/2 pointer-events-none overflow-hidden">
              <Image
                src="/images/effects/blur.webp"
                alt=""
                width={1000}
                height={1000}
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-[35%] -right-1/2 pointer-events-none overflow-hidden">
              <Image
                src="/images/effects/blur.webp"
                alt=""
                width={1000}
                height={1000}
                className="object-contain"
              />
            </div>

            <div className="px-4 py-8 border border-[#1E3A8A] rounded-lg relative">
              <div className="flex items-start justify-between w-full mb-8">
                <h3 className="font-display font-bold text-2xl text-white mt-4 pr-4">
                  {t(`slides.${key}.title`)}
                </h3>
                <button
                  onClick={closeExpanded}
                  className="mt-4 w-11 h-11 flex-shrink-0 rounded-full border border-[#1E3A8A] bg-[#0a0f1e] flex items-center justify-center text-white hover:bg-[#1E3A8A]/30 transition-all duration-200"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {Array.from({ length: FEATURE_COUNT }).map((_, fi) => (
                  <motion.div
                    key={fi}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: fi * 0.07 }}
                    className="rounded-xl p-4 border border-[#1E3A8A]"
                  >
                    <p className="font-body text-sm text-white leading-snug">
                      <span className="font-semibold">
                        {t(`slides.${key}.features.${fi}.label`)}
                      </span>
                      {", "}
                      {t(`slides.${key}.features.${fi}.detail`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
