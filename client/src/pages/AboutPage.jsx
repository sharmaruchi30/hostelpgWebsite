import Navbar from "../components/Navbar";
import React from "react";
import "../styles/aboutPage.css";
import APimg from "../assets/aboutus.jpg";
import Lpfooter from "../components/Lpfooter";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="apBg lpBg">
        <div className="aboutHeading">
          <h1>About Us</h1>
          <p>Hostel And PG Accommodation (StayBuddy)</p>
        </div>
        <div className="aboutContainer">
          <section className="about">
            <div className="aboutImg">
              <img src={APimg} alt="" />
            </div>
            <div className="aboutContent">
              <h2>Find your perfect 'home away from home' with StayBuddy! </h2>
              <p>
                Welcome to StayBuddy - your ultimate destination for finding the
                perfect PG or hostel accommodation! Whether you're a student, a
                working professional, or an individual in need of a temporary
                living space. At StayBuddy, we understand the challenges of
                finding suitable accommodation in a new city or unfamiliar
                surroundings. That's why we've created a user-friendly platform
                that connects seekers with providers, allowing them to connect
                and find their ideal living arrangements seamlessly.
                <p>
                  For seekers, our website offers a comprehensive database of
                  PGs and hostels, complete with detailed information and
                  high-quality images, ensuring that you have a clear
                  understanding of what each property has to offer. Our search
                  filters enable you to refine your search based on your
                  specific requirements, such as location, amenities, budget,
                  and more.
                </p>
                <p>
                  For providers, StayBuddy provides a hassle-free way to list
                  your available PG or hostel services. By creating an account,
                  you can easily upload information about your property,
                  including photographs, facilities, pricing, and any special
                  features. Our platform helps you reach a wider audience of
                  potential occupants.
                </p>
              </p>
            </div>
          </section>
        </div>
        <div className="emptySpace"></div>
        <Lpfooter />
      </div>
    </>
  );
}

export default AboutPage;
