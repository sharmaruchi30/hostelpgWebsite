import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../state";
import logo from "../assets/logo.svg";
import "../styles/navbar.css";
import "../styles/buttons/buttons.css";
import dp from "../assets/icons/user.png";
import { useNavigate, Link } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setLogout());
  };
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
            <a href="/homepage"> Home </a>
          </li>
          <li>
            <a href="/homepage"> Explore </a>
          </li>
          <li>
            <a href="/homepage"> About </a>
          </li>
          <li>
            <a href="/homepage"> Contact </a>
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <button className="loginbtn shadowBtn" onClick={logout}>
            {" "}
            Log out
          </button> */}
          <div className="AvatarCircle">
            <img src={dp} alt="" />
          </div>
          <div className="AvatarName">{name}</div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
