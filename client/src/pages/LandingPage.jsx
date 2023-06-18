import React from "react";
import Navbar from "../components/Navbar";
import "../styles/landingPage.css";
import bg from "../assets/landingpage/bg.png";
import uploadIC from "../assets/landingpage/icons/upload.svg";
import exploreIC from "../assets/landingpage/icons/explore.png";
import enquireIC from "../assets/landingpage/icons/contact.svg";
import twitter from "../assets/landingpage/icons/twitter.svg";
import instagram from "../assets/landingpage/icons/instagram.svg";
import linkedIn from "../assets/landingpage/icons/linkedin.svg";
import github from "../assets/landingpage/icons/github.png";
export const LpCard = ({ sideClass, icon, headText, infoText }) => {
  return (
    <div className={"lpcardRect " + sideClass}>
      <div className="lpcardElipse">
        <img src={icon} alt="" />
      </div>
      <div className="lpcardhead">{headText}</div>
      <div className="lpcardinfo">{infoText}</div>
    </div>
  );
};

export const LpFooterContent = ({ heading, content }) => {
  return (
    <div className="footerContent">
      <div className="lpfooterhead">{heading}</div>
      {content.map((c, index) => (
        <div className="footerheadtext">{c}</div>
      ))}
    </div>
  );
};

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="lpBg">
        <div className="lpleft">
          <div className="lphead">Find a Home Away from Home</div>
          <div className="introText">
            Enables individuals to find hostels or PGs that meet their
            preferences and requirements, ensuring a comfortable and suitable
            living environment.
          </div>
          <div className="lpExploreBtn">Explore Now</div>
        </div>
        <div className="lpright">
          <img src={bg} alt="" />
        </div>
      </div>

      <div className="lpmid">
        <div className="lptext">How It Works</div>
        <div className="lpcards">
          <LpCard
            sideClass={"lpcardside"}
            icon={uploadIC}
            headText={"UPLOAD"}
            infoText={
              "Allow users to upload their listings of available rooms for hostels and PG accommodations, the website can provide a user-friendly interface and a streamlined process."
            }
          />
          <LpCard
            icon={exploreIC}
            headText={"EXPLORE"}
            infoText={
              "users can utilize the search and browsing functionalities provided by this website. Upon accessing the website, users can typically navigate to the search or listings page, where they can specify their preferences and requirements."
            }
          />
          <LpCard
            sideClass={"lpcardside"}
            icon={enquireIC}
            headText={"ENQUIRE"}
            infoText={
              "By using these contact options, users can inquire about room availability, rental prices, facilities, and any other details they may need before making a decision."
            }
          />
        </div>
        <div className="lpfooter">
          <div className="footercentercontent">
            <div className="getintouch">
              <div className="getintouchtext">Get in touch</div>
              <form action="">
                <input type="text" className="footerinput" placeholder="Name" />
                <input
                  type="text"
                  className="footerinput"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="footerinput"
                  placeholder="Subject"
                />
                <textarea
                  type="text"
                  className="footerinput"
                  placeholder="Message"
                />
              </form>
            </div>
            <div className="lpfooterrightsection">
              <div className="lpfooterright">
                <LpFooterContent
                  heading={"Popular"}
                  content={["Pune", "Bangalore", "Mumbai", "Kolkata"]}
                />
                <LpFooterContent
                  heading={"Resources"}
                  content={["Blog", "Events", "Help Centre"]}
                />
                <LpFooterContent
                  heading={"About Us"}
                  content={["Features", "Careers", "News", "Contact"]}
                />
                <LpFooterContent
                  heading={"StayBuddy"}
                  content={["Overview", "Solutions", "Team", "Terms"]}
                />
              </div>
              <div className="socialIcons">
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedIn} alt="" />
                <img src={github} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
