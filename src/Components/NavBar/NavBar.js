import React from "react";
import "./NavBar.scss";
import BurgerIcon from '../../Assets/icon-hamburger.svg'

const NavBar = () => {
  const Toggle = (el)=>{
   const flag =  el.target.nextSibling.classList.toggle('active');
    if (flag) {
      document.getElementById("CreativesH1").style.top = "45%"

    } else {
      document.getElementById("CreativesH1").style.top = "15%"

    }
  }
  return (
    <header className="header">
      <nav className="navBar">
        <h1 >SunnySide</h1>
        <img alt="" src={BurgerIcon} id="BurgerIconImg" onClick={Toggle}></img>
        <ul className="UnOrderLists">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
