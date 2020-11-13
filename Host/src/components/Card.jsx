import React from 'react';
import "../styles/card.css"
import i1 from "../images/car.jpg"


const Card = (props) => {
    return (
        <div>


            <div className="card main-card-div" style={{width:"",margin:"10px"}}>
                <small className="feature-bage px-3">FEADTURED</small>
                <i className="fa fa-heart-o heart-icon" aria-hidden="true"></i>
                <div className="card-img">
                    <div className="container mt-2">
                        <img className="img-fluid w-100" src={i1} alt="img" width="250px"/>
                    </div>

                </div>
                <div className="yellow-line">

                <div className="card-body">
                    <h4 className="card-title">RS {props.price}</h4>
                    <p className="card-text text-muted">{props.detail}</p>
                </div>
                <div className="card-footer cf p-0 pb-2 m-0 row"> 
                    <small className="col text-muted">{props.address}</small>
                    <small className="col-4 text-right text-muted">{props.date}</small>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
