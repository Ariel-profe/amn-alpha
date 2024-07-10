import { ContactForm } from "@/components/contact/contactForm";
import Faqs from "@/components/contact/faqs";
import { HeroSection } from "@/components/ui/hero-section";

const ContactPage = () => {
  return (
    <div className="px-3 lg:px-10 relative">
      <HeroSection title="Ponte en contacto con nuestro equipo, queremos" subtitle="conocerte y que nos conozcas" />
      <ContactForm />
      <Faqs />
    </div>
  )
}

export default ContactPage