"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const links = [
    { label: t("links.about"), href: "#about" },
    { label: t("links.platform"), href: "#platform" },
    { label: t("links.ourProcess"), href: "#process" },
  ];

  return (
    <footer className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile */}
        <div className="flex flex-col items-center gap-8 md:hidden">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/logos/logo.webp"
              alt="Envision"
              width={110}
              height={30}
              className="h-7 w-auto object-contain"
            />
            <p className="font-body text-sm text-white leading-relaxed text-center">
              {t("tagline")}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-6 text-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-white hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-body text-white hover:text-white transition-colors"
            >
              <Image
                src="/images/icons/Instagram.webp"
                alt="Instagram"
                width={20}
                height={20}
                className="transition-opacity"
              />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-body text-white hover:text-white transition-colors"
            >
              <Image
                src="/images/icons/tiktok.webp"
                alt="TikTok"
                width={18}
                height={18}
                className="transition-opacity"
              />
              <span>Tiktok</span>
            </a>
          </div>

          <p className="font-body text-sm text-white text-center">
            {t("copyright")}
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-row justify-between gap-10">
          <div className="max-w-xs">
            <Image
              src="/images/logos/logo.webp"
              alt="Envision"
              width={110}
              height={30}
              className="h-7 w-auto object-contain mb-3"
            />
            <p className="font-body text-xs text-white leading-relaxed">
              {t("tagline")}
            </p>
            <p className="font-body text-xs text-white mt-4">
              {t("copyright")}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <nav className="flex flex-wrap gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-xs text-white hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-end justify-end gap-4">
              <a
                href="#"
                className="flex items-center gap-1.5 text-xs font-body text-white hover:text-white transition-colors"
              >
                <Image
                  src="/images/icons/instagram.webp"
                  alt="Instagram"
                  width={16}
                  height={16}
                  className="transition-opacity"
                />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-1.5 text-xs font-body text-white hover:text-white transition-colors"
              >
                <Image
                  src="/images/icons/tiktok.webp"
                  alt="TikTok"
                  width={14}
                  height={14}
                  className="transition-opacity"
                />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
