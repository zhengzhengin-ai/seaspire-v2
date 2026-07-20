export interface Product {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  forms: string[];
}

export const products: Product[] = [
  {
    id: "fresh-seafood",
    name: "Fresh Seafood",
    image: "/images/products/fresh.webp",
    shortDescription:
      "Premium fresh seafood supplied directly from trusted fishing sources.",
    forms: [
      "Whole Fish",
      "Fillet",
      "Steak",
    ],
  },

  {
    id: "frozen-seafood",
    name: "Frozen Seafood",
    image: "/images/products/frozen.webp",
    shortDescription:
      "Professionally processed frozen seafood with reliable quality.",
    forms: [
      "Whole Fish",
      "Fillet",
      "HGT",
    ],
  },

  {
    id: "processed-seafood",
    name: "Processed Seafood",
    image: "/images/products/processed.webp",
    shortDescription:
      "Customized processing and packing based on customer requirements.",
    forms: [
      "Portion",
      "Vacuum Pack",
      "Retail Pack",
    ],
  },

  {
    id: "thai-seafood",
    name: "Thai Seafood",
    image: "/images/products/thai.webp",
    shortDescription:
      "Selected premium seafood products from Thailand.",
    forms: [
      "Fresh",
      "Frozen",
      "Customized",
    ],
  },

  {
    id: "frozen-tuna",
    name: "Frozen Tuna",
    image: "/images/frozen-tuna.webp",
    shortDescription:
      "Premium tuna processed under strict international food safety standards.",
    forms: [
      "Whole Fish",
      "Fillet",
      "HGT",
    ],
  },

  {
    id: "salmon",
    name: "Salmon",
    image: "/images/salmon.webp",
    shortDescription:
      "Selected premium salmon with reliable cold-chain management.",
    forms: [
      "Whole Fish",
      "Fillet",
      "HGT",
    ],
  },

  {
    id: "bluefin-tuna",
    name: "Bluefin Tuna",
    image: "/images/bluefin-tuna.webp",
    shortDescription:
      "High-grade Bluefin Tuna for premium international markets.",
    forms: [
      "Whole Fish",
      "Fillet",
      "HGT",
    ],
  },

  {
    id: "hamachi",
    name: "HAMACHI",
    image: "/images/hamachi.webp",
    shortDescription:
      "Premium Hamachi processed according to customer specifications.",
    forms: [
      "Whole Fish",
      "Fillet",
      "HGT",
    ],
  },

  {
    id: "softshell-cuttlefish",
    name: "Softshell Cuttlefish",
    image: "/images/softshell-cuttlefish.webp",
    shortDescription:
      "Carefully selected softshell cuttlefish with stable year-round supply.",
    forms: [
      "Whole",
      "Cleaned",
      "Frozen",
    ],
  },
];