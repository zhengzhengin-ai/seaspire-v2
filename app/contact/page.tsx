import PageHero from "../../components/PageHero";
import CTA from "../../components/CTA";
import styles from "../../styles/ContactPage.module.css";


export default function ContactPage() {

  return (
    <main>


      <PageHero

        subtitle="CONTACT US"

        title={"GLOBAL SEAFOOD\nPARTNERSHIP"}

        description="Let's discuss your seafood sourcing requirements."

        image="/images/contact-hero.webp"

      />




      <section className={styles.contact}>


        <div className={styles.container}>



          <div className={styles.info}>


            <p className={styles.sectionTag}>
              GET IN TOUCH
            </p>



            <h2>
              Contact Seaspire Phuket
            </h2>



            <p>
              We work with importers, distributors, wholesalers and
              food service partners worldwide to provide reliable
              seafood supply solutions.
            </p>



            <div className={styles.details}>


              <div>

                <h3>
                  Company
                </h3>

                <p>
                  Seaspire Phuket
                </p>

              </div>



              <div>

                <h3>
                  Location
                </h3>

                <p>
                  Phuket, Thailand
                </p>

              </div>



              <div>

                <h3>
                  Business Inquiry
                </h3>

                <p>
                  Seafood sourcing & export cooperation
                </p>

              </div>


            </div>


          </div>





          <div className={styles.form}>


            <h2>
              Send Inquiry
            </h2>



            <form>


              <input
                type="text"
                placeholder="Company Name"
              />



              <input
                type="text"
                placeholder="Contact Person"
              />



              <input
                type="email"
                placeholder="Email Address"
              />



              <input
                type="text"
                placeholder="Country"
              />



              <textarea
                placeholder="Your requirements"
                rows={6}
              />



              <button type="submit">
                Submit Inquiry
              </button>



            </form>


          </div>



        </div>


      </section>





      <CTA

        title={"YOUR TRUSTED\nSEAFOOD PARTNER"}

        description="Reliable seafood supply with premium quality, stable sourcing and customized processing for customers worldwide."

      />


    </main>
  );

}