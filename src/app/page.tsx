import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Service from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return(
    <>
    <Navbar/>
    <section id="home">
    <HomePage />
    </section>
    <section id="about">
    <AboutUs/>
    </section>
    <section id="services">
    <Service />
    </section>
    <section id="contact">
    <ContactUs />
    </section>
    <Footer />
    </>
  )
}
