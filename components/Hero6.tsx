"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function Hero6() {
  const locale = useLocale();

  const title =
    locale === "id" ? "Architecting\nExperience" : "Architecting\nExperience";

  const description =
    locale === "id"
      ? "Dalam era di mana audiens mengharapkan lebih dari sekadar menonton, Envision mendefinisikan ulang lingkungan. Kami mengubah ruang menjadi pengalaman imersif melalui teknologi tampilan inovatif, desain konten yang matang, dan integrasi mulus yang memikat audiens pada tingkat yang lebih dalam."
      : "In an era where audiences expect more than just watching, Envision redefines environments. We transform spaces into immersive experiences through innovative display technology, thoughtful content design, and seamless integration that engage audiences on a deeper level.";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 md:px-16 lg:px-24">
      {/* Invisible image tag for Google asset indexing */}
      <div className="absolute opacity-0 pointer-events-none w-1 h-1 overflow-hidden">
        <Image
          src="/images/hero/6.webp"
          alt="Hero 6 background"
          width={10}
          height={10}
        />
      </div>

      {/* Fixed background image: stays static, text scrolls over it */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/6.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-4xl md:text-7xl leading-[1.05] text-white tracking-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl md:justify-self-end"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
