import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import  Hero from "../components/Hero";
import  Status from "../components/Status";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";
import FAQ from "../components/Faq";
import RegisterForm from "../components/RegisterForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Status />
      < Courses />
      <Testimonials/>
      <WhyChoose />
      <FAQ />
      <RegisterForm />
      <Contact />
      <Footer />
    </main>
  );
}