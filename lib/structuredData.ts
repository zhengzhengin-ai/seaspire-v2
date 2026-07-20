import { company } from "@/data";
import { siteConfig } from "@/constants";


export function organizationSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: company.name,

    url: siteConfig.url,

    logo:
      `${siteConfig.url}/SEASPIRE-PHUKET-Logo-Color-300opx.webp`,

    description: company.description,

    email: company.contact.email,

    telephone: company.contact.phone,

    address: {
      "@type": "PostalAddress",

      streetAddress: company.address.full,
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

    telephone: company.contact.phone,

    email: company.contact.email,

    address: {
      "@type": "PostalAddress",

      streetAddress: company.address.full,

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