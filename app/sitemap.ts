import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/process", "/experience", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}`, lastModified: new Date() })),
  ];
}
