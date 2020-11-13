import React from "react";
import "../styles/topdiv.css";
import i1 from "../images/car.jpg";
import Card from "./Card";
import { Link } from "react-router-dom";

const Topdiv = () => {
  return (
    <div>
      <div className="container bg-light mt-5">
        <div id="carouselExampleControls" className="carousel slide">
          <div className="carousel-inner firstslick  ">
            <div className="carousel-item active">
              <div className="card-group p-3 d-flex justify-content-center">
                <Card className="bbb" price="500" detail="product detail" address="saddar" date="sep" />
                <Card className="bbb" price="500" detail="product detail" address="saddar" date="sep" />
                <Card className="bbb" price="500" detail="product detail" address="saddar" date="sep" />
              </div>
            </div>

            <div className="carousel-item col">
              <div className="card-group p-3 d-flex justify-content-center">
                <Card price="500" detail="product detail" address="saddar" date="sep" />
                <Card price="500" detail="product detail" address="saddar" date="sep" />
                <Card price="500" detail="product detail" address="saddar" date="sep" />
              </div>
            </div>

            <div className="carousel-item col">
              <div className="card-group p-3 d-flex justify-content-center">
                <Card price="500" detail="product detail" address="saddar" date="sep" />
                <Card price="500" detail="product detail" address="saddar" date="sep" />
                <Card price="500" detail="product detail" address="saddar" date="sep" />
              </div>
            </div>
          </div>

          <Link className="carousel-control-prev opc" to="#carouselExampleControls" role="button" data-slide="prev">
            <span className="slide-btn1 ">
              {/* <span className="carousel-control-prev-icon mt-4" aria-hidden="true" /> */}
              <i className=" mt-3 fa fa-angle-left" aria-hidden="true"></i>
            </span>
            <span className="sr-only">Previous</span>
          </Link>

          <Link className="carousel-control-next opc" to="#carouselExampleControls" role="button" data-slide="next">
            <span className="slide-btn2">
              {/* <span className="carousel-control-next-icon mt-4" aria-hidden="true" /> */}
              <i className="mt-3 fa fa-angle-right" aria-hidden="true"></i>
            </span>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topdiv;
