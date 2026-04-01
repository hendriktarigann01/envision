"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { localeNames, localeFlags, type Locale } from "@/i18n/config";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: t("about"), href: "#about" },
    { label: t("products"), href: "#products" },
    { label: t("whyEnvision"), href: "#why" },
    { label: t("ourProcess"), href: "#process" },
  ];

  const locales = Object.keys(localeNames) as Locale[];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const switchLocale = (next: Locale) => {
    router.replace(pathname, { locale: next });
    setLangOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[99] transition-all duration-300 ${
          scrolled ? "bg-[#02030A]/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between max-w-7xl px-6 lg:px-0 h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/images/logos/logo.webp"
              alt="Envision"
              width={100}
              height={60}
              className="object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-body text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center w-20 gap-1.5 text-base font-body px-3 lg:px-0 py-1.5 text-white transition-colors"
              >
                <Image
                  src={localeFlags[locale]}
                  alt={locale}
                  width={18}
                  height={18}
                  className="rounded-full object-cover"
                />
                {locale.toUpperCase()}
                <ChevronDown size={13} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 w-28 rounded-sm border border-white/10 bg-[#0a0f1e] backdrop-blur-md overflow-hidden"
                  >
                    {locales.map((l) => (
                      <button
                        key={l}
                        onClick={() => switchLocale(l)}
                        className="flex items-center gap-2 w-full px-3 py-2 text-base font-body text-white hover:bg-white/5 transition-colors"
                      >
                        <Image
                          src={localeFlags[l]}
                          alt={l}
                          width={16}
                          height={16}
                          className="rounded-full object-cover"
                        />
                        {localeNames[l]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu — full screen dark overlay, same pattern as KMI */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#02030A] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {/* Nav links */}
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                className="text-2xl font-display font-bold text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="w-12 h-px bg-white/10"
            />

            {/* Language switcher */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="flex gap-3"
            >
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    switchLocale(l);
                    setMobileOpen(false);
                  }}
                  className={`flex items-center gap-2 text-base font-display font-semibold px-4 py-2 rounded-sm border transition-all duration-200 ${
                    locale === l
                      ? "bg-brand-blue text-white border-[#1843F5]"
                      : "border-white/15 text-white hover:border-[#1843F5]"
                  }`}
                >
                  <Image
                    src={localeFlags[l]}
                    alt={l}
                    width={16}
                    height={16}
                    className="rounded-full object-cover"
                  />
                  {l.toUpperCase()}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
