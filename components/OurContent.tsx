"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const tabs = ["nature", "abstract", "ocean"] as const;
type Tab = (typeof tabs)[number];

const tabVideos: Record<Tab, string> = {
  nature: "/images/our-content/nature.webm",
  abstract: "/images/our-content/abstract.webm",
  ocean: "/images/our-content/ocean.webm",
};

export default function OurContent() {
  const t = useTranslations("ourContent");
  const [activeTab, setActiveTab] = useState<Tab>("nature");

  return (
    <section className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl relative mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-medium text-3xl md:text-5xl text-white tracking-tight"
          >
            {t("headline")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-white/60 text-sm md:text-base max-w-xl md:text-right leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} className="absolute inset-0">
                <video
                  src={tabVideos[activeTab]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full object-center scale-[101%]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 flex justify-center px-4">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-fit p-1.5 rounded-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-full font-body text-sm font-normal tracking-wide transition-all duration-300 ${
                      isActive
                        ? "border border-white bg-white/10 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        : "border border-white/10 hover:border-white/30 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white/80 hover:text-white"
                    }`}
                  >
                    {t(`tabs.${tab}`)}
                  </button>
                );
              })}

              <a
                href="/our-content"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/15 hover:bg-white/30 hover:border-white/30 text-white font-body text-sm font-medium transition-all duration-300"
              >
                <span>{t("tabs.browse")}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
