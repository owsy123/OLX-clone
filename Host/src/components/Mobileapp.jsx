import React from "react";
import "../styles/mobileapp.css";
import i2 from "../images/phone-app.webp";
import i3 from "../images/appstore.png";
import i4 from "../images/playstore.png";

const Mobileapp = () => {
  return (
    <div className="cont flex-column flex-md-row mt-5">
      <div className="">
        <img src={i2} className="img-fluid h-100" alt="img" />
      </div>
      <div className="my-auto p-4">
        <h2>TRY THE OLX APP</h2>
        <h6>
          Buy, sell and find just about anything using the app on your mobile.
        </h6>
      </div>
      <div className="my-auto p-4">
        <h5>GET YOUR APP TODAY</h5>
        <div className="mt-3">
          <img src={i3} alt="" />
          <img src={i4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mobileapp;
