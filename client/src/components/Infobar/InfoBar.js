import React from "react";
import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <span className="onlineIcon">
          <i class="far fa-dot-circle"></i>
        </span>
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <i class="fas fa-times" className="cancelChat"></i>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
