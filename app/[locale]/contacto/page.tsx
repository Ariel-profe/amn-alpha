import { ContactForm } from "@/components/contact/contactForm";
import Faqs from "@/components/contact/faqs";
import { HeroSection } from "@/components/ui/hero-section";

const ContactPage = () => {
  return (
    <div className="px-3 lg:px-10 relative">
      <HeroSection title="PONTE EN CONTACTO" subtitle="Queremos escucharte. Para nosotros es muy importante conocerte y que nos conozcas, ya sea a traves del formulario, de una llamada o un mensaje de texto. " />
      <ContactForm />
      <Faqs />
    </div>
  )
}

export default ContactPage