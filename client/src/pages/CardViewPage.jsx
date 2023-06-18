import { React, useState } from "react";
import "../styles/homepage.css";
import Navbar from "../components/Navbar";
import HpIcons from "../components/HpIcons";
import explore from "../assets/icons/explore.png";
import add from "../assets/icons/add.png";
import setting from "../assets/icons/setting.png";
import logout from "../assets/icons/logout.png";
import bookmark from "../assets/icons/bookmark.png";
import AddPage from "./nav pages/AddPage";
import BookmarkPage from "./nav pages/BookmarkPage";
import SettingsPage from "./nav pages/SettingsPage";
import CardPage from "./nav pages/CardPage";
import { useLocation } from "react-router-dom";

const CardViewPage = ({ houseInfo }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();

  console.log(houseInfo);
  const data = location.state?.houseInfo;
  //changeIndex
  const changePage = (i) => {
    console.log(selectedIndex);
    setSelectedIndex(i);
  };

  const icons = [explore, add, bookmark, setting];
  const pages = [
    <CardPage houseInfo={data} />,
    // <ExplorePage />,
    <AddPage />,
    <BookmarkPage />,
    <SettingsPage />,
  ];

  return (
    <>
      <Navbar />
      <div className="hpmain">
        <div className="hpleft">
          <div className="topIcons">
            {icons.map((icon, index) => (
              <HpIcons
                icon={icon}
                onclick={() => {
                  changePage(index);
                }}
              />
            ))}
          </div>
          <div className="bottomIcon">
            <HpIcons icon={logout} />
          </div>
        </div>
        <div className="hpright">{pages[selectedIndex]}</div>
      </div>
    </>
  );
};

export default CardViewPage;
