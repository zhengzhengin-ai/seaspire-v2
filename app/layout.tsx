import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import { siteConfig } from "@/constants";

import {
  organizationSchema,
  localBusinessSchema,
} from "@/lib/structuredData";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  title: {
    default: siteConfig.name,
    template: "%s | SEASPIRE PHUKET",
  },


  description: siteConfig.description,


  keywords: siteConfig.keywords,


  metadataBase: new URL(siteConfig.url),



  openGraph: {

    title: siteConfig.name,

    description: siteConfig.description,

    url: siteConfig.url,

    siteName: siteConfig.name,

    locale: siteConfig.locale,

    type: "website",


    images: [
      {
        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt: siteConfig.name,
      },
    ],

  },



  twitter: {

    card: "summary_large_image",

    title: siteConfig.name,

    description: siteConfig.description,

    images: ["/og-image.jpg"],

  },



  robots: {

    index: true,

    follow: true,

  },

};





export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  const structuredData = organizationSchema();


  const localBusinessData = localBusinessSchema();



  return (

    <html

      lang="en"

      data-scroll-behavior="smooth"

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >


      <body className="min-h-full flex flex-col">


        <GoogleAnalytics />



        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{

            __html: JSON.stringify(structuredData),

          }}

        />



        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{

            __html: JSON.stringify(localBusinessData),

          }}

        />



        <Navbar />



        <main style={{ flex: 1 }}>

          {children}

        </main>



        <Footer />


      </body>


    </html>

  );

}