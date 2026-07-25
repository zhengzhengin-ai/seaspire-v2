"use client";


import { useActionState } from "react";

import { sendInquiry } from "@/app/actions/contact";

import styles from "@/styles/ContactPage.module.css";



const initialState = {
  success: false,
  message: "",
};



export default function ContactForm() {


  const [state, formAction, pending] =
    useActionState(
      sendInquiry,
      initialState
    );



  return (

    <>


      <form
        action={formAction}
      >


        <input
          type="text"
          name="company"
          placeholder="Company Name"
          required
        />



        <input
          type="text"
          name="contact"
          placeholder="Contact Person"
          required
        />



        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />



        <input
          type="text"
          name="country"
          placeholder="Country"
        />



        <input
          type="text"
          name="phone"
          placeholder="Phone / WhatsApp"
        />



        <input
          type="text"
          name="products"
          placeholder="Interested Products"
        />



        <textarea

          name="message"

          placeholder="Your requirements"

          rows={6}

          required

        />



        <button
          type="submit"
          disabled={pending}
        >

          {pending
            ? "Sending..."
            : "Submit Inquiry"
          }

        </button>



      </form>




      {
        state.message && (

          <p
            className={
              state.success
              ? styles.successMessage
              : styles.errorMessage
            }
          >

            {state.message}

          </p>

        )
      }



    </>

  );

}