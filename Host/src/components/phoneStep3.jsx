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
  codeDigits1,
  codeDigits2,
  codeDigits3,
  codeDigits4,
  codeDigits5,
  codeDigits6,
  codeDigits,
  userData,
} from "../storage/action/loginAction";
import { firebaseApp } from "../config/firebase_setup";
import { Link } from "react-router-dom";

const PhoneStep3 = (props) => {
  console.log("phone step3 =>>>>>", props);

  // const verify = () => {
  //   var code = props.code;
  //   // console.log(credential)
  //   props.confirmationResultState
  //     .confirm(code)
  //     .then(function (result) {
  //       // User signed in successfully.
  //       var userData = result.user;
  //       userData(userData);
  //     })
  //     .catch(function (error) {
  //       console.log("not sign in ");
  //     });
  // };

  const verify = () => {
    var code = props.code;
    // console.log(credential)
    if (props.sellVerify === "sellVerify") {
      console.log("==>>>> if");
    } else {
      console.log("else");
      props.confirmationResultState
        .confirm(code)
        .then(function (result) {
          // User signed in successfully.
          var userData = result.user;
          userData(userData);
        })
        .catch(function (error) {
          console.log("not sign in ");
        });
    }
  };

  useEffect(() => {
    if (props.codeDigit6.value !== "") {
      props.codeSet(
        props.codeDigit1.value +
          props.codeDigit2.value +
          props.codeDigit3.value +
          props.codeDigit4.value +
          props.codeDigit5.value +
          props.codeDigit6.value
      );
    }
  }, [props.codeDigit6]);

  useEffect(() => {
    if (props.code !== "") {
      verify();
    }
  }, [props.code]);

  return (
    <div>
      <i
        onClick={() => {
          props.stepHandler3(false);
          props.stepHandler2(true);
        }}
        className="fa fa-arrow-left back-arrow"
        aria-hidden="true"></i>
      <div className="text-center">
        <svg width="60px" height="60px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
          <path
            className="rui-77aaa"
            d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
        <h5 className="mt-3">Enter your Code</h5>
      </div>

      <div className="mt-3 p-4 d-flex justify-content-between">
        <p>We sent a 4-digit code to +92{props.phoneNumber}</p>
        <i
          className="fa fa-pencil-square-o mt-2 edit-icon"
          aria-hidden="true"
          onClick={() => {
            props.stepHandler3(false);
            props.stepHandler2(true);
          }}></i>
      </div>

      <div className="d-flex justify-content-around mt-4 code-cont">
        <div className="ww text-center">
          <input
            valu={props.codeDigit1.value}
            onChange={(e) => props.codeDigit1Set(e.target.value, true, false)}
            className="mt-4 text-center code-field"
            disabled={props.codeDigit1.disabled}
            type="text"
            maxLength="1"
          />
        </div>
        <div className="ww text-center">
          <input
            valu={props.codeDigit2.value}
            onChange={(e) => props.codeDigit2Set(e.target.value, true, false)}
            className="mt-4 text-center code-field"
            disabled={props.codeDigit2.disabled}
            type="text"
            maxLength="1"
          />
        </div>
        <div className="ww text-center">
          <input
            valu={props.codeDigit3.value}
            onChange={(e) => props.codeDigit3Set(e.target.value, true, false)}
            className="mt-4 text-center code-field"
            disabled={props.codeDigit3.disabled}
            type="text"
            maxLength="1"
          />
        </div>
        <div className="ww text-center">
          <input
            valu={props.codeDigit4.value}
            onChange={(e) => props.codeDigit4Set(e.target.value, true, false)}
            className="mt-4 text-center code-field"
            disabled={props.codeDigit4.disabled}
            type="text"
            maxLength="1"
          />
        </div>
        <div className="ww text-center">
          <input
            valu={props.codeDigit5.value}
            onChange={(e) => props.codeDigit5Set(e.target.value, true, false)}
            className="mt-4 text-center code-field"
            disabled={props.codeDigit5.disabled}
            type="text"
            maxLength="1"
          />
        </div>
        <div className="ww text-center">
          <input
            valu={props.codeDigit6.value}
            onChange={(e) => props.codeDigit6Set(e.target.value, true, false)}
            className="mt-4 text-center code-field"
            disabled={props.codeDigit6.disabled}
            type="text"
            maxLength="1"
          />
        </div>
      </div>

      <div className="d-flex flex-column mt-5">
        <Link to="#" className="p-2 resend-link">
          RESEND CODE BY SMS
        </Link>
        <Link to="#" className="p-2 resend-link">
          RESEND CODE BY CALL
        </Link>
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
    codeDigit1: state.loginReducer.codeDigit1,
    codeDigit2: state.loginReducer.codeDigit2,
    codeDigit3: state.loginReducer.codeDigit3,
    codeDigit4: state.loginReducer.codeDigit4,
    codeDigit5: state.loginReducer.codeDigit5,
    codeDigit6: state.loginReducer.codeDigit6,
    code: state.loginReducer.code,
    confirmationResultState: state.loginReducer.confirmationResultState,
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
    setNumber: (number) => dispatch(phoneNumberSet(number)),
    nextBtn: (status) => dispatch(nextButton(status)),
    codeDigit1Set: (value, digit1Status, digit2Status) => dispatch(codeDigits1(value, digit1Status, digit2Status)),
    codeDigit2Set: (value, digit2Status, digit3Status) => dispatch(codeDigits2(value, digit2Status, digit3Status)),
    codeDigit3Set: (value, digit3Status, digit4Status) => dispatch(codeDigits3(value, digit3Status, digit4Status)),
    codeDigit4Set: (value, digit4Status, digit5Status) => dispatch(codeDigits4(value, digit4Status, digit5Status)),
    codeDigit5Set: (value, digit5Status, digit6Status) => dispatch(codeDigits5(value, digit5Status, digit6Status)),
    codeDigit6Set: (value, digit6Status) => dispatch(codeDigits6(value, digit6Status)),
    codeSet: (value) => dispatch(codeDigits(value)),
    userData: (data) => dispatch(userData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneStep3);
