"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 px-6 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/common/cta.webp"
          alt="CTA background"
          fill
          className="object-cover object-center md:object-contain"
          priority
        />
        <div className="absolute inset-0 bg-[#02030A]/10" />
      </div>

      <div className="max-w-[350px] lg:max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-4xl md:text-6xl leading-[1.1] text-white mb-6"
        >
          {t("headline")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-white/90 max-w-2xl text-sm md:text-base leading-relaxed mb-10 mx-auto"
        >
          {t("body")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="mailto:hello@envision.com"
            className="inline-flex items-center gap-2 px-8 py-3 font-display font-semibold text-sm text-white border border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl"
          >
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
