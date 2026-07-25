import type { Metadata } from "next";
import Image from "next/image";

import PageHero from "../../components/PageHero";
import CTA from "../../components/CTA";
import SectionHeading from "../../components/SectionHeading";
import styles from "../../styles/AboutPage.module.css";


export const metadata: Metadata = {

  title: "About",

  description:
    "Learn about Seaspire Phuket, a premium seafood supplier in Phuket, Thailand specializing in fishing, seafood processing, cold storage and global export solutions.",

  keywords: [

    "About Seaspire",

    "Seafood Supplier Thailand",

    "Seafood Supplier Phuket",

    "Seafood Processing",

    "Fishing Fleet",

    "Cold Storage",

    "Frozen Seafood",

    "Seafood Export",

    "OEM Seafood",

  ],

};


export default function AboutPage() {
  return (
    <main>

      {/* HERO */}

      <PageHero
        subtitle="ABOUT US"
        title={"ABOUT\nSEASPIRE PHUKET"}
        description="Premium Seafood Supplier from Phuket, Thailand"
        image="/images/hero/about-hero.webp"
      />


      {/* COMPANY PROFILE */}

      <section className={styles.profile}>

        <div className={styles.profileContainer}>

          <div className={styles.profileLeft}>

            <p className={styles.sectionTag}>
              COMPANY PROFILE
            </p>

            <h2>
              Since
              <br />
              2008
            </h2>

          </div>


          <div className={styles.profileRight}>

            <p>
              We supply a wide variety of fresh seafood and processed frozen
              seafood. Through our affiliated fleet of more than 40 long-line
              fishing vessels, we ensure continuous supply and stable quality
              of raw materials.
            </p>

            <p>
              Our commitment to the highest standards of processing and
              production has earned us a strong reputation in the renowned
              Japanese seafood market. We customize products according to
              customer requirements and deliver premium seafood solutions
              worldwide.
            </p>

          </div>

        </div>

      </section>



      {/* PHILOSOPHY */}

      <section className={styles.philosophy}>

        <SectionHeading
          tag="OUR PHILOSOPHY"
          title="Integrity • Food Safety • Consistency"
        />


        <div className={styles.philosophyGrid}>


          <div className={styles.philosophyCard}>

            <span className={styles.number}>
              01
            </span>

            <h3>
              Integrity
            </h3>

            <p>
              Seaspire products satisfy national and international food
              regulations including EU and FDA standards. All catches from
              our vessel fleet are registered and managed with transparent
              documentation support.
            </p>

          </div>



          <div className={styles.philosophyCard}>

            <span className={styles.number}>
              02
            </span>

            <h3>
              Food Safety
            </h3>

            <p>
              Products are processed and packed based on HACCP principles,
              Good Manufacturing Practices (GMP) and traceability systems.
              We are committed to delivering natural, safe and reliable
              seafood products.
            </p>

          </div>



          <div className={styles.philosophyCard}>

            <span className={styles.number}>
              03
            </span>

            <h3>
              Consistency
            </h3>

            <p>
              Seaspire supplies fresh and premium seafood products to
              restaurants, supermarkets and distributors across USA,
              Japan, Taiwan, Thailand and Philippines with stable supply.
            </p>

          </div>


        </div>

      </section>



      {/* STRENGTHS */}

      <section className={styles.strengths}>

        <SectionHeading
          tag="OUR STRENGTHS"
          title="Why Global Customers Choose Seaspire Phuket"
        />


        <div className={styles.strengthGrid}>


          <div className={styles.strengthCard}>
            <h3>
              40+
            </h3>
            <p>
              Longline Fishing Vessels
            </p>
          </div>


          <div className={styles.strengthCard}>
            <h3>
              Premium
            </h3>
            <p>
              Quality Assurance
            </p>
          </div>


          <div className={styles.strengthCard}>
            <h3>
              Reliable
            </h3>
            <p>
              Stable Supply Chain
            </p>
          </div>


          <div className={styles.strengthCard}>
            <h3>
              Global
            </h3>
            <p>
              Export Network
            </p>
          </div>


        </div>



        <div className={styles.companyBullet}>

          <p>
            <span>Integrated Fishing Fleet.</span>

            <span className={styles.dot}>•</span>

            <span>In-house Processing.</span>

            <span className={styles.dot}>•</span>

            <span>Reliable Supply.</span>
          </p>

        </div>



        <div className={styles.companyText}>

          <p>
            Seaspire is a sophisticated seafood supplier. We operate vessel
            fleet and manufacture our own catch. Our main products include
            fresh and frozen seafood covering deep sea, longline, trawler
            fishes and aquaculture products.
          </p>

          <p>
            Our products are processed according to customers' requirements.
            Our success is built on our ability to offer quality seafood
            products at competitive prices with a customer-centric approach.
          </p>

          <p>
            We are a reliable partner and are committed to supplying premium
            seafood products with stable quality, competitive pricing and
            professional service to customers worldwide.
          </p>

        </div>


      </section>




      {/* PRODUCTION & STORAGE */}


      <section className={styles.production}>


        <SectionHeading
          tag="OUR PRODUCTION & STORAGE"
          title="Reliable Processing & Cold Chain Management"
        />



        <div className={styles.productionImages}>


          <Image
            src="/images/production.webp"
            alt="Production Facility"
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
          />


          <Image
            src="/images/storage.webp"
            alt="Cold Storage Facility"
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
          />


        </div>



        <div className={styles.facilityGrid}>


          <div className={styles.facilityCard}>

            <h3>
              Cold Storage
            </h3>

            <p>
              Three cold rooms for finished products, raw materials and
              work-in-process storage. Temperature controlled below
              -20°C with total capacity of approximately 300 metric tons.
            </p>

          </div>



          <div className={styles.facilityCard}>

            <h3>
              Chilled Storage
            </h3>

            <p>
              Four chilled storage rooms for raw materials, work-in-process,
              finished products and fresh salmon, ensuring freshness
              throughout the processing chain.
            </p>

          </div>



          <div className={styles.facilityCard}>

            <h3>
              Blast Freezer
            </h3>

            <p>
              Our blast freezer reaches -45°C with a freezing capacity of
              12 metric tons per day, preserving seafood freshness
              immediately after processing.
            </p>

          </div>


        </div>


      </section>



      {/* CTA */}


      <CTA
        title={"BUILT ON QUALITY.\nDRIVEN BY TRUST."}
        description="Combining seafood expertise, responsible sourcing and professional processing to support long-term partnerships with customers worldwide."
      />


    </main>
  );
}