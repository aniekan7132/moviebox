import React from "react";
import logo from "../assets/Logo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <form>
        <input type="text" placeholder="What do you want to watch?" />
        <img src="" alt="" />
      </form>

      <div>
        <p>Sign in</p>
        <div>
          <img src="" alt="" />
        </div>
      </div>

    </div>
  );
};

export default Navbar;
