import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  modalHandle,
  phoneStep1,
  phoneStep2,
  phoneStep3,
  phoneStep4,
  phoneNumberSet,
  nextButton,
  recaptchaSet,
  confirmationResultState,
} from "../storage/action/loginAction";
import { firebaseApp } from "../config/firebase_setup";

const PhoneStep2 = (props) => {
  const onSignInSubmit = () => {
    if (props.phonestep2 === true) {
      var Number = "+92" + props.phoneNumber;
      var appVerifier = props.recaptcha;
      firebaseApp
        .auth()
        .signInWithPhoneNumber(Number, appVerifier)
        .then(function (confirmationResult) {
          props.confirmationResult(confirmationResult);
          props.stepHandler2(false);
          props.stepHandler3(true);
          console.log("message send");
        })
        .catch(function (error) {
          console.log("message not send");
        });
    }
  };

  useEffect(() => {
    if (props.phonestep2 === true) {
      var recaptcha = new firebaseApp.auth.RecaptchaVerifier("recaptcha-container", {
        size: "normal",
        callback: function (response) {
          props.nextBtn(true);
        },
        "expired-callback": function () {
          props.nextBtn(false);
        },
      });
      recaptcha.render().then(function (widgetId) {
        window.recaptchaWidgetId = widgetId;
      });
      props.recaptchaSet(recaptcha);
    }
  }, [props.phonestep2]);

  return (
    <div className="">
      {props.sellVerify !== "sellVerify" && (
        <i
          onClick={() => {
            props.stepHandler1(true);
            props.stepHandler2(false);
          }}
          className="fa fa-arrow-left back-arrow"
          aria-hidden="true"></i>
      )}
      <div className="text-center">
        <svg width="60px" height="60px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
          <path
            className="rui-77aaa"
            d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
        <h5 className="mt-3">Enter your Number</h5>
      </div>

      <div className="phoneInp mt-5">
        <div className="input-group h-100">
          <div className="input-group-prepend">
            <span className="input-group-text my-auto" id="basic-addon1">
              +92
            </span>
          </div>
          <input
            value={props.phoneNumber}
            onChange={(e) => {
              props.setNumber(e.target.value);
            }}
            type="text"
            className="form-control phoneInp-field my-auto"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div id="recaptcha-container" className="rep-cont"></div>

      <div className="mx-auto text-center phoneLog-btn">
        {Number.isNaN(Number(props.phoneNumber)) ? (
          <button className="btn-block dis-phone-btn text-muted">Next</button>
        ) : props.phoneNumber.length === 10 && props.nextBtnStatus === true ? (
          <button onClick={onSignInSubmit} id="sign-in-button" className="btn-block able-phone-btn">
            Next
          </button>
        ) : (
          <button className="btn-block dis-phone-btn text-muted" disabled>
            Next
          </button>
        )}
      </div>
      <div className="text-center mt-3 w-75 mx-auto">
        <small className="">We won't reveal your phone number to anyone else nor use it to send you spam</small>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.loginReducer.modal,
    phoneNumber: state.loginReducer.phoneNumber,
    phonestep1: state.loginReducer.phonestep1,
    phonestep2: state.loginReducer.phonestep2,
    phonestep3: state.loginReducer.phonestep3,
    phonestep4: state.loginReducer.phonestep4,
    nextBtnStatus: state.loginReducer.nextButton,
    recaptcha: state.loginReducer.recaptcha,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    modalHandler: (trigger) => dispatch(modalHandle(trigger)),
    stepHandler1: (stepTrigger) => dispatch(phoneStep1(stepTrigger)),
    stepHandler2: (stepTrigger) => dispatch(phoneStep2(stepTrigger)),
    stepHandler3: (stepTrigger) => dispatch(phoneStep3(stepTrigger)),
    // stepHandler4: (stepTrigger) => dispatch(phoneStep4(stepTrigger)),
    setNumber: (number) => dispatch(phoneNumberSet(number)),
    nextBtn: (status) => dispatch(nextButton(status)),
    recaptchaSet: (obj) => dispatch(recaptchaSet(obj)),
    confirmationResult: (obj) => dispatch(confirmationResultState(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneStep2);
