import styles from "../../styles/AboutPage.module.css";

export default function AboutPage() {
  return (
    <main>

      {/* Hero Banner */}

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

      {/* Company Profile */}

      <section className={styles.profile}>

        <div className={styles.profileContainer}>

          <div className={styles.profileLeft}>

            <p className={styles.sectionTag}>
              COMPANY PROFILE
            </p>

            <h2>
              Since 2008
            </h2>

          </div>

          <div className={styles.profileRight}>

            <p>
              We are supply variety of fresh seafood and the processing of frozen seafood. Through our affiliation to fleets of more than 40 long-liner fishing vessels, we are guaranteed a continued supply and good quality of the raw materials needed. 
            </p>

            <p>
              Our commitment to the highest standard of processing and production has earned us a name within the renowned Japanese Fish market. We can customize the products to matching with our customer’s requirement and are guarantee the best quality seafood products of them.
            </p>

          </div>

        </div>

      </section>

      {/* Our Philosophy */}

      <section className={styles.philosophy}>

        <div className={styles.heading}>

          <p className={styles.sectionTag}>
            OUR PHILOSOPHY
          </p>

          <h2>
            Our Philosophy
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
              Seaspire’s products satisfy and fulfill national and international regulations of food and health for both the European Union (EU) and USA food and Drug Administration (FDA), all catches from vessel fleet are under registered and managed with transparent document supported.
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
              Seaspire’s products are processed and packed based on the principles of HACCP system, Good Manufacturing Practices (GMP) and MSDS. In our internal administration system, we carry out “Traceability” program and labeling by using software on portable devices, we also insist to provide natural and healthy products with no food additives to help improve quality. 
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
              Seaspire provides fresh and premium seafood products to more than 500 restaurants and super markets in USA, Europe, Japan, Thailand and Singapore with sustained and regularly supply two to three times a week.
            </p>

          </div>

        </div>

      </section>

      {/* Our Strengths */}

      <section className={styles.strengths}>

        <div className={styles.heading}>

          <p className={styles.sectionTag}>
            OUR STRENGTHS
          </p>

          <h2>
            Why Global Customers Choose Seaspirephuket
          </h2>

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

      </section>

            {/* Our Production & Storage */}

      <section className={styles.production}>

        <div className={styles.heading}>

          <p className={styles.sectionTag}>
            OUR PRODUCTION & STORAGE
          </p>

          <h2>
            Reliable Processing & Cold Chain Management
          </h2>

        </div>

        <div className={styles.productionContainer}>

          <div className={styles.productionText}>

            <div className={styles.infoBox}>

              <h3>Production</h3>

              <ul>
                <li>HACCP Based Processing</li>
                <li>Good Manufacturing Practice (GMP)</li>
                <li>Strict Quality Control</li>
                <li>Traceability System</li>
              </ul>

            </div>

            <div className={styles.infoBox}>

              <h3>Storage & Logistics</h3>

              <ul>
                <li>Frozen Cold Storage</li>
                <li>Temperature Monitoring</li>
                <li>Export Packing</li>
                <li>Reliable Global Shipment</li>
              </ul>

            </div>

          </div>

          <div className={styles.productionImage}>

            <img
              src="/images/production.webp"
              alt="Production Facility"
            />

          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section className={styles.cta}>

        <div className={styles.ctaContainer}>

          <p className={styles.sectionTag}>
            LET'S WORK TOGETHER
          </p>

          <h2>
            Your Trusted Seafood Partner
          </h2>

          <p>
            Seaspire Phuket is committed to delivering premium seafood with
            reliable quality, stable supply and professional service
            for customers worldwide.
          </p>

          <a
            href="/contact"
            className={styles.ctaButton}
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}