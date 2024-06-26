"use client";
import React from "react";
import buttonStyles from "./Button.module.css";

const ButtonComp = () => {
  const handleClick = () => {
    window.open(
      "https://87a766wxym2m7occsjqi-afz5t.hop.clickbank.net",
      "_blank"
    );
  };

  return (
    <div className={buttonStyles.buttonDiv}>
      <button type="button" className={buttonStyles.btn} onClick={handleClick}>
        Try Now!
      </button>
    </div>
  );
};

export default ButtonComp;
