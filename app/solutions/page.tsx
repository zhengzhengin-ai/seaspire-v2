import type { Metadata } from "next";
import Image from "next/image";

import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";
import CapabilityIcon from "@/components/CapabilityIcon";

import styles from "@/styles/SolutionsPage.module.css";

const services = [
  {
    title: "Importers",
    image: "/images/solutions/importers.webp",
  },
  {
    title: "Food Services",
    image: "/images/solutions/food-service.webp",
  },
  {
    title: "Restaurants",
    image: "/images/solutions/restaurant.webp",
  },
  {
    title: "OEM Service",
    image: "/images/solutions/oem.webp",
  },
  {
    title: "Cold Storage",
    image: "/images/solutions/cold-storage.webp",
  },
];

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

export const metadata: Metadata = {
  title: "Solutions",

  description:
    "Seafood sourcing, OEM processing and cold chain solutions for importers, distributors and food service partners worldwide.",

  keywords: [
    "Seafood Solutions",
    "Seafood Supplier",
    "OEM Seafood",
    "Cold Storage",
    "Restaurant Seafood",
    "Importers",
    "Food Service",
    "Seafood Export Thailand",
  ],
};

export default function SolutionsPage() {
  return (
    <main>

      <PageHero
        subtitle="SOLUTIONS"
        title={"SEAFOOD SOLUTIONS\nFOR YOUR BUSINESS"}
        description="Supporting importers, food service operators and global partners with reliable seafood supply solutions."
        image="/images/hero/solutions-hero.webp"
      />

      <section className={styles.section}>

        <div className={styles.container}>

          <SectionHeading
            tag="WHO WE SERVE"
            title="Tailored Around Your Needs"
          />

          <div className={styles.imageGrid}>

            {services.map((item) => (

              <article
                key={item.title}
                className={styles.imageCard}
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 33vw, 240px"
                  className={styles.image}
                />

                <h3>{item.title}</h3>

              </article>

            ))}

          </div>

        </div>

      </section>

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

      <CTA
        title={"SOLUTIONS DESIGNED\nFOR YOUR BUSINESS"}
        description="From sourcing and processing to cold chain logistics, Seaspire delivers reliable seafood solutions tailored to your business."
      />

    </main>
  );
}