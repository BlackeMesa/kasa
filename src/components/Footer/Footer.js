import React from "react";
import "./Footer.css"; // Import du CSS

function Footer() {
  return <footer className="app-footer">
    <div className="img-container">

    <img src="img/logo.png" alt="" />
    </div>
    <span>

    © {new Date().getFullYear()} Kasa. All rights reserved.
    </span>
    
    </footer>;
}

export default Footer;
