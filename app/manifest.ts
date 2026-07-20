import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,

    short_name: "SEASPIRE",

    description: siteConfig.description,

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#0F172A",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}