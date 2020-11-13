import React from "react";
import banner from "../images/banner.jpg";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div>

      <div className="img-cont">
        <img className="banner" src={banner} alt="Logo" />
      </div>

    </div>
  );
};

export default Banner;
