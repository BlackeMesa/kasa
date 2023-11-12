import React from "react";
import "./ToggleButton.css";
import { useState } from "react";

function ToggleButton({ text, description }) {
  const [showDescription, setShowDescription] = useState(false);
  const renderDescription = () => {
    if (typeof description === "string") {
      return <span className={` ${showDescription ? "d-flex" : "d-none"}`}>{description}</span>;
    } else if (Array.isArray(description)) {
      return description.map((item, index) => (
        <span className={` ${showDescription ? "d-flex" : "d-none"}`} key={index}>
          {item}
        </span>
      ));
    }
  };

  return (
    <div className="container-button">
      <button className="toggle-btn" onClick={() => setShowDescription(!showDescription)}>
        {text}
        <span className={`arrow ${showDescription ? "down" : "up"}`}></span>
      </button>
      <div className={`description ${showDescription ? "show-description" : ""}`}>{renderDescription()}</div>
    </div>
  );
}

export default ToggleButton;
