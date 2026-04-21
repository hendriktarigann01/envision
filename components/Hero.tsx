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
      </div>
      <div className="absolute left-1/4 md:left-1/2 top-40 md:top-10 z-20 pointer-events-none flex items-start justify-center -translate-x-[60%] md:-translate-x-1/2">
        <div className="relative w-[450px] h-[250px] md:w-[1000px] md:h-[400px] scale-[2.0] md:scale-100">
          <Image
            src="/images/hero/whale.webp"
            alt="Whale"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="relative z-10 text-center px-6 mt-0 md:mt-24">
        <div className="w-[350px] md:w-full md:max-w-3xl mx-auto">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-3xl md:text-6xl leading-[1.05] text-white mb-6"
          >
            {t("headline")}
          </motion.h1>
        </div>

        <div className="w-[350px] md:w-full md:max-w-2xl mx-auto">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-white text-base md:text-lg mx-auto mb-6 md:mb-10 leading-relaxed"
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
            className="inline-flex items-center px-7 py-3 font-display font-semibold text-sm text-white bg-[#313036CC]/30 backdrop-blur-sm border border-[#7F7F7F] rounded-xl"
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
