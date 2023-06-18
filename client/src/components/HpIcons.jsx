import React from "react";
import "../styles/components.css";
const HpIcons = ({ icon, onclick }) => {
  return (
    <div className="iconBox" onClick={onclick}>
      <img src={icon} alt="" />
    </div>
  );
};

export default HpIcons;
