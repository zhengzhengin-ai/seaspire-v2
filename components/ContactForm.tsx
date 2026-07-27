"use client";


import { useState } from "react";

import styles from "@/styles/ContactPage.module.css";



export default function ContactForm() {


  const [sending, setSending] = useState(false);



  return (

    <form
      action="/contact.php"
      method="POST"

      onSubmit={() => {

        setSending(true);

      }}
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

        disabled={sending}
      >

        {
          sending
            ? "Sending..."
            : "Submit Inquiry"
        }


      </button>



    </form>

  );

}