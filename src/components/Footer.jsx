import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["footer-text"]}>
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className={classes["footer-copyright"]}>
        <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </div>
  );
};

export default Footer;
