"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.webp"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#02030A]/50" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#02030A] to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="max-w-[300px] lg:max-w-3xl mx-auto">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-3xl md:text-6xl leading-[1.05] text-white mb-6"
          >
            {t("headline")}
          </motion.h1>
        </div>

        <div className="max-w-[300px] lg:max-w-4xl mx-auto">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-white text-base md:text-lg mx-auto mb-10 leading-relaxed"
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
            className="inline-flex items-center gap-2 px-7 py-3 font-display font-semibold text-sm text-white bg-brand-blue/20 hover:bg-brand-indigo transition-all duration-300 rounded-xl backdrop-blur-sm"
          >
            {t("cta")}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
