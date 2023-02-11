import React from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header  className={classes.header}>
      <nav  className={classes.navBar}>
      <h1>SunnySide</h1>
        <ul className={classes.UnOrderLists}>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
