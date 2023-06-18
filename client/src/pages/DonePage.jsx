import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/142011-completed-tick.json";
import { useNavigate } from "react-router-dom";

function DonePage() {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div
        className="done-page"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100px",
            width: "100px",
          }}
        >
          <Lottie
            onComplete={() => {
              navigate("/login");
            }}
            animationData={animationData}
            loop={false}
          ></Lottie>
        </div>

        <label style={{ fontSize: "28px" }}>Registration Complete</label>
      </div>
    </>
  );
}

export default DonePage;
