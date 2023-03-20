import React from 'react'
import './MainImgContainer.scss';
import UImage from "../../Assets/image-header.jpg";

function MainImgContainer() {
  return (
    <div>
        <h1 id="CreativesH1">WE ARE CREATIVES</h1>
        <img alt='' id="MainImg" src = {UImage}></img>
    </div>
  )
}

export default MainImgContainer