import "../styles/style.css";
import Links from "./Links.jsx";
import EmailWhite from "../assets/icons/email_white.svg";
import ContactImg160 from "../assets/images/profile-pic-02_160.jpg";
import ContactImg320 from "../assets/images/profile-pic-02_320.jpg";
import ContactImg640 from "../assets/images/profile-pic-02_640.jpg";
import ContactImg960 from "../assets/images/profile-pic-02_960.jpg";

function ContactImage() {
  return (
    <img
      srcSet={`${ContactImg160} 160w, ${ContactImg320} 320w, ${ContactImg640} 640w, ${ContactImg960} 960w`}
      alt="Contact Picture"
      className="contact-img"
    />
  );
}

function Contact() {
  return (
    <>
      <div>
        <h1>Contact Me</h1>
        <div>
          <div className="contact-details">
            <p>Open for new job opportunities. Feel free to get in touch.</p>
            <Links />
          </div>
          <div className="contact-img-container">
            <ContactImage />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
