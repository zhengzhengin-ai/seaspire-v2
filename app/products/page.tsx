import type { Metadata } from "next";
import ContentCard from "@/components/ContentCard";
import PageHero from "../../components/PageHero";
import CTA from "../../components/CTA";
import styles from "../../styles/ProductsPage.module.css";
import SectionHeading from "@/components/SectionHeading";

const products = [
  {
    name: "Frozen Tuna",
    description:
      "Premium tuna products supplied through reliable sourcing, controlled processing and international cold chain management.",
    image: "/images/products/frozen-tuna.webp",
  },
  {
    name: "Salmon",
    description:
      "Premium salmon products prepared to meet customer specifications with consistent quality and reliable supply.",
    image: "/images/products/salmon.webp",
  },
  {
    name: "Bluefin Tuna",
    description:
      "Premium bluefin tuna products selected and processed to support high-end food service and international seafood markets.",
    image: "/images/products/bluefin-tuna.webp",
  },
  {
    name: "HAMACHI",
    description:
      "Premium hamachi products supplied with flexible processing options for professional food service customers.",
    image: "/images/products/hamachi.webp",
  },
  {
    name: "Softshell Cuttlefish",
    description:
      "Specialty softshell cuttlefish products prepared for food service and international seafood distribution requirements.",
    image: "/images/products/softshell-cuttlefish.webp",
  },
];


export const metadata: Metadata = {

  title: "Products",

  description:
    "Explore Seaspire Phuket's premium seafood products including frozen tuna, bluefin tuna, salmon, hamachi, cuttlefish and customized seafood processing solutions.",

  keywords: [

    "Frozen Tuna",

    "Bluefin Tuna",

    "Salmon Supplier",

    "Hamachi",

    "Cuttlefish",

    "Frozen Seafood",

    "Seafood Processing",

    "OEM Seafood processing",

    "Seafood Supplier Thailand",

    "Seafood Export Thailand",

  ],

};

export default function ProductsPage() {
  return (
    <main>


      <PageHero
        subtitle="OUR PRODUCTS"
        title={"PREMIUM SEAFOOD\nFROM PHUKET"}
        description="Fresh • Frozen • Processed"
        image="/images/hero/products-hero.webp"
      />



      <section className={styles.products}>


        <SectionHeading
          tag="MAIN PRODUCTS"
          title="Representative Seafood Products"
        />



        <div className={styles.productGrid}>

          {products.map((product) => (

           <ContentCard
             key={product.name}
             title={product.name}
             description={product.description}
             image={product.image}
           />

          ))}

        </div>


      </section>





      <section className={styles.processing}>


        <SectionHeading
          tag="PROCESSING OPTIONS"
          title="Flexible Processing Solutions"
        />



        <div className={styles.processingGrid}>


          <div className={styles.processingCard}>
            <h3>
              Fresh
            </h3>
            <p>
              GG / Loin / Fillet 
            </p>
          </div>



          <div className={styles.processingCard}>
            <h3>
              Frozen
            </h3>
            <p>
              IQF / VIP / Bulk Pack
            </p>
          </div>



          <div className={styles.processingCard}>
            <h3>
              Customized
            </h3>
            <p>
              Cutting / Packing / Labelling
            </p>
          </div>


        </div>



        <p className={styles.processingText}>
          Products are processed according to customer specifications
          and international food safety standards.
        </p>


      </section>





      <section className={styles.quality}>


        <SectionHeading
          tag="QUALITY ASSURANCE"
          title="Commitment to Quality"
        />



        <div className={styles.qualityGrid}>


          <div className={styles.qualityCard}>
            <h3>
              HACCP
            </h3>
              <p>
                International Food Safety
              </p>
          </div>


          <div className={styles.qualityCard}>
            <h3>
              GMP
            </h3>
              <p>
                Good Manufacturing Practice
              </p>
          </div>


          <div className={styles.qualityCard}>
            <h3>
              Traceability
            </h3>
              <p>
                From Vessel to Customer
              </p>
          </div>


        </div>



        <p className={styles.qualityText}>
          Committed to delivering premium seafood with
          consistent quality and reliable food safety.
        </p>


      </section>





      <CTA
        title={"FIND THE RIGHT\nSEAFOOD SOLUTION"}
        description="From fresh seafood to frozen products and customized processing, we provide solutions tailored to your business needs."
      />


    </main>
  );
}