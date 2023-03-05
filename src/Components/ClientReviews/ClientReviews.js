import React from "react";
import "./ClientReviews.css";
import User1 from "../../Assets/image-emily.jpg";
import User2 from "../../Assets/image-jennie.jpg";
import User3 from "../../Assets/image-thomas.jpg";
const x = 'Client Testimonials'

function ClientReviews() {

  return (
    <div className="ClientReviewsDiv">
      <div id="ClientTestimonialsDiv">
        <h1 id="ClienttestimonialsHeader">{x.toUpperCase()}</h1>
      </div>

      <div id="ReviewsWrapper">
        <div className="SingleReview">
          <img src={User1} className="UserProfile" alt=""></img>
          <p className="ReviewParaphraphs">
            We put our trust in sunnyside and they delvierd, marking sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="InnerCliendWrapper"><label className="ClientLabels">Emily R.</label>
          <label className="ClientTittle">Marketing Director</label></div>
          
        </div>
        <div className="SingleReview">
          <img src={User2} className="UserProfile" alt=""></img>
          <p className="ReviewParaphraphs">
            sunnysides's enthusiasm coupied with their keen intreset in out
            brand's sucess made it a satisfying and enjoyable experience
          </p>
          <div className="InnerCliendWrapper"><label className="ClientLabels">Tomas S.</label>
          <label className="ClientTittle">Chief Operating Officer</label></div>
          
        </div>
        <div className="SingleReview">
          <img src={User3} className="UserProfile" alt=""></img>
          <p className="ReviewParaphraphs">
            incredible end result! Our sales increased over 400% when we worked
            with sunnyside. Highly recommended!
          </p>
          <div className="InnerCliendWrapper">
          <label className="ClientLabels">Jennie F.</label>
          <label className="ClientTittle">Businnes Owner</label>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ClientReviews;
