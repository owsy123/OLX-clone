import React from "react";
import ad from "../images/ad1.jpeg"

const Ads = () => {
  return (
    <div>
      <div className="container mt-5">
            <img src={ad} alt="ads" className="img-fluid"/>
      </div>
    </div>
  );
};

export default Ads;
