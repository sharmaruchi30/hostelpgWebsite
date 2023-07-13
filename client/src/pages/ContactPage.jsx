import React from "react";
import Navbar from "../components/Navbar";
import "../styles/contactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Lpfooter from "../components/Lpfooter";
function ContactPage() {
  return (
    <>
      <Navbar />
      <section class="contact">
        <div className="contactBox">
          <div className="contactForm">
            <h3>
              Get in touch, <br />
              Send us a Message
            </h3>
            <form>
              <div className="formGrp">
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="formGrp">
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="formGrp">
                <input
                  className="contact-input"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="formGrp">
                <textarea
                  className="contact-input"
                  name="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button className="sendBtn" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contactInfo">
            <h3>Contact Information</h3>
            <div className="infowithlogo">
              <FontAwesomeIcon icon={faLocationDot} color="#FFF" />
              <p>1234 bulding 567 address</p>
            </div>
            <div className="infowithlogo">
              <FontAwesomeIcon icon={faPhone} color="#FFF" />
              <p>+91 123456789</p>
            </div>
            <div className="infowithlogo">
              <FontAwesomeIcon icon={faEnvelope} color="#FFF" />
              <p>examplehelp@mail.com</p>
            </div>

            <div className="c-socialIcons">
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2F"
                className="twitter"
              >
                <FontAwesomeIcon icon={faTwitter} color="#FFF" />
              </a>
              <a href="https://www.linkedin.com/" className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} color="#FFF" />
              </a>
              <a
                href="https://github.com/sharmaruchi30/hostelpgWebsite"
                className="github"
              >
                <FontAwesomeIcon icon={faGithub} color="#FFF" />
              </a>
              <a href="https://www.instagram.com/" className="instagram">
                <FontAwesomeIcon icon={faInstagram} color="#FFF" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="emptySpace"></div>
      <Lpfooter />
    </>
  );
}

export default ContactPage;
