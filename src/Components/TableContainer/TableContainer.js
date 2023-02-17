import React from "react";
import "./TableContainer.css";
import EggPhoto from "../../Assets/image-transform.jpg";
import CupPhoto from "../../Assets/image-stand-out.jpg";
import Strawberry from "../../Assets/image-graphic-design.jpg";
import Orange from "../../Assets/image-photography.jpg";

function TableContainer() {
  return (
    <div id="TableContainer">
      <div className="Rows">
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
        <img className="Boxes InnerImgs" src={EggPhoto}></img>
      </div>
      <div className="Rows SecondRow">
        <img className="Boxes" src={CupPhoto}></img>
        <div className="Boxes BoxContent">
          <div className="BoxContentWrapper">
            <h1 className="BoxesElements InnerBoxHeader">
              Stand out to the right audience
            </h1>
            <p className="BoxesElements">
              Using collaborative formula of desginers,researches,photographers,vdeographers, and copywrites, we'll build and extend your brand in digital places.
            </p>
            <button className="BoxesElements Btns Red">LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="Rows">
        <div className="Boxes BoxContent ImgWithDescreaption">
          <img style={{ width: "100%" }} src={Strawberry}></img>
          <div className="Descraiption">
            <h1 style={{ textAlign: "center", fontSize: "3vw" }}>
              Graphic Design
            </h1>
            <p className="BoxesElements">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client's
              attention
            </p>
          </div>
        </div>
        <div className="Boxes BoxContent ImgWithDescreaption">
          <img style={{ width: "100%" }} src={Orange}></img>
          <div className="Descraiption">
            <h1 style={{ textAlign: "center", fontSize: "3vw" }}>
              photography
            </h1>
            <p className="BoxesElements">
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
