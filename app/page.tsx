import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Stats from "./components/Stats";
import LeadForm from "./components/LeadForm";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Stats />
        <Testimonials />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
