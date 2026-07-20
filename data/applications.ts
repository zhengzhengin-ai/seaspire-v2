import { Application } from "../types/Application";


export const applications: Application[] = [
  {
    id: "food-service",

    title: "Food Service Solutions",

    description:
      "Providing reliable seafood solutions for restaurants, hotels, and food service businesses worldwide.",

    industries: [
      "Restaurants",
      "Hotels",
      "Catering",
    ],

    benefits: [
      "Stable supply capability",
      "Consistent product quality",
      "International logistics support",
    ],
  },


  {
    id: "retail-distribution",

    title: "Retail & Distribution",

    description:
      "Supporting retail partners with dependable seafood products and flexible supply chain solutions.",

    industries: [
      "Retailers",
      "Supermarkets",
      "Distributors",
    ],

    benefits: [
      "Supply chain visibility",
      "Quality assurance",
      "Global export experience",
    ],
  },


  {
    id: "industrial-food",

    title: "Food Manufacturing",

    description:
      "Delivering seafood ingredients and solutions for food manufacturers requiring reliable sourcing.",

    industries: [
      "Food Manufacturers",
      "Processors",
    ],

    benefits: [
      "Production consistency",
      "Quality control",
      "Long-term supply partnership",
    ],
  },
];