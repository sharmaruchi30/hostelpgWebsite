import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../state";
import logo from "../assets/logo2.svg";
import "../styles/navbar.css";
import "../styles/buttons/buttons.css";
import dp from "../assets/icons/user.png";
import logoutIcon from "../assets/icons/logout.png";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setLogout());
  };

  // const menuRef = useRef();
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (menuRef) {
  //       if (!menuRef.current.contains(e.target)) {
  //         setOpen(false);
  //       }
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);
  // }, []);
  return (
    <div className="nav">
      <div className="navlogo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <a href="/"> Home </a>
          </li>
          <li>
            <a href="/homepage"> Explore </a>
          </li>
          <li>
            <a href="/AboutPage"> About </a>
          </li>
          <li>
            <a href="/ContactPage"> Contact </a>
          </li>
        </ul>
      </div>

      {!user ? (
        <div className="navbtns">
          <button className="signInbtn" onClick={() => navigate("/signup")}>
            Sign In
          </button>
          <button
            className="loginbtn shadowBtn"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
        </div>
      ) : (
        <div
          style={{
            cursor: "pointer",
          }}
        >
          {/* <button className="loginbtn shadowBtn" onClick={logout}>
            {" "}
            Log out
          </button> */}
          <div
            className="menu-container"
            // ref={menuRef}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              className="menu-trigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div className="AvatarCircle">
                <FontAwesomeIcon icon={faUser} color="#FFF" />
              </div>
              <div className="AvatarName">{name}</div>
            </div>

            <div className={`drpdwn-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <li>
                  <div className="menu-item">
                    <FontAwesomeIcon icon={faUser} color="#003566" />
                    <a href=""> My Profile </a>
                  </div>
                </li>

                <div onClick={logout}>
                  <li>
                    <div className="menu-item">
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        color="#003566"
                      />
                      <a> Logout </a>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
