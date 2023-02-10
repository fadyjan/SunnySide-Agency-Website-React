import React from 'react'
import './MainImgContainer.css';
import UImage from "../../Assets/image-header.jpg";

function MainImgContainer() {
  return (
    <div>
        <h1 id="CreativesH1">WE ARE CREATIVES</h1>
        <img id="MainImg" src = {UImage}></img>
    </div>
  )
}

export default MainImgContainer