import { ContactForm } from "@/components/contact/contactForm";
import Faqs from "@/components/contact/faqs";
import { HeroSection } from "@/components/ui/hero-section";

const ContactPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto relative">
      <HeroSection title="Ponte en contacto con nuestro equipo, queremos" subtitle="conocerte y que nos conozcas" />
      <ContactForm />
      <Faqs />
    </section>
  )
}

export default ContactPage