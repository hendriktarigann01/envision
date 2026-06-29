import { MetadataRoute } from "next";
import { ARTICLES } from "./[locale]/article/data";

const baseUrl = "https://envsn.asia";
const locales = ["en", "id"];
const routes = ["", "/our-content", "/article"];

export default function sitemap(): MetadataRoute.Sitemap {
  const result: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      result.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    });

    ARTICLES.forEach((article) => {
      result.push({
        url: `${baseUrl}/${locale}/article/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return result;
}
