import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../state";
import "../styles/homepage.css";
import Navbar from "../components/Navbar";
import HpIcons from "../components/HpIcons";
import explore from "../assets/icons/explore.png";
import add from "../assets/icons/add.png";
import setting from "../assets/icons/setting.png";
import logoutIC from "../assets/icons/logout.png";
import bookmark from "../assets/icons/bookmark.png";
import ExplorePage from "./nav pages/ExplorePage";
import AddPage from "./nav pages/AddPage";
import BookmarkPage from "./nav pages/BookmarkPage";
import SettingsPage from "./nav pages/SettingsPage";

function HomePage() {
  //USESTATES
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setLogout());
    navigate("/login");
  };
  //changeIndex
  const changePage = (i) => {
    console.log(selectedIndex);
    setSelectedIndex(i);
  };

  const user = useSelector((state) => state.user);
  const userName = useSelector((state) => state.user.name);

  const icons = [explore, add, bookmark, setting];
  const pages = [
    <ExplorePage />,
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
            <HpIcons icon={logoutIC} onclick={logout} />
          </div>
        </div>
        <div className="hpright">{pages[selectedIndex]}</div>
      </div>
    </>
  );
}

export default HomePage;
