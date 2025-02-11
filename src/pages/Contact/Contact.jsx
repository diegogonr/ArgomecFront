import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";


const Contact = () => {
  return (
  <div className="wrapper">
    <ContactHeader></ContactHeader>
    <ContactInfo></ContactInfo>
    <ContactForm></ContactForm>
  </div>
  );
};

export default Contact;
