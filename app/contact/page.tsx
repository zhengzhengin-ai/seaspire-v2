import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "../../components/PageHero";
import CTA from "../../components/CTA";
import ContactForm from "../../components/ContactForm";
import styles from "../../styles/ContactPage.module.css";
import ContactMessage from "../../components/ContactMessage";
import { company } from "@/data";


export const metadata: Metadata = {
  title: "Contact",

  description:
    "Contact Seaspire Phuket for seafood sourcing, OEM processing, frozen seafood supply and international export partnerships.",

  keywords: [
    "Contact Seaspire",
    "Seafood Supplier Contact",
    "Seafood Export Thailand",
    "OEM Seafood Processing",
    "Seafood Inquiry",
    "Seafood Import",
    "Restaurant Seafood Supply",
    "Hotel Seafood Supply",
    "Thailand Seafood Supplier",
  ],
};



export default function ContactPage() {




  return (
    <main>


      <PageHero
        subtitle="CONTACT US"
        title={"GLOBAL SEAFOOD\nPARTNERSHIP"}
        description="Let's discuss your seafood sourcing requirements."
        image="/images/hero/contact-hero.webp"
      />



      <section className={styles.contact}>

        <div className={styles.container}>


          <div className={styles.info}>


            <p className={styles.sectionTag}>
              GET IN TOUCH
            </p>



            <h2>
              Contact {company.name}
            </h2>



            <p>
              We work with importers, distributors, wholesalers,
              restaurants and food service partners to provide
              reliable seafood supply solutions.
            </p>




            <div className={styles.details}>


              {company.locations.map((location) => (

                <div
                  key={location.id}
                >

                  <h3>
                    {location.name}
                  </h3>


                  <p>
                    {location.phone}
                  </p>


                  <p>
                    {location.address}
                  </p>


                </div>

              ))}




              <div>

                <h3>
                  General Inquiry
                </h3>


                <p>
                  {company.email}
                </p>


              </div>



            </div>


          </div>





          <div
            id="contact-form"
            className={styles.form}
          >


            <h2>
              Send Inquiry
            </h2>


            <ContactForm />


            <Suspense>

              <ContactMessage />

            </Suspense>


          </div>



        </div>


      </section>





      <section className={styles.map}>


        <iframe
          src={company.map.embedUrl}
          width="100%"
          height="450"
          style={{
            border: 0,
          }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Seaspire Phuket Location"
        />


      </section>





      <CTA

        title={"LET'S START\nA SEAFOOD PARTNERSHIP"}

        description="Contact Seaspire Phuket now to discuss sourcing, products, logistics and customized seafood supply solutions."

      />


    </main>
  );
}