import { ContactForm } from "@/components/contact/contactForm";
import Faqs from "@/components/contact/faqs";

const ContactPage = () => {
  return (
    <div className="px-3 lg:px-10 relative">
      <ContactForm />
      <Faqs />
    </div>
  )
}

export default ContactPage