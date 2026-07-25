import { Company } from "../types/Company";

export const company: Company = {
  name: "SEASPIRE PHUKET",

  tagline:
    "The Freshness From Thailand Phuket",

  description:
    "Seaspire provides high quality seafood solutions with integrated processing, supply chain management, and international distribution capabilities.",

  email: "info@seaspirephuket.com",

  locations: [
    {
      id: "phuket",
      name: "Phuket Factory",
      phone: "+66-76-222977",
      address:
        "64/215 Moo 7, T. Rasada, Mueang Phuket, Phuket 83000, Thailand",
    },
    {
      id: "bangkok",
      name: "Bangkok Sales Office",
      phone: "+66-950355577",
      address:
        "140/34 Moo 12 T.Rachathewa, Bangplee, Samutprakarn.",
    },
  ],

  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.6737356742947!2d98.41201295646162!3d7.875893461795078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3050322400000001%3A0xb149a3541d533f71!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4i-C4teC4quC5hOC4niDguKDguLnguYDguIHguYfguJUg4LiI4Liz4LiB4Lix4LiUICjguKrguLPguJnguLHguIHguIfguLLguJnguYPguKvguI3guYgp!5e0!3m2!1szh-TW!2stw!4v1784542497448!5m2!1szh-TW!2stw",
  },

  social: {
    linkedin: "",
    facebook: "",
  },

  business: {
    industry:
      "Seafood Processing & International Trading",

    location:
      "Thailand",
  },

  seo: {
    title:
      "Seaspire Phuket | Premium Seafood Solutions From Thailand",

    description:
      "Seaspire Phuket delivers premium seafood processing and international supply chain solutions from Thailand.",
  },
};