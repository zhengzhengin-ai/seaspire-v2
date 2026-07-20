import { Product } from "../types/Product";


export const products: Product[] = [
  {
    id: "premium-seafood",

    name: "Premium Seafood Products",

    category: "Seafood Processing",

    description:
      "High quality seafood products processed with strict quality control and international food safety standards.",

    image:
      "/images/products/premium-seafood.webp",

    features: [
      "Quality controlled processing",
      "Cold chain management",
      "International export capability",
    ],

    applications: [
      "Food Service",
      "Retail",
      "Global Distribution",
    ],
  },

  {
    id: "frozen-seafood",

    name: "Frozen Seafood Solutions",

    category: "Frozen Seafood",

    description:
      "Reliable frozen seafood solutions supporting global customers with consistent supply and quality.",

    image:
      "/images/products/frozen-seafood.webp",

    features: [
      "Temperature controlled supply chain",
      "Stable production capability",
      "Global logistics support",
    ],

    applications: [
      "Wholesale",
      "Importers",
      "Food Manufacturers",
    ],
  },
];