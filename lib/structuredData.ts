import { company } from "@/data";
import { siteConfig } from "@/constants";

const primaryLocation = company.locations[0];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: company.name,

    url: siteConfig.url,

    logo:
      `${siteConfig.url}/SEASPIRE-PHUKET-Logo-Color-300opx.webp`,

    description: company.description,

    email: company.email,

    telephone: primaryLocation.phone,

    address: {
      "@type": "PostalAddress",

      streetAddress: primaryLocation.address,

      addressCountry: company.business.location,
    },

    sameAs: [
      company.social.linkedin,
      company.social.facebook,
    ].filter(Boolean),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name: company.name,

    image:
      `${siteConfig.url}/SEASPIRE-PHUKET-Logo-Color-300opx.webp`,

    url: siteConfig.url,

    description: company.description,

    telephone: primaryLocation.phone,

    email: company.email,

    address: {
      "@type": "PostalAddress",

      streetAddress: primaryLocation.address,

      addressCountry: company.business.location,
    },

    priceRange: "$$",

    areaServed: company.business.location,

    sameAs: [
      company.social.linkedin,
      company.social.facebook,
    ].filter(Boolean),
  };
}