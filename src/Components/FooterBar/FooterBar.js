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
            <a href='/'>About</a>
            <a href='/'>Service</a>
            <a href='/'>Projects</a>
        </div>
        <div id='SocialMediaLogoDiv'>
          <img alt='' src={FaceBookIcon}></img>
          <img alt='' src={Instagram}></img>
          <img alt='' src={Twitter}></img>
          <img alt='' src={Pinterest}></img>

        </div>
    </div>

  )
}

export default FooterBar