import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Service from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Head from "next/head";
import Projects from "./components/Projects";

export const metadata = {
  title: "PNDTECH",
  description: "Expert IT, Cloud, and AI Consulting Services to Drive Business Growth and Innovation.",
  keywords: "Portfolio, Web Development, AI Projects, Next.js, TypeScript, Tailwind CSS",
  openGraph: {
    title: "PNDTECH ",
    description: "Expert IT, Cloud, and AI Consulting Services to Drive Business Growth and Innovation.",
    url: "https://yourdomain.com",
    siteName: "PNDTECH",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return(
    <main className="min-h-screen bg-gray-50 overscroll-none">
    <Navbar />
    <section id="home"><HomePage /></section>
    <section id="about"><AboutUs /></section>
    <section id="services"><Service /></section>
    <section id="projects"><Projects/></section>
    <section id="contact"><ContactUs /></section>
    <Footer />
  </main>
  )
}
