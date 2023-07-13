import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

const Lpfooter = () => {
  return (
    <div className="lpfooter">
      <div className="footercentercontent">
        <div className="getintouch">
          <div className="getintouchtext">Get in touch</div>
          <form action="">
            <input type="text" className="footerinput" placeholder="Name" />
            <input type="text" className="footerinput" placeholder="Email" />
            <input type="text" className="footerinput" placeholder="Subject" />
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
    </div>
  );
};

export default Lpfooter;
