import React from "react";
import { connect } from "react-redux";
import { firebaseApp } from "../config/firebase_setup";
import { modalHandle, phoneStep1, phoneStep2, phoneStep3, phoneStep4, userData } from "../storage/action/loginAction";
import image1 from "../images/guitar.png";
import image2 from "../images/heart.png";
import image3 from "../images/avat.png";

const Phonestep1 = (props) => {
  const phoneStepHandler1 = () => {
    props.stepHandler1(false);
    props.stepHandler2(true);
  };

  const facebookLogin = () => {
    var provider = new firebaseApp.auth.FacebookAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const user = result.user;
        props.userData(user);
        props.modalHandler(false);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const googleLogin = () => {
    var provider = new firebaseApp.auth.GoogleAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        const user = result.user;
        props.userData(user);
        props.modalHandler(false);
      })
      .catch(function (error) {
        console.log("error");
      });
  };

  return (
    <div className="">
      <div className="d-block">
        <div id="caroselTarget" className="carousel slide caro-cont">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="text-center">
                <div className="img-cont2">
                  <img src={image1} className="d-block w-100 img-fluid" alt="" />
                </div>
                <h5>Help make OLX safer place to buy and sell</h5>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center">
                <div className="img-cont2">
                  <img src={image2} className="d-block w-100 img-fluid" alt="" />
                </div>
                <h5>Contact and close deals faster</h5>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center">
                <div className="img-cont2">
                  <img src={image3} className="d-block w-100 img-fluid" alt="" />
                </div>
                <h5>Save all your favorite items in one place</h5>
              </div>
            </div>
          </div>

          <span className="carousel-control-prev" href="#caroselTarget" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </span>
          <span className="carousel-control-next" href="#caroselTarget" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </span>

          <ol className="carousel-indicators">
            <li data-target="#caroselTarget" data-slide-to="0" className="active"></li>
            <li data-target="#caroselTarget" data-slide-to="1"></li>
            <li data-target="#caroselTarget" data-slide-to="2"></li>
          </ol>
        </div>
      </div>

      <div className="d-block text-center mt-5">
        <button onClick={phoneStepHandler1} className="btn w-75 mx-auto mb-2 olx-btn-log">
          Continue with phone
        </button>

        <button onClick={facebookLogin} className="btn w-75 mx-auto mb-2 olx-btn-log">
          Facebook
        </button>
        <button onClick={googleLogin} className="btn w-75 mx-auto mb-2 olx-btn-log">
          Google
        </button>
        <button className="btn w-75 mx-auto mb-2 olx-btn-log">Continue with email</button>
        <small className="mx-auto p-3 d-block">We won't share your personal details with anyone</small>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.loginReducer.modal,
    phonestep1: state.loginReducer.phonestep1,
    phonestep2: state.loginReducer.phonestep2,
    phonestep3: state.loginReducer.phonestep3,
    phonestep4: state.loginReducer.phonestep4,
    user: state.loginReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    modalHandler: (trigger) => dispatch(modalHandle(trigger)),
    stepHandler1: (stepTrigger) => dispatch(phoneStep1(stepTrigger)),
    stepHandler2: (stepTrigger) => dispatch(phoneStep2(stepTrigger)),
    stepHandler3: (stepTrigger) => dispatch(phoneStep3(stepTrigger)),
    stepHandler4: (stepTrigger) => dispatch(phoneStep4(stepTrigger)),
    userData: (data) => dispatch(userData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonestep1);
