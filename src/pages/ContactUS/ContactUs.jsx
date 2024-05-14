import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"
import ContactForm from "./ContactForm"


function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
      <ContactForm />
    </div>
      <Footer />
    </div>
  )
}

export default ContactUs
