import Image from "next/image";

import SectionHeading from "./SectionHeading";

import styles from "../styles/About.module.css";

const reasons = [
  {
    title: "Legality",
    description:
      "Fully compliant with international food regulations and supported by transparent sourcing documentation.",
  },
  {
    title: "Food Safety",
    description:
      "HACCP & GMP based processing with complete product traceability and strict quality control.",
  },
  {
    title: "Consistency",
    description:
      "Reliable premium seafood supply for global partners through our integrated fishing fleet and processing network.",
  },
];

export default function About() {
  return (
    <section className={styles.about}>

      {/* ABOUT */}

      <div className={styles.aboutContent}>

        <SectionHeading
          tag="ABOUT SEASPIRE"
          title="Trusted Seafood Partner"
        />

        <p className={styles.aboutText}>
          Seaspire Phuket is a premium seafood supplier specializing in
          fresh and frozen seafood products for customers worldwide.
        </p>

        <p className={styles.aboutText}>
          Through our affiliated long-line fishing fleet and experienced
          processing facilities, we deliver reliable quality, food safety
          and stable supply to importers, distributors and food service
          partners.
        </p>

      </div>



      {/* WHY US */}

      <div className={styles.why}>

        <SectionHeading
          tag="WHY US"
          title="Consistency is the Key"
        />

        <p className={styles.intro}>
          Seaspire provides fresh and premium seafood products to global
          customers with sustained and reliable supply. Our commitment to
          quality, safety and consistency ensures long-term trust with our
          partners worldwide.
        </p>

        <Image
          src="/images/about/why-us.webp"
          alt="Seaspire Seafood"
          width={1200}
          height={700}
          sizes="(max-width:768px) 100vw, 1100px"
          className={styles.whyImage}
        />

        <SectionHeading
          tag="3 KEYS WE PROMISED"
          title="Legality • Food Safety • Consistency"
        />

        <div className={styles.cards}>

          {reasons.map((reason, index) => (

            <div
              key={reason.title}
              className={styles.card}
            >

              <div className={styles.cardNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}