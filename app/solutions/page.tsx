import type { Metadata } from "next";
import Image from "next/image";

import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";
import CapabilityIcon from "@/components/CapabilityIcon";

import styles from "@/styles/SolutionsPage.module.css";


/*==============================
  WHO WE SERVE
==============================*/

const services = [
  {
    id: "importer",
    number: "01",
    title: "Importers",
    image: "/images/solutions/importers.webp",
  },
  {
    id: "food-service",
    number: "02",
    title: "Food Services",
    image: "/images/solutions/food-service.webp",
  },
  {
    id: "restaurant",
    number: "03",
    title: "Restaurants",
    image: "/images/solutions/restaurant.webp",
  },
  {
    id: "oem",
    number: "04",
    title: "OEM Service",
    image: "/images/solutions/oem.webp",
  },
  {
    id: "cold-storage",
    number: "05",
    title: "Cold Storage",
    image: "/images/solutions/cold-storage.webp",
  },
];


/*==============================
  BUSINESS SOLUTIONS
==============================*/

const solutionDetails = [
  {
    id: "importer",
    number: "01",
    title: "Importer Solution",

    description:
      "Helping international importers source premium products from Thailand through trusted local sourcing, processing and export coordination.",

    serviceTitle: "Core Services",

    services: [
      "Thailand Product Sourcing",
      "Local Supplier & Product Inspection",
      "Seafood Processing & Customization",
      "Export & Shipment Coordination",
    ],

    productTitle: "Representative Product Lines",

    products: [
      "Frozen Tuna",
      "Thai Seafood & Aquaculture Products",
      "Thai Agricultural Products",
    ],
  },

  {
    id: "food-service",
    number: "02",
    title: "Food Service Solution",

    description:
      "Reliable seafood supply for Food Service Operators, Catering Providers and Supermarkets with flexible product specifications.",

    serviceTitle: "Core Services",

    services: [
      "Consistent Seafood Supply",
      "Portion & Product Specification",
      "Fresh & Frozen Seafood",
      "Flexible Ordering",
    ],

    productTitle: "Representative Product Lines",

    products: [
      "Tuna",
      "Saba Mackerel",
      "Salmon",
      "Tako",
      "Soft Shell Cuttlefish",
    ],
  },

  {
    id: "restaurant",
    number: "03",
    title: "Restaurant Solution",

    description:
      "Premium seafood tailored for professional kitchens, including Restaurants, Omakase Establishments, Hotels and Cafés.",

    serviceTitle: "Core Services",

    services: [
      "Premium Fresh & Frozen Seafood",
      "Customized Product Specifications",
      "Consistent Quality",
      "Reliable Supply",
    ],

    productTitle: "Representative Product Lines",

    products: [
      "Sashimi Tuna",
      "Sashimi Salmon",
      "Shime Saba",
      "Cooked Tako",
      "Hamachi",
      "Fresh Seafood from Japan",
    ],
  },

  {
    id: "oem",
    number: "04",
    title: "OEM Processing Solution",

    description:
      "Custom seafood processing services tailored to customer specifications, supporting Seafood Brands, Importers and Wholesalers with flexible production and private label solutions.",

    serviceTitle: "Core Services",

    services: [
      "Custom Seafood Processing",
      "Customer-Specific Specifications",
      "Private Label Packaging",
      "Quality Assurance",
    ],

    productTitle: "Representative Processing Services",

    products: [
      "Custom Cutting",
      "Portion Control",
      "Vacuum Packaging",
      "Private Labelling",
    ],
  },

  {
    id: "cold-storage",
    number: "05",
    title: "Cold Storage Solution",

    description:
      "Flexible chilled and frozen storage solutions supporting Importers, Distributors and Vessel Owners with secure storage facilities and professional cargo handling services.",

    serviceTitle: "Core Services",

    services: [
      "Chilled & Frozen Storage Rental",
      "Inbound & Outbound Cargo Handling",
      "Temperature-Controlled Storage",
      "Flexible Storage Solutions",
    ],

    productTitle: "Representative Warehouse Services",

    products: [
      "Frozen / Chilled Storage",
      "Cargo Receiving / Dispatch",
      "Short-term / Long-term Storage",
    ],
  },
];


/*==============================
  OUR CAPABILITIES
==============================*/

const capabilities = [
  {
    icon: "sourcing" as const,
    title: "Seafood Sourcing",
    description:
      "Stable raw material sourcing through our integrated fishing fleet.",
  },
  {
    icon: "processing" as const,
    title: "Processing Customization",
    description:
      "Flexible cutting, grading and packaging according to customer requirements.",
  },
  {
    icon: "quality" as const,
    title: "Quality Control",
    description:
      "Strict food safety management with HACCP, GMP and complete traceability.",
  },
  {
    icon: "supply" as const,
    title: "Supply Chain Management",
    description:
      "Reliable cold chain logistics supporting global seafood distribution.",
  },
];


/*==============================
  SEO METADATA
==============================*/

export const metadata: Metadata = {
  title: "Solutions",

  description:
    "Seafood sourcing, OEM processing and cold storage solutions for importers, food service operators, restaurants and business partners worldwide.",

  keywords: [
    "Seafood Solutions",
    "Seafood Supplier",
    "Seafood Export Thailand",
    "Seafood Sourcing Thailand",
    "Frozen Tuna Supplier",
    "Thai Seafood Supplier",
    "OEM Seafood Processing",
    "Food Service Seafood",
    "Restaurant Seafood Supplier",
    "Cold Storage Thailand",
  ],
};


/*==============================
  PAGE
==============================*/

export default function SolutionsPage() {
  return (
    <main>

      {/*==============================
        HERO
      ==============================*/}

      <PageHero
        subtitle="SOLUTIONS"
        title={"SEAFOOD SOLUTIONS\nFOR YOUR BUSINESS"}
        description="Supporting importers, food service operators and global partners with reliable seafood supply solutions."
        image="/images/hero/solutions-hero.webp"
      />


      {/*==============================
        WHO WE SERVE
      ==============================*/}

      <section className={styles.section}>

        <div className={styles.container}>

          <SectionHeading
            tag="WHO WE SERVE"
            title="Tailored Around Your Needs"
          />

          <div className={styles.imageGrid}>

            {services.map((item) => (

              <a
                key={item.id}
                href={`#${item.id}`}
                className={styles.imageCard}
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 33vw, 240px"
                  className={styles.image}
                />

                <div className={styles.imageOverlay} />

                <span className={styles.cardNumber}>
                  {item.number}
                </span>

                <h3>{item.title}</h3>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/*==============================
        BUSINESS SOLUTIONS
      ==============================*/}

      <section className={styles.solutions}>

        <div className={styles.container}>

          <SectionHeading
            tag="BUSINESS SOLUTIONS"
            title="Solutions For Your Business"
          />


          <div className={styles.solutionList}>

            {solutionDetails.map((solution) => (

              <section
                key={solution.id}
                id={solution.id}
                className={styles.solutionSection}
              >

                <div className={styles.solutionNumber}>
                  {solution.number}
                </div>


                <h2 className={styles.solutionTitle}>
                  {solution.title}
                </h2>


                <p className={styles.solutionDescription}>
                  {solution.description}
                </p>


                <div className={styles.solutionDetails}>

                  <div className={styles.detailGroup}>

                    <h3>
                      {solution.serviceTitle}
                    </h3>

                    <ul>

                      {solution.services.map((item) => (

                        <li key={item}>
                          {item}
                        </li>

                      ))}

                    </ul>

                  </div>


                  <div className={styles.detailGroup}>

                    <h3>
                      {solution.productTitle}
                    </h3>

                    <ul>

                      {solution.products.map((item) => (

                        <li key={item}>
                          {item}
                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              </section>

            ))}

          </div>

        </div>

      </section>


      {/*==============================
        OUR CAPABILITIES
      ==============================*/}

      <section className={styles.capability}>

        <div className={styles.container}>

          <SectionHeading
            tag="OUR CAPABILITIES"
            title="From Sourcing To Supply"
          />

          <div className={styles.capabilityGrid}>

            {capabilities.map((item) => (

              <article
                key={item.title}
                className={styles.capabilityCard}
              >

                <CapabilityIcon
                  type={item.icon}
                />

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/*==============================
        CTA
      ==============================*/}

      <CTA
        title={"SOLUTIONS DESIGNED\nFOR YOUR BUSINESS"}
        description="From sourcing and processing to cold storage, Seaspire delivers reliable seafood solutions tailored to your business."
      />

    </main>
  );
}