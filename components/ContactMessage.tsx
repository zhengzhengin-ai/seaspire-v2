"use client";


import { useSearchParams } from "next/navigation";

import styles from "@/styles/ContactPage.module.css";



export default function ContactMessage() {


  const searchParams = useSearchParams();


  const success =
    searchParams.get("success") === "1";


  const error =
    searchParams.get("error") === "1";



  if (!success && !error) {

    return null;

  }



  return (

    <>


      {success && (

        <div
          className={styles.successMessage}
        >

          <strong>
            ✓ Inquiry Sent Successfully
          </strong>


          <p>
            Thank you for your inquiry.
            Our team will contact you shortly.
          </p>


        </div>

      )}





      {error && (

        <div
          className={styles.errorMessage}
        >

          Unable to send inquiry.
          Please try again.


        </div>

      )}



    </>

  );

}