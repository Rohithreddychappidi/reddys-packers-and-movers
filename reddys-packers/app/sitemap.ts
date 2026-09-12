import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { allCities, slugify } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${business.domain}`;

  const cityRoutes: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${base}/packers-and-movers-in/${slugify(city)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cityRoutes,
  ];
}
