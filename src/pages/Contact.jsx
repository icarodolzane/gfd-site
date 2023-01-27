import Header from "../components/Header";
import '../style/Contact.css';
import bannercontact from "../images/banner-contact.png";
import Banner from "../components/Banner";

function Contact() {
  return (
    <>
      <Header/>
      <Banner src={bannercontact} />
      <div className="Contact">
      <h1>Informações de Contato em Breve ... </h1>
    </div>
    </>
  );
}

export default Contact;
