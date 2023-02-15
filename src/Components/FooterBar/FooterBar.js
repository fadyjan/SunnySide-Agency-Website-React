import React from 'react'
import './FooterBar.css'
import FaceBookIcon from '../../Assets/icon-facebook.svg'
import Instagram  from '../../Assets/icon-instagram.svg'
import Pinterest from '../../Assets/icon-pinterest.svg'
import Twitter from '../../Assets/icon-twitter.svg'

function FooterBar() {
  return (
    <div id='FooterBarWrapper'>
        <h1>sunnyside</h1>
        <div id='LinksWrapper'>
            <a>About</a>
            <a>Service</a>
            <a>Projects</a>
        </div>
        <div id='SocialMediaLogoDiv'>
          <img src={FaceBookIcon}></img>
          <img src={Instagram}></img>
          <img src={Twitter}></img>
          <img src={Pinterest}></img>

        </div>
    </div>

  )
}

export default FooterBar