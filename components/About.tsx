import Image from "next/image";
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


      {/* ABOUT SEASPIRE */}


      <div className={styles.aboutContent}>


        <p className={styles.sectionTag}>
          ABOUT SEASPIRE
        </p>


        <h2>
          Trusted Seafood Partner
        </h2>


        <p>
          Seaspire Phuket is a premium seafood supplier specializing in
          fresh and frozen seafood products for customers worldwide.
        </p>


        <p>
          Through our affiliated long-line fishing fleet and experienced
          processing facilities, we deliver reliable quality, food safety
          and stable supply to importers, distributors and food service
          partners.
        </p>


      </div>




      {/* WHY US */}



      <div className={styles.why}>


        <h2>
          WHY US
        </h2>


        <h3>
          — Consistency is the Key —
        </h3>



        <p className={styles.intro}>
          Seaspire provides fresh and premium seafood products to global
          customers with sustained and reliable supply. Our commitment to
          quality, safety and consistency ensures long-term trust with our
          partners worldwide.
        </p>



        <Image
          src="/images/why-us.webp"
          alt="Seaspire Seafood"
          width={1200}
          height={700}
          className={styles.whyImage}
        />



        <p className={styles.promise}>
          3 KEYS WE PROMISED
        </p>



        <p className={styles.keys}>
          — Legality / Food Safety / Consistency —
        </p>




        <div className={styles.cards}>


          {reasons.map((reason, index) => (


            <div
              key={reason.title}
              className={styles.card}
            >


              <div className={styles.cardNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>



              <h4>
                {reason.title}
              </h4>



              <p>
                {reason.description}
              </p>



            </div>


          ))}



        </div>


      </div>


    </section>
  );
}