"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero5() {
  const t = useTranslations("about");

  return (
    <section className="relative h-screen flex items-end justify-start overflow-hidden px-6 md:px-24 pb-12 md:pb-20 bg-transparent">
      {/* Background is managed by HeroVideoBackground */}

      <div className="relative z-10 text-left max-w-2xl">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-3xl md:text-6xl text-white mb-6 leading-tight"
        >
          {t("pillars.endtoend.title")}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-white/80 text-sm md:text-base leading-relaxed"
        >
          {t("pillars.endtoend.description")}
        </motion.p>
      </div>
    </section>
  );
}
