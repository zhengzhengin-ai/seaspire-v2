import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "../../styles/AboutPage.module.css";

export default function AboutPage() {
  return (
   <>

      <Navbar />

      <main>

      {/* HERO */}

      <section className={styles.hero}>

        <div className={styles.overlay}></div>

        <div className={styles.content}>

          <p className={styles.subtitle}>
            ABOUT US
          </p>

          <h1>
            ABOUT
            <br />
            SEASPIRE PHUKET
          </h1>

          <p className={styles.description}>
            Premium Seafood Supplier from Phuket, Thailand
          </p>

        </div>

      </section>

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

        <div className={styles.heading}>

          <h2>
            OUR PHILOSOPHY
          </h2>

        </div>

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
              Europe, Japan, Thailand and Singapore with stable supply.
            </p>

          </div>

        </div>

      </section>

      {/* Part 1/3 End */}
            {/* STRENGTHS */}

      <section className={styles.strengths}>

        <div className={styles.heading}>

          <h2>
            OUR STRENGTHS
          </h2>

          <p className={styles.subHeading}>
            — Why Global Customers Choose Seaspire Phuket —
          </p>

        </div>

        <div className={styles.strengthGrid}>

          <div className={styles.strengthCard}>

            <h3>40+</h3>

            <p>
              Longline Fishing Vessels
            </p>

          </div>

          <div className={styles.strengthCard}>

            <h3>Premium</h3>

            <p>
              Quality Assurance
            </p>

          </div>

          <div className={styles.strengthCard}>

            <h3>Reliable</h3>

            <p>
              Stable Supply Chain
            </p>

          </div>

          <div className={styles.strengthCard}>

            <h3>Global</h3>

            <p>
              Export Network
            </p>

          </div>

        </div>

        <div className={styles.companyBullet}>

          <ul>

            <li>We operate vessel fleets.</li>

            <li>We process our own catch.</li>

            <li>We know fishes.</li>

          </ul>

        </div>

        <div className={styles.companyText}>

          <p>
            Seaspire is a sophisticated seafood supplier. We operate vessel
            fleet and manufacture our own catch. Our main products include
            fresh and frozen seafood covering deep sea, longline, trawler
            fishes and aquaculture products.
          </p>

          <p>
            Our products are processed according to customers’
            requirements. Our success is built on our ability to offer
            quality seafood products at competitive prices with a
            customer-centric approach where products are tailored to meet
            every client's needs.
          </p>

          <p>
            We are a reliable partner and are committed to supplying
            premium seafood products with stable quality, competitive
            pricing and professional service to customers worldwide.
          </p>

        </div>

      </section>

      {/* PRODUCTION & STORAGE */}

      <section className={styles.production}>

        <div className={styles.heading}>

          <h2>
            OUR PRODUCTION & STORAGE
          </h2>

          <p className={styles.subHeading}>
            — Reliable Processing & Cold Chain Management —
          </p>

        </div>

        <div className={styles.productionImages}>

          <img
            src="/images/production.webp"
            alt="Production Facility"
          />

          <img
            src="/images/storage.webp"
            alt="Cold Storage Facility"
          />

        </div>

        <div className={styles.facilityGrid}>

          <div className={styles.facilityCard}>

            <h3>Cold Storage</h3>

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
              Currently, Seaspire Phuket operates four chilled storage
              rooms for raw materials (12 metric tons),
              work-in-process (6 metric tons),
              finished products (10 metric tons),
              and fresh salmon (6 metric tons),
              ensuring freshness throughout the processing chain.
            </p>

          </div>

          <div className={styles.facilityCard}>

            <h3>
              Blast Freezer
            </h3>

            <p>
              Our blast freezer reaches temperatures of
              -45°C with a freezing capacity of
              12 metric tons per day,
              preserving seafood freshness immediately after processing.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className={styles.cta}>

        <div className={styles.ctaContainer}>

          <p className={styles.sectionTag}>
            LET'S WORK TOGETHER
          </p>

          <h2>
            YOUR TRUSTED
            <br />
            SEAFOOD PARTNER
          </h2>

          <p>
            Seaspire Phuket is committed to delivering premium seafood
            with reliable quality, stable supply and professional
            service for importers, distributors and food service
            customers around the world.
          </p>

          <Link
            href="/contact"
            className={styles.ctaButton}
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>

    </>
  );
}