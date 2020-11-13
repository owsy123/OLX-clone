import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Modal } from "react-bootstrap";
import Phonestep1 from "./Phonestep1";
import Phonestep2 from "./PhoneStep2";
import Phonestep3 from "./phoneStep3";
import "../styles/Header.css";
import notificationBg from "../images/notifications.png";
import { firebaseApp } from "../config/firebase_setup";
import { connect } from "react-redux";
import { modalHandle, phoneStep1, phoneStep2, phoneStep3, phoneStep4, userData } from "../storage/action/loginAction";

const Login = (props) => {
  console.log("====>>>>Login", props);
  firebaseApp.auth().onAuthStateChanged((result) => {
    if (result !== null) {
      props.userData(result);
    } else {
      props.userData(null);
    }
  });

  const phonelogFunc = () => {
    if (props.phonestep1 === true) {
      return <Phonestep1 />;
    } else if (props.phonestep2 === true) {
      return <Phonestep2 />;
    } else if (props.phonestep3 === true) {
      return <Phonestep3 />;
    }
  };

  const closeDialog = () => {
    console.log("aa");
    props.modalHandler(false);
    props.stepHandler1(true);
    props.stepHandler2(false);
    props.stepHandler3(false);
  };

  const signOutFunc = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        // props.userData(null)
        // console.log("signOut");
      })
      .catch(function (error) {
        // An error happened.
        // console.log("signOut Failed");
      });
  };

  return (
    <div>
      { props &&
        <div>
          {props.user === null && (
            <div className="mt-2 mr-3">
              <Nav.Link onClick={() => props.modalHandler(true)} className="login my-auto" data-toggle="modal" data-target="#staticBackdrop">
                Login
              </Nav.Link>

              <Modal className="modol-dia" show={props.modal} onHide={() => props.modalHandler(false)} backdrop="static" keyboard={false} centered>
                <Modal.Dialog className="modalDialog">
                  <Modal.Header className="modalContent">
                    <i className="fa fa-times close" onClick={closeDialog} aria-hidden="true"></i>
                  </Modal.Header>
                  <Modal.Body>{phonelogFunc()}</Modal.Body>
                </Modal.Dialog>
              </Modal>
            </div>
          )}
          {props.user !== null && (
            <div className="d-flex mx-3  h-100 logged-icons">
              <Nav.Link className="my-auto chat-icon">
                <i className="fa fa-comment-o" aria-hidden="true"></i>
              </Nav.Link>
              <Nav.Link
                className="my-auto notification-icon"
                role="button"
                id="dropdownNotificaton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="fa fa-bell-o" aria-hidden="true"></i>
                <div className="dropdown ">
                  <div className="dropdown-menu dropdown-menu-right mt-4 notificationDropdown" aria-labelledby="dropdownNotificaton">
                    <div className="dropdown-item text-center mt-4">
                      <p>No notifications</p>
                      <small>Check back here for updates!</small>
                    </div>
                    <img src={notificationBg} className="notificationDropBg" alt="" />
                  </div>
                </div>
              </Nav.Link>
              <div className="dropdown w-100">
                <Link
                  className="logged"
                  to="#"
                  role="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  {props.user.email !== null ? (
                    <span className="avatar-div">{props.user.email[0].toUpperCase()}</span>
                  ) : (
                    <span className="avatar-div">A</span>
                  )}
                  <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                </Link>
                <div className="dropMenu">
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item userDisplay" to="#">
                      <div className="row">
                        <div className="col-3">
                          {props.user.email !== null && <span className="avatar-div">{props.user.email[0].toUpperCase()}</span>}
                          {props.user.email === null && <span className="avatar-div">A</span>}
                        </div>
                        <div className="col-9">
                          <p className="mb-2">Hello,</p>
                          <h5> {props.user.email !== null ? props.user.displayName : `${props.user.phoneNumber}`}</h5>
                        </div>
                      </div>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      <i className="fa fa-file-text-o " aria-hidden="true"></i>
                      My ads
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="fa fa-clipboard " aria-hidden="true"></i>
                      Buy Business Packages
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="fa fa-credit-card " aria-hidden="true"></i>
                      Bought Packages and Billing
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                      Help
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="fa fa-sliders" aria-hidden="true"></i>
                      Setting
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link onClick={signOutFunc} className="dropdown-item" to="#">
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      }
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
    // stepHandler4: (stepTrigger) => dispatch(phoneStep4(stepTrigger)),
    userData: (data) => dispatch(userData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
