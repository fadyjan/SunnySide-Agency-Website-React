import React ,{useState ,useEffect} from "react";
import "./TableContainer.css";
import EggPhoto from "../../Assets/image-transform.jpg";
import CupPhoto from "../../Assets/image-stand-out.jpg";

import EggPhotoMobile from "../../Assets/image-transform-m.jpg"
import CupPhotoMobile from "../../Assets/image-stand-out-m.jpg"

import Strawberry from "../../Assets/image-graphic-design.jpg";
import Orange from "../../Assets/image-photography.jpg";

import StrawberryMobile from "../../Assets/image-graphic-design-m.jpg"
import OrangeMobile from "../../Assets/image-photography-m.jpg"

function TableContainer() {
  const [ stateImage, setStateImage ] =useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
        setStateImage(window.innerWidth)
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
    <div id="TableContainer">
      <div className="Rows FirstRow">
        <div className="Boxes BoxContent">
          <div className="BoxContentWrapper">
            <h1 className="BoxesElements InnerBoxHeader">
              Transform your brand
            </h1>
            <p className="BoxesElements">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that fo most of the marketing of you.
            </p>
            <button className="BoxesElements Btns Yellow">LEARN MORE</button>
          </div>
        </div>
        <img alt="" className="Boxes InnerImgs"  src={stateImage > 600 ? EggPhoto : EggPhotoMobile}></img>
      </div>
      <div className="Rows SecondRow">
        <img alt="" className="Boxes" src={stateImage > 600 ? CupPhoto : CupPhotoMobile}></img>
        <div className="Boxes BoxContent">
          <div className="BoxContentWrapper">
            <h1 className="BoxesElements InnerBoxHeader">
              Stand out to the right audience
            </h1>
            <p className="BoxesElements">
              Using collaborative formula of desginers,researches,photographers,<br></br>vdeographers, and copywrites, we'll build and extend your brand in digital places.
            </p>
            <button className="BoxesElements Btns Red">LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="Rows ThirdRow">
        <div className="Boxes BoxContent ImgWithDescreaption">
          <img alt="" style={{ width: "100%" }} src={stateImage > 600 ? Strawberry : StrawberryMobile}></img>
          <div className="Descraiption">
            <h1 id="GreenHeader">
              Graphic Design
            </h1>
            <p className="BoxesElements" id="GreenPahraphraps">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client's
              attention
            </p>
          </div>
        </div>
        <div className="Boxes BoxContent ImgWithDescreaption">
          <img alt="" style={{ width: "100%" }}  src={stateImage > 600 ? Orange : OrangeMobile}></img>
          <div className="Descraiption">
            <h1  id="BlueHeader">
              photography
            </h1>
            <p className="BoxesElements" id="BluePharagraphs">
              increase your creadibilty by getting the most stunning,
              hight-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableContainer;
