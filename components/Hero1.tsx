"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronsDown } from "lucide-react";

export default function Hero1() {
  const t = useTranslations("hero");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background is managed by HeroVideoBackground */}
      <div className="relative z-10 text-center px-6 space-y-10">
        <div className="w-[350px] md:w-full mx-auto">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-4xl md:text-7xl leading-[1.05] text-white tracking-tight"
          >
            {t("headline")}
          </motion.h1>
        </div>

        <div className="w-[350px] md:w-full md:max-w-2xl mx-auto">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-white/90 text-base md:text-lg mx-auto leading-relaxed"
          >
            {t("subheadline")}
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 font-display font-semibold text-sm text-white bg-[#02030A4D] border border-white rounded-xl"
          >
            {t("cta")}
          </a>
        </motion.div>

        <div className="flex justify-center animate-bounce">
          <ChevronsDown size={50} />
        </div>
      </div>
    </section>
  );
}
