"use client";

import { useState } from "react";

import styles from "@/styles/ContactPage.module.css";

export default function ContactForm() {
  const [pending, setPending] = useState(false);

  const [result, setResult] = useState({
    success: false,
    message: "",
  });

async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  setPending(true);

  setResult({
    success: false,
    message: "",
  });

  const form = event.currentTarget;

  const formData = new FormData(form);

  try {

    const response = await fetch("/contact.php", {
      method: "POST",
      body: formData,
    });

    console.log("Status:", response.status);
    console.log("URL:", response.url);

    const text = await response.text();

    console.log(text);

    const data = JSON.parse(text);

    setResult(data);

    if (data.success) {
      form.reset();
    }

  } catch (error) {

    console.error(error);

    setResult({
      success: false,
      message: "Unable to send inquiry.",
    });

  }

  setPending(false);
}

  return (
    <>
      <form onSubmit={handleSubmit}>

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
            : "Submit Inquiry"}
        </button>

      </form>

      {result.message && (
        <p
          className={
            result.success
              ? styles.successMessage
              : styles.errorMessage
          }
        >
          {result.message}
        </p>
      )}
    </>
  );
}