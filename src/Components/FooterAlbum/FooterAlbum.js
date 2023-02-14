import React,{useState ,useEffect} from 'react'

import './FooterAlbum.css'
import Img1Desktop from '../../Assets/image-gallery-milkbottles.jpg'
import Img1Mobile from '../../Assets/image-gallery-milkbottles-m.jpg'

import Img2Desktop from '../../Assets/image-gallery-orange.jpg'
import Img2Mobile from '../../Assets/image-gallery-orange-m.jpg'

import Img3Desktop from '../../Assets/image-gallery-cone.jpg'
import Img3Mobile from '../../Assets/image-gallery-cone-m.jpg'

import Img4Desktop from '../../Assets/image-gallery-sugarcubes.jpg'
import Img4Mobile from '../../Assets/image-gallery-sugar-cubes-m.jpg'



function FooterAlbum() {
  const [ stateImage, setStateImage ] =useState(true);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >600) {
        setStateImage(true)
      } else {
        setStateImage(false)

      }
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div id='FooterAlbumDiv'>
        <img className='FooterImg' src={stateImage ? Img1Desktop : Img1Mobile}></img>
        <img className='FooterImg' src={stateImage ? Img2Desktop : Img2Mobile}></img>
        <img className='FooterImg'src={stateImage ? Img3Desktop : Img3Mobile}></img>
        <img className='FooterImg'src={stateImage ? Img4Desktop : Img4Mobile}></img>
    </div>
  )
}

export default FooterAlbum