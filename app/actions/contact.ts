"use server";

import { Resend } from "resend";


const resend = new Resend(
  process.env.RESEND_API_KEY
);



type InquiryState = {
  success: boolean;
  message: string;
};



export async function sendInquiry(
  previousState: InquiryState,
  formData: FormData
): Promise<InquiryState> {



  const company =
    formData.get("company") as string;


  const contact =
    formData.get("contact") as string;


  const email =
    formData.get("email") as string;


  const country =
    formData.get("country") as string;


  const phone =
    formData.get("phone") as string;


  const products =
    formData.get("products") as string;


  const message =
    formData.get("message") as string;




  if (
    !company ||
    !contact ||
    !email ||
    !message
  ) {

    return {

      success:false,

      message:
        "Please complete required fields.",

    };

  }




  try {


    await resend.emails.send({

      from:
        "SEASPIRE Website <onboarding@resend.dev>",


      to:
        process.env.CONTACT_EMAIL!,


      subject:
        `New Seafood Inquiry from ${company}`,



      html:`

        <h2>
          New Seafood Inquiry
        </h2>


        <p>
          <strong>Company:</strong>
          ${company}
        </p>


        <p>
          <strong>Contact:</strong>
          ${contact}
        </p>


        <p>
          <strong>Email:</strong>
          ${email}
        </p>


        <p>
          <strong>Country:</strong>
          ${country}
        </p>


        <p>
          <strong>Phone:</strong>
          ${phone}
        </p>


        <p>
          <strong>Interested Products:</strong>
          ${products}
        </p>


        <p>
          <strong>Requirements:</strong>
          ${message}
        </p>

      `,

    });



    return {

      success:true,

      message:
        "Thank you for your inquiry. Our team will contact you shortly.",

    };




  } catch(error) {


    console.error(error);



    return {

      success:false,

      message:
        "Unable to send inquiry. Please try again.",

    };


  }

}