import Navbar from '../components/Navbar'
import React from 'react'
import "../styles/aboutPage.css";
import APimg from "../assets/APimg.jpg"

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className='apBg'>
        <div className="aboutHeading">
          <h1>About Us</h1>
          <p>Subah ko Aankh khulte Yaad Tera Aana</p>
        </div>
        <div className="aboutContainer">
          <section className='about'>
            <div className="aboutImg">
              <img src={APimg} alt="" />
            </div>
            <div className="aboutContent">
              <h2>Deeware jo Ghar ki Yaad na Aane de </h2>
              <p> Teri tasveer bana kar rang bharun. Har pal ko teri Jaageer karun. 
                Neendon ke bina raatein meri. Kis sapanay Ki tabeer karun. 
                Kuch bhi na dikhay, Ghayab jo tum. Abdheron pe tehreer likhun. Aajao agar saansein meri. 
                Peiron ki tere zanjeer karun. Raasta kaunsa jo chunuun to le jaaega. 
                Us nagarm us jagah, jahan yaar hai jaakar chupa. Ab bata Aye Khuda.. </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}


export default AboutPage