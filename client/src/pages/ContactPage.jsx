import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/contactPage.css";


function ContactPage() {
  return (
    <>
    <Navbar />
    <section class="contact">
        <div className="contactBox">
            <div className="contactForm">
                <h3>Get in touch, <br />
                    Send us a Message
                </h3>
                <form>
                    <div className="formGrp">
                        <input type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className="formGrp">
                        <input type="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="formGrp">
                        <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="formGrp">
                        <textarea name="message" placeholder="Your Message"></textarea>
                    </div>
                    <button className="sendBtn" type="submit"> Send</button>
                </form>
            </div>
            <div className="contactInfo">
                <h3>Contact Information</h3>
                <p>1234 bulding 567 address</p>
                <p>+91 123456789</p>
                <p>examplehelp@mail.com</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactPage