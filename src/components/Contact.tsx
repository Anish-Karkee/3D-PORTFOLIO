import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:pokharelanish512@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                pokharelanish512@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:9812377759"
                data-cursor="disable"
              >
                Phone: 9812377759
              </a>
            </p>
            <p style={{ marginTop: "10px", color: "#a5a5a5" }}>📍 Dharan, Nepal</p>
            <h4>Education</h4>
            <p>
              Bachelor of Information Technology (BIT) — Ongoing
            </p>
          </div>
          <div className="contact-box">
            <h4>Social &amp; Contact</h4>
            <a
              href="https://github.com/Anish-Karkee"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="mailto:pokharelanish512@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:9812377759"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
             <a
              href="https://www.instagram.com/anish_fuckin.brats"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Anish Pokharel</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
