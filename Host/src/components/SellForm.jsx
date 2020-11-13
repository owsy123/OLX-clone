import React, { useState, useEffect } from "react";
import { firebaseApp } from "../config/firebase_setup";
import SellHeader from "./SellHeader";
import { connect } from "react-redux";
import PhoneStep2 from "./PhoneStep2";
import PhoneStep3 from "./phoneStep3";
import {
  phoneStep1,
  phoneStep2,
  phoneStep3,
  phoneNumberSet,
  userData,
  nextButton,
  recaptchaSet,
  confirmationResultState,
} from "../storage/action/loginAction";

import {
  categoryIndex,
  sellData,
  uploadedImages,
  currentIndexOfState,
  curretCityLocation,
  sellerName,
  phoneNumber,
  showNumber,
  currentConditionBtn,
  currentTypeBtn,
  sellDiscription,
  sellTitle,
  sellPrice,
  makeOf,
  yearAction,
  kmDrived,
  fuelType,
  areaUnitAction,
  areaValue,
  landTypeAction,
  bedroomsAction,
  bathroomsAction,
  yesOrNoAction,
  propertyTypeAction,
  computerAccessories,
  tvAudioAction,
  cameraTypeAction,
  powerTypeAction,
  jobAdTypeAction,
  positionTypeAction,
  salaryPeriodAction,
  salaryFromAction,
  salaryToAction,
  forAction,
  btnAction,
  firebaseStorage,
  defaultState,
} from "../storage/action/sellActions";
import { Link, useHistory } from "react-router-dom";
import { Modal, Form, Button, InputGroup, FormControl, Col } from "react-bootstrap";
// import {firebaseApp} from "../config/firebase_setup"

const SellForm = (props) => {
  console.log("sell Form  ==>>>>>", props);
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  window.onload = (e) => {
    history.goBack();
  };

  var imageStoreObj;
  const imageFunc = (e, key) => {
    console.log("===> file", e.target.files);
    const data = URL.createObjectURL(e.target.files[0]);
    props.firebaseStorageSet(e.target.files[0]);
    props.uploadedImagesSet(data, key);
  };
  const selectState = (e) => {
    const stateIndex = Number(e.target.value);
    props.currentStateIndexSet(stateIndex);
    props.curretCityLocationSet(null);
  };

  const sellObj = props.sellDataObj;
  var detailValid = "";
  var { adTitle, adDiscription, adPrice, currentState, currentCity, sellerName, phoneNumber } = props;
  var commonValues = { adTitle, adDiscription, adPrice, currentState, currentCity, sellerName, phoneNumber };
  var detailValues;
  var isValid;
  var data;

  function match() {
    if (props.user) {
      var imagesArray = props.images.filter((e) => {
        return e.imageURL !== "";
      });

      if (sellObj.categoryKey == 0) {
        if (sellObj.subCategoryKey === 0 || sellObj.subCategoryKey === 1) {
          detailValid = props.currentCondition.key !== null && props.currentType.key !== null;
          const { currentCondition, currentType } = props;
          detailValues = { currentCondition: currentCondition.name, currentType: currentType.name };
        } else if (sellObj.subCategoryKey === 2) {
          detailValid = props.currentCondition.key !== null && props.make !== "";
          const { currentCondition, make } = props;
          detailValues = { currentCondition: currentCondition.name, make: make };
        }
      } else if (sellObj.categoryKey == 1) {
        if (sellObj.subCategoryKey === 0) {
          const { currentCondition, currentFuel, make, year, kmDriven } = props;
          detailValid = currentFuel.key !== null && make !== "" && year !== "" && kmDriven !== "" && currentCondition.key !== null;
          detailValues = { currentCondition: currentCondition.name, make: make, year: year, kmDriven: kmDriven };
        } else if (sellObj.subCategoryKey === 1 || sellObj.subCategoryKey === 5 || sellObj.subCategoryKey === 6) {
          const { currentCondition } = props;
          detailValid = currentCondition.key !== null;
          detailValues = { currentCondition: currentCondition.name };
        } else if (sellObj.subCategoryKey === 2) {
          const { currentCondition, currentType } = props;
          detailValid = currentCondition.key !== null && currentType.key !== null;
          detailValues = { currentCondition: currentCondition.name, currentType: currentType.name };
        } else if (sellObj.subCategoryKey === 3 || sellObj.subCategoryKey === 4 || sellObj.subCategoryKey === 7) {
          const { currentCondition, year, kmDriven } = props;
          detailValid = year !== "" && kmDriven !== "" && currentCondition.key !== null;
          detailValues = { currentCondition: currentCondition.name, year: year, kmDriven: kmDriven };
        }
      } else if (sellObj.categoryKey == 2) {
        if (sellObj.subCategoryKey === 0) {
          const { landType, area, areaUnit } = props;
          detailValid = areaUnit.key !== null && landType !== "" && area !== "";
          detailValues = { areaUnit: areaUnit.name, landType: landType, area: area };
        } else if (sellObj.subCategoryKey === 1 || sellObj.subCategoryKey === 2 || sellObj.subCategoryKey === 4) {
          const { area, areaUnit, bedrooms, bathrooms, yesOrNo } = props;
          detailValid = yesOrNo.key !== null && areaUnit.key !== null && area !== "" && bedrooms !== "" && bathrooms !== "";
          detailValues = { areaUnit: areaUnit.name, area: area, bedrooms: bedrooms, bathrooms: bathrooms, yesOrNo: yesOrNo.name };
        } else if (sellObj.subCategoryKey === 3) {
          const { areaUnit, propertyType } = props;
          detailValid = areaUnit.key !== null && propertyType.key !== null;
          detailValues = { areaUnit: areaUnit.name, propertyType: propertyType.name };
        }
      } else if (sellObj.categoryKey == 3) {
        if (sellObj.subCategoryKey === 0 || sellObj.subCategoryKey === 1 || sellObj.subCategoryKey === 2) {
          const { area, areaUnit, bedrooms, bathrooms, yesOrNo } = props;
          detailValid = yesOrNo.key !== null && areaUnit.key !== null && landType !== "" && area !== "" && bedrooms !== "" && bathrooms !== "";
          detailValues = { areaUnit: areaUnit.name, area: area, bedrooms: bedrooms, bathrooms: bathrooms, yesOrNo: yesOrNo.name };
        } else if (sellObj.subCategoryKey === 3) {
          const { propertyType, areaUnit } = props;
          detailValid = areaUnit.key !== null && propertyType.key !== null;
          detailValues = { areaUnit: areaUnit.name, propertyType: propertyType.name };
        } else if (sellObj.subCategoryKey === 4) {
          detailValid = true;
          detailValues = {};
        } else if (sellObj.subCategoryKey === 5) {
          const { yesOrNo } = props;
          detailValid = yesOrNo.key !== null;
          detailValues = { yesOrNo: yesOrNo.name };
        } else if (sellObj.subCategoryKey === 6) {
          const { bedrooms, bathrooms } = props;
          detailValid = bedrooms !== "" && bathrooms !== "";
          detailValues = { bedrooms: bedrooms, bathrooms: bathrooms };
        } else if (sellObj.subCategoryKey === 7) {
          const { landType, areaUnit } = props;
          detailValid = areaUnit.key !== null && landType !== "";
          detailValues = { areaUnit: areaUnit.name, landType: landType };
        }
      } else if (sellObj.categoryKey == 4) {
        if (sellObj.subCategoryKey === 0) {
          const { currentCondition, compAccessoriesType } = props;
          detailValid = currentCondition.key !== null && compAccessoriesType !== "";
          detailValues = { currentCondition: currentCondition.name, compAccessoriesType: compAccessoriesType };
        } else if (sellObj.subCategoryKey === 1) {
          const { currentCondition, tvAudioType } = props;
          detailValid = currentCondition.key !== null && tvAudioType.key !== null;
          detailValues = { currentCondition: currentCondition.name, tvAudioType: tvAudioType.name };
        } else if (sellObj.subCategoryKey === 2) {
          const { currentCondition, cameraType } = props;
          detailValid = currentCondition.key !== null && cameraType.key !== null;
          detailValues = { currentCondition: currentCondition.name, cameraType: cameraType.name };
        } else if (
          sellObj.subCategoryKey === 3 ||
          sellObj.subCategoryKey === 4 ||
          sellObj.subCategoryKey === 6 ||
          sellObj.subCategoryKey === 7 ||
          sellObj.subCategoryKey === 8 ||
          sellObj.subCategoryKey === 9
        ) {
          const { currentCondition } = props;
          detailValid = currentCondition.key !== null;
          detailValues = { currentCondition: currentCondition.name };
        } else if (sellObj.subCategoryKey === 5) {
          const { currentCondition, powerType } = props;
          detailValid = currentCondition.key !== null && powerType.key !== null;
          detailValues = { currentCondition: currentCondition.name, powerType: powerType.name };
        }
      } else if (sellObj.categoryKey == 5) {
        if (sellObj.subCategoryKey === 0) {
          const { currentCondition, make, year } = props;
          detailValid = make !== "" && year !== "" && currentCondition.key !== null;
          detailValues = { currentCondition: currentCondition.name, make: make, year: year };
        } else if (sellObj.subCategoryKey === 1 || sellObj.subCategoryKey === 2 || sellObj.subCategoryKey === 3 || sellObj.subCategoryKey === 4) {
          const { currentCondition } = props;
          detailValid = currentCondition.key !== null;
          detailValues = { currentCondition: currentCondition.name };
        }
      } else if (sellObj.categoryKey == 6 || sellObj.categoryKey == 7) {
        detailValid = true;
        detailValues = {};
      } else if (sellObj.categoryKey == 8) {
        const { jobAdType, positionType, salaryPeriod, salaryFrom, salaryTo } = props;
        detailValid = jobAdType.key !== null && positionType.key !== null && salaryPeriod.key !== null && salaryFrom !== "" && salaryTo !== "";
        detailValues = {
          jobAdType: jobAdType.name,
          positionType: positionType.name,
          salaryPeriod: salaryPeriod.name,
          salaryFrom: salaryFrom,
          salaryTo: salaryTo,
        };
      } else if (sellObj.categoryKey == 9) {
        detailValid = true;
        detailValues = {};
      } else if (sellObj.categoryKey == 10) {
        const { currentCondition } = props;
        detailValid = currentCondition.key !== null;
        detailValues = { currentCondition: currentCondition.name };
      } else if (sellObj.categoryKey == 11) {
        if (sellObj.subCategoryKey === 0 || sellObj.subCategoryKey === 1 || sellObj.subCategoryKey === 2 || sellObj.subCategoryKey === 6) {
          const { currentCondition, clothFor } = props;
          detailValid = currentCondition.key !== null && clothFor.key !== null;
          detailValues = { currentCondition: currentCondition.name, clothFor: clothFor.name };
        } else if (
          sellObj.subCategoryKey === 3 ||
          sellObj.subCategoryKey === 4 ||
          sellObj.subCategoryKey === 5 ||
          sellObj.subCategoryKey === 7 ||
          sellObj.subCategoryKey === 8 ||
          sellObj.subCategoryKey === 9
        ) {
          const { currentCondition } = props;
          detailValid = currentCondition.key !== null;
          detailValues = { currentCondition: currentCondition.name };
        }
      } else if (sellObj.categoryKey == 12) {
        const { currentCondition } = props;
        detailValid = currentCondition.key !== null;
        detailValues = { currentCondition: currentCondition.name };
      } else if (sellObj.categoryKey == 13) {
        const { currentCondition } = props;
        detailValid = currentCondition.key !== null;
        detailValues = { currentCondition: currentCondition.name };
      }

      const image = props.imageStoreObj;
      if (image != null) {
        firebaseApp.storage().ref("/").child(`/images/${image.name}`).put(image).on("state_changed",(snapShot) => {
            console.log(snapShot);
          },(error)=>{
            console.log("error ===>> message",error.message)
          },()=>{
            firebaseApp.storage().ref("/").child(`/images/${image.name}`).put(image).snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url)
            })
          });
      }

      data = { ...commonValues, ...detailValues, images: [] };

      isValid =
        props.currentState != null &&
        props.currentCity != null &&
        props.adTitle !== "" &&
        props.adDiscription !== "" &&
        props.adPrice !== null &&
        props.images[0].imageURL !== "" &&
        props.sellerName !== null &&
        props.phoneNumber !== "";

      props.btnFlagSet(isValid && detailValid);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // firebaseApp.storage().ref("/").child(`/images/a.jpeg`).put(image).then((snapShot)=>{
    //         console.log(snapShot)
    //     })
    const { uid } = props.user;
    const payload = data;
    firebaseApp.database().ref("/").child(`ads/${uid}/addList`).push(payload);
    //   // isValid && detailValid ? setValidated(false) : setValidated(true);
    //   const { uid } =  props.user
    //   payload = ["aaa"]
    //   firebaseApp.database().ref("/").child(`ads/${uid}`).push(payload)
  };

  // const sendData1 = (e) => {
  //   e.preventDefault();
  //   const { uid } = props.user;
  //   const payload = data;
  //   firebaseApp.database().ref("/").child(`ads/${uid}/addList`).push(payload);

  // };

  // const sendData2 = (e) => {
  //   e.preventDefault();
  //   const { uid } = props.user;
  //   const payload = ["bbb"];
  //   firebaseApp.database().ref("/").child(`ads/${uid}`).push(payload);
  // };

  const conditionBtn = ["New", "Used"];
  const type = {
    0: {
      0: ["Apple", "Danny Tabs", "Q Tabs"],
      1: ["Apple", "Danny Tabs", "Q Tabs"],
      2: ["", "Apple", "Sammsung", "Oppo", "Infinix", "Vivo", "xiaomi"],
    },
    1: { 0: ["", "Honda", "Suzuki", "Audi", "BMW", "Mercedes", "Toyota"], 1: [], 2: ["Used Part", "New Part"] },
    5: { 0: ["", "Unique", "Honda", "Yahamaha", "BMW", "Kawasaki"] },
  };
  const fuelBtn = ["CNG", "Petrol", "Deisel", "LPG", "Hybrid"];
  const landType = ["", "agriculter", "commercial", "industrial", "files", "plot"];
  const areaUnits = ["Kanal", "Marla", "Square Feet", "Square Meter", "Square Yards"];

  const bedroom = ["", "1", "2", "3", "4", "5", "6+"];
  const bathroom = ["", "1", "2", "3", "4", "5", "6", "7+"];
  const yesNo = ["Yes", "No"];
  const propertyType = ["shop", "office", "warehouse"];
  const compAccessories = ["", "Computer", "Laptop", "Hard disk", "Monitor", "Printer"];
  const tvAudioType = ["TV", "Video-Audio"];
  const cameraType = ["Camera", "Lense", "Camera accessories"];
  const powerType = ["Batteries", "Generator", "Solar", "UPS", "Other"];
  const jobAdType = ["CV & Resumes", "Job offer"];
  const postionType = ["Contract", "Full-Time", "Part-Time", "Temporary"];
  const salaryPeriod = ["Hourly", "Monthly", "Weekly", "Yearly"];
  const clothFor = ["Men", "Women"];

  const [showModal, setShowModal] = useState(false);
  // const phoneVerify

  // const handleClose = () => {
  //   setShowModal(false);
  // };
  // const handleShow = () => {
  //   props.setNumber(props.phoneNumber);
  //   props.stepHandler2(true);
  //   setShowModal(true);
  // };

  useEffect(() => {
    match();
  });

  useEffect(() => {
    props.user && props.sellerNameSet(props.user.displayName);
    // if (props.user) {
    //   userData(props.user);
    // }
  }, [props.user]);

  return (
    <div>
      {/* <Button variant="primary" onClick={sendData1}>
        sendData1
      </Button> */}
      <br />
      {/* <Button variant="primary" onClick={sendData2}>
        sendData2
      </Button> */}
      {/* 
      <Modal className="modol-dia" show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Dialog className="modalDialog">
          <Modal.Header className="modalContent">
            <i
              className="fa fa-times close"
              onClick={() => {
                setShowModal(false);
                props.stepHandler2(true);
                props.stepHandler3(false);
              }}
              aria-hidden="true"></i>
          </Modal.Header>
          <Modal.Body>
            {props.phonestep2 && <PhoneStep2 sellVerify="sellVerify" />}
            {props.phonestep3 && <PhoneStep3 sellVerify="sellVerify" />}
          </Modal.Body>
        </Modal.Dialog>
      </Modal> */}

      {/* </Modal> */}

      <SellHeader headerHeading="Post Your Ads" />
      <div className="row m-0">
        {/* <form> */}
        <Form noValidate validated={validated} className="mt-4">
          <div className="formContainer p-0 col-12 col-md-10 col-lg-7 mt-5 mx-auto">
            <div className="formHeader p-4">
              <h5 className="m-0">Selected Category</h5>
              {/* {props !== null ? console.log("prop ===>",):"null"} */}
              {props &&
                (props.sellDataObj ? (
                  <small className="text-muted">{`${props.sellDataObj.categoryName} / ${props.sellDataObj.subCategoryName}`}</small>
                ) : null)}
            </div>

            <div className="dropdown-divider mt-0"></div>
            <div className="detailContanier p-4">
              <div className="detailContainerHeading">
                <h5>INCLUDE SOME DETAILS</h5>
              </div>

              <div className="mt-3">
                {sellObj && (
                  <div>
                    <div>
                      {sellObj.categoryKey === 0 && (
                        <div>
                          {(sellObj.subCategoryKey == 0 || sellObj.subCategoryKey == 1) && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Condition</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {conditionBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentConditionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>

                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Type</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {/* {console.log()} */}
                                      {type[sellObj.categoryKey][sellObj.subCategoryKey].map((item, key) => {
                                        // console.log(item);
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={()=>currentTypeSet()} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentType.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentTypeSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}

                          {sellObj.subCategoryKey == 2 && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                    <Form.Label>Make</Form.Label>
                                    {/* <div className="selectOfDetailContainer d-block"> */}
                                    <Form.Control as="select" custom defaultValue="" onChange={(e) => props.makeSet(e.target.value)} required>
                                      {/* {console.log(type[sellObj.categoryKey])} */}
                                      {type[sellObj.categoryKey][sellObj.subCategoryKey].map((item, key) => {
                                        return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                      })}
                                    </Form.Control>
                                    {/* </div> */}
                                  </Form.Group>
                                </Col>
                              </Form.Row>

                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Condition</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {conditionBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentConditionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      {sellObj.categoryKey === 1 && (
                        <div>
                          {sellObj.subCategoryKey == 0 && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                    <Form.Label>Make</Form.Label>
                                    {/* <div className="selectOfDetailContainer d-block"> */}
                                    <Form.Control as="select" onChange={(e) => props.makeSet(e.target.value)} custom defaultValue="" required>
                                      {/* {console.log(type[sellObj.categoryKey])} */}
                                      {type[sellObj.categoryKey][sellObj.subCategoryKey].map((item, key) => {
                                        return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                      })}
                                    </Form.Control>
                                    {/* </div> */}
                                  </Form.Group>
                                </Col>
                              </Form.Row>

                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="adTitle">
                                    <Form.Label>Year *</Form.Label>
                                    <Form.Control defaultValue={props.year} onChange={(e) => props.yearSet(e.target.value)} required />
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="adTitle">
                                    <Form.Label>KM Driven *</Form.Label>
                                    <Form.Control defaultValue={props.kmDriven} onChange={(e) => props.kmDrivedSet(e.target.value)} required />
                                  </Form.Group>
                                </Col>
                              </Form.Row>

                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Fuel</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {fuelBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentFuel.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={() => props.fuelTypeSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>

                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Condition</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {conditionBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentConditionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}
                          {/* </div>
                           )} */}
                          <div>
                            {sellObj.subCategoryKey == 1 && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Condition</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {conditionBtn.map((item, key) => {
                                          // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                          return (
                                            <Button
                                              className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.currentConditionSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                          <div>
                            {sellObj.subCategoryKey == 2 && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Condition</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {conditionBtn.map((item, key) => {
                                          // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                          return (
                                            <Button
                                              className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.currentConditionSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Type</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {type[sellObj.categoryKey][sellObj.subCategoryKey].map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.currentType.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={() => props.currentTypeSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                          <div>
                            {(sellObj.subCategoryKey == 3 || sellObj.subCategoryKey == 4 || sellObj.subCategoryKey == 7) && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="adTitle">
                                      <Form.Label>Year *</Form.Label>
                                      <Form.Control defaultValue={props.year} onChange={(e) => props.yearSet(e.target.value)} required />
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="adTitle">
                                      <Form.Label>KM Driven *</Form.Label>
                                      <Form.Control defaultValue={props.kmDriven} onChange={(e) => props.kmDrivedSet(e.target.value)} required />
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Condition</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {conditionBtn.map((item, key) => {
                                          // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                          return (
                                            <Button
                                              className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.currentConditionSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                          <div>
                            {(sellObj.subCategoryKey == 5 || sellObj.subCategoryKey == 6) && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Condition</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {conditionBtn.map((item, key) => {
                                          // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                          return (
                                            <Button
                                              className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.currentConditionSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      {sellObj.categoryKey === 2 && (
                        <div>
                          <div>
                            {sellObj.subCategoryKey === 0 && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                      <Form.Label>Type</Form.Label>
                                      <Form.Control as="select" onChange={(e) => props.landTypeSet(e.target.value)} custom defaultValue="" required>
                                        {landType.map((item, key) => {
                                          return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                        })}
                                      </Form.Control>
                                      {/* </div> */}
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="sellerNameFeild">
                                      <Form.Label>Area *</Form.Label>
                                      <Form.Control defaultValue={props.area} onChange={(e) => props.areaSet(e.target.value)} required />
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Area Unit</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {areaUnits.map((item, key) => {
                                          // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                          return (
                                            <Button
                                              className={key == props.areaUnit.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.areaUnitSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>

                          <div>
                            {(sellObj.subCategoryKey === 1 || sellObj.subCategoryKey === 2 || sellObj.subCategoryKey === 4) && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                      <Form.Label>Bedrooms *</Form.Label>
                                      <Form.Control as="select" onChange={(e) => props.bedroomsSet(e.target.value)} custom defaultValue="" required>
                                        {bedroom.map((item, key) => {
                                          return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                        })}
                                      </Form.Control>
                                      {/* </div> */}
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                      <Form.Label>Bathrooms *</Form.Label>
                                      <Form.Control as="select" onChange={(e) => props.bathroomsSet(e.target.value)} custom defaultValue="" required>
                                        {bathroom.map((item, key) => {
                                          return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                        })}
                                      </Form.Control>
                                      {/* </div> */}
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Area Unit</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {areaUnits.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.areaUnit.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.areaUnitSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="sellerNameFeild">
                                      <Form.Label>Area *</Form.Label>
                                      <Form.Control defaultValue={props.area} onChange={(e) => props.areaSet(e.target.value)} required />
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Furnished</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {yesNo.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.yesOrNo.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.yesOrNoSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>

                          <div>
                            {sellObj.subCategoryKey === 3 && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Type</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {propertyType.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.propertyType.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.propertyTypeSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Area Unit</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {areaUnits.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.areaUnit.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.areaUnitSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      {sellObj.categoryKey === 3 && (
                        <div>
                          <div>
                            {(sellObj.subCategoryKey == 0 || sellObj.subCategoryKey == 1 || sellObj.subCategoryKey == 2) && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                      <Form.Label>Bedrooms *</Form.Label>
                                      <Form.Control as="select" onChange={(e) => props.bedroomsSet(e.target.value)} custom defaultValue="" required>
                                        {bedroom.map((item, key) => {
                                          return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                        })}
                                      </Form.Control>
                                      {/* </div> */}
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                      <Form.Label>Bathrooms *</Form.Label>
                                      <Form.Control as="select" onChange={(e) => props.bathroomsSet(e.target.value)} custom defaultValue="" required>
                                        {bathroom.map((item, key) => {
                                          return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                        })}
                                      </Form.Control>
                                      {/* </div> */}
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Area Unit</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {areaUnits.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.areaUnit.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.areaUnitSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="sellerNameFeild">
                                      <Form.Label>Area *</Form.Label>
                                      <Form.Control defaultValue={props.area} onChange={(e) => props.areaSet(e.target.value)} required />
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Furnished</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {yesNo.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.yesOrNo.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.yesOrNoSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                          <div>
                            {sellObj.subCategoryKey === 3 && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Type</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {propertyType.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.propertyType.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.propertyTypeSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Area Unit</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {areaUnits.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.areaUnit.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.areaUnitSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                          <div>
                            {sellObj.subCategoryKey === 5 && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Furnished</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {yesNo.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.yesOrNo.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.yesOrNoSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                          <div>
                            {sellObj.subCategoryKey === 6 && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                      <Form.Label>Bedrooms *</Form.Label>
                                      <Form.Control as="select" onChange={(e) => props.bedroomsSet(e.target.value)} custom defaultValue="" required>
                                        {bedroom.map((item, key) => {
                                          return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                        })}
                                      </Form.Control>
                                      {/* </div> */}
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                      <Form.Label>Bathrooms *</Form.Label>
                                      <Form.Control as="select" onChange={(e) => props.bathroomsSet(e.target.value)} custom defaultValue="" required>
                                        {bathroom.map((item, key) => {
                                          return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                        })}
                                      </Form.Control>
                                      {/* </div> */}
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                          <div>
                            {sellObj.subCategoryKey === 7 && (
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                      <Form.Label>Type</Form.Label>
                                      <Form.Control as="select" onChange={(e) => props.landTypeSet(e.target.value)} custom defaultValue="" required>
                                        {landType.map((item, key) => {
                                          return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                        })}
                                      </Form.Control>
                                      {/* </div> */}
                                    </Form.Group>
                                  </Col>
                                </Form.Row>

                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Area Unit</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {areaUnits.map((item, key) => {
                                          return (
                                            <Button
                                              className={key == props.areaUnit.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.areaUnitSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      {sellObj.categoryKey === 4 && (
                        <div>
                          {sellObj.subCategoryKey == 0 && (
                            <div>
                              <div>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="selectOfDetailContainer" controlId="makeSelect">
                                      <Form.Label>Type</Form.Label>
                                      <Form.Control
                                        as="select"
                                        onChange={(e) => props.computerAccessoriesSet(e.target.value)}
                                        custom
                                        defaultValue=""
                                        required>
                                        {compAccessories.map((item, key) => {
                                          return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                        })}
                                      </Form.Control>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                                <Form.Row>
                                  <Col xs={12} md={6}>
                                    <Form.Group className="">
                                      <Form.Label>Condition</Form.Label>
                                      <div className="buttonOfDetailContainer d-block">
                                        {conditionBtn.map((item, key) => {
                                          // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                          return (
                                            <Button
                                              className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                              onClick={(e) => props.currentConditionSet(key, item)}
                                              key={key}>
                                              {item}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                              </div>
                            </div>
                          )}

                          {sellObj.subCategoryKey == 1 && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Condition</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {conditionBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentConditionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>

                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Type</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {tvAudioType.map((item, key) => {
                                        return (
                                          <Button
                                            className={key == props.tvAudioType.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.tvAudioActionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}
                          {sellObj.subCategoryKey == 2 && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Condition</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {conditionBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentConditionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>

                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Type</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {cameraType.map((item, key) => {
                                        return (
                                          <Button
                                            className={key == props.cameraType.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.cameraTypeSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}
                          {(sellObj.subCategoryKey == 3 ||
                            sellObj.subCategoryKey == 4 ||
                            sellObj.subCategoryKey == 6 ||
                            sellObj.subCategoryKey == 7 ||
                            sellObj.subCategoryKey == 8 ||
                            sellObj.subCategoryKey == 9) && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Condition</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {conditionBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentConditionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}

                          {sellObj.subCategoryKey == 5 && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Condition</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {conditionBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentConditionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Type</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {powerType.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.powerType.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.powerTypeSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      {sellObj.categoryKey === 5 && (
                        <div>
                          {sellObj.subCategoryKey == 0 && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="selectOfDetailContainer" controlId="makeSelect2">
                                    <Form.Label>Make</Form.Label>
                                    <Form.Control as="select" custom defaultValue="" onChange={(e) => props.makeSet(e.target.value)} required>
                                      {type[sellObj.categoryKey][sellObj.subCategoryKey].map((item, key) => {
                                        return item !== "" ? <option key={key}>{item}</option> : <option key={key} disabled></option>;
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="adTitle">
                                    <Form.Label>Year *</Form.Label>
                                    <Form.Control defaultValue={props.year} onChange={(e) => props.yearSet(e.target.value)} required />
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Condition</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {conditionBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentConditionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}
                          {(sellObj.subCategoryKey == 1 ||
                            sellObj.subCategoryKey == 2 ||
                            sellObj.subCategoryKey == 3 ||
                            sellObj.subCategoryKey == 4) && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>Condition</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {conditionBtn.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.currentConditionSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      {sellObj.categoryKey === 8 && (
                        <div>
                          <div>
                            <Form.Row>
                              <Col xs={12} md={6}>
                                <Form.Group className="">
                                  <Form.Label>Ad Type</Form.Label>
                                  <div className="buttonOfDetailContainer d-block">
                                    {jobAdType.map((item, key) => {
                                      // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                      return (
                                        <Button
                                          className={key == props.jobAdType.key ? "activeDetailBtn " : "conditionBtn"}
                                          onClick={(e) => props.jobAdTypeSet(key, item)}
                                          key={key}>
                                          {item}
                                        </Button>
                                      );
                                    })}
                                  </div>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col xs={12} md={6}>
                                <Form.Group className="">
                                  <Form.Label>Position Type</Form.Label>
                                  <div className="buttonOfDetailContainer d-block">
                                    {postionType.map((item, key) => {
                                      // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                      return (
                                        <Button
                                          className={key == props.positionType.key ? "activeDetailBtn " : "conditionBtn"}
                                          onClick={(e) => props.positionTypeSet(key, item)}
                                          key={key}>
                                          {item}
                                        </Button>
                                      );
                                    })}
                                  </div>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col xs={12} md={6}>
                                <Form.Group className="">
                                  <Form.Label>Salary Period</Form.Label>
                                  <div className="buttonOfDetailContainer d-block">
                                    {salaryPeriod.map((item, key) => {
                                      // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                      return (
                                        <Button
                                          className={key == props.salaryPeriod.key ? "activeDetailBtn " : "conditionBtn"}
                                          onClick={(e) => props.salaryPeriodSet(key, item)}
                                          key={key}>
                                          {item}
                                        </Button>
                                      );
                                    })}
                                  </div>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col xs={12} md={6}>
                                <Form.Group className="adTitle">
                                  <Form.Label>Salaray From*</Form.Label>
                                  <Form.Control defaultValue={props.salaryFrom} onChange={(e) => props.salaryFromSet(e.target.value)} required />
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col xs={12} md={6}>
                                <Form.Group className="adTitle">
                                  <Form.Label>Salaray to*</Form.Label>
                                  <Form.Control defaultValue={props.salaryTo} onChange={(e) => props.salaryToSet(e.target.value)} required />
                                </Form.Group>
                              </Col>
                            </Form.Row>
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      {sellObj.categoryKey === 10 && (
                        <div>
                          {/* {sellObj.subCategoryKey == 0 && ( */}
                          <div>
                            <Form.Row>
                              <Col xs={12} md={6}>
                                <Form.Group className="">
                                  <Form.Label>Condition</Form.Label>
                                  <div className="buttonOfDetailContainer d-block">
                                    {conditionBtn.map((item, key) => {
                                      // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                      return (
                                        <Button
                                          className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                          onClick={(e) => props.currentConditionSet(key, item)}
                                          key={key}>
                                          {item}
                                        </Button>
                                      );
                                    })}
                                  </div>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                          </div>
                          {/* )} */}
                        </div>
                      )}
                    </div>
                    <div>
                      {sellObj.categoryKey === 11 && (
                        <div>
                          <Form.Row>
                            <Col xs={12} md={6}>
                              <Form.Group className="">
                                <Form.Label>Condition</Form.Label>
                                <div className="buttonOfDetailContainer d-block">
                                  {conditionBtn.map((item, key) => {
                                    // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                    return (
                                      <Button
                                        className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                        onClick={(e) => props.currentConditionSet(key, item)}
                                        key={key}>
                                        {item}
                                      </Button>
                                    );
                                  })}
                                </div>
                              </Form.Group>
                            </Col>
                          </Form.Row>
                          {(sellObj.subCategoryKey == 0 ||
                            sellObj.subCategoryKey == 1 ||
                            sellObj.subCategoryKey == 2 ||
                            sellObj.subCategoryKey == 6) && (
                            <div>
                              <Form.Row>
                                <Col xs={12} md={6}>
                                  <Form.Group className="">
                                    <Form.Label>For *</Form.Label>
                                    <div className="buttonOfDetailContainer d-block">
                                      {clothFor.map((item, key) => {
                                        // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                        return (
                                          <Button
                                            className={key == props.clothFor.key ? "activeDetailBtn " : "conditionBtn"}
                                            onClick={(e) => props.forSet(key, item)}
                                            key={key}>
                                            {item}
                                          </Button>
                                        );
                                      })}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Form.Row>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      {sellObj.categoryKey === 12 && (
                        <div>
                          <Form.Row>
                            <Col xs={12} md={6}>
                              <Form.Group className="">
                                <Form.Label>Condition</Form.Label>
                                <div className="buttonOfDetailContainer d-block">
                                  {conditionBtn.map((item, key) => {
                                    // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                    return (
                                      <Button
                                        className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                        onClick={(e) => props.currentConditionSet(key, item)}
                                        key={key}>
                                        {item}
                                      </Button>
                                    );
                                  })}
                                </div>
                              </Form.Group>
                            </Col>
                          </Form.Row>
                        </div>
                      )}
                    </div>
                    <div>
                      {sellObj.categoryKey === 13 && (
                        <div>
                          <Form.Row>
                            <Col xs={12} md={6}>
                              <Form.Group className="">
                                <Form.Label>Condition</Form.Label>
                                <div className="buttonOfDetailContainer d-block">
                                  {conditionBtn.map((item, key) => {
                                    // return <Button className={ key === item.id ? "activeDetailBtn":""} onClick={} key={key}>{item.value}</Button>;
                                    return (
                                      <Button
                                        className={key == props.currentCondition.key ? "activeDetailBtn " : "conditionBtn"}
                                        onClick={(e) => props.currentConditionSet(key, item)}
                                        key={key}>
                                        {item}
                                      </Button>
                                    );
                                  })}
                                </div>
                              </Form.Group>
                            </Col>
                          </Form.Row>
                        </div>
                      )}
                    </div>

                    {/* <div>{sellObj.categoryKey === 13 && <div>{sellObj.subCategoryKey == 0 && <div></div>}</div>}</div>
                    <div>{sellObj.categoryKey === 13 && <div>{sellObj.subCategoryKey == 0 && <div></div>}</div>}</div>
                    <div>{sellObj.categoryKey === 13 && <div>{sellObj.subCategoryKey == 0 && <div></div>}</div>}</div>
                    <div>{sellObj.categoryKey === 13 && <div>{sellObj.subCategoryKey == 0 && <div></div>}</div>}</div>
                    <div>{sellObj.categoryKey === 13 && <div>{sellObj.subCategoryKey == 0 && <div></div>}</div>}</div>
                    <div>{sellObj.categoryKey === 13 && <div>{sellObj.subCategoryKey == 0 && <div></div>}</div>}</div>
                    <div>{sellObj.categoryKey === 13 && <div>{sellObj.subCategoryKey == 0 && <div></div>}</div>}</div>
                    <div>{sellObj.categoryKey === 13 && <div>{sellObj.subCategoryKey == 0 && <div></div>}</div>}</div>
                    <div>{sellObj.categoryKey === 13 && <div>{sellObj.subCategoryKey == 0 && <div></div>}</div>}</div> */}
                  </div>
                )}
              </div>

              <div>
                <Form.Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="adTitle">
                      <Form.Label>Ad Title *</Form.Label>
                      <Form.Control defaultValue={props.adTitle} onChange={(e) => props.sellTitleSet(e.target.value)} required />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="adDetail">
                      <Form.Label>Ad Describtion *</Form.Label>
                      <Form.Control
                        defaultValue={props.adDiscription}
                        onChange={(e) => props.sellDiscriptionSet(e.target.value)}
                        type="textarea"
                        as="textarea"
                        rows={6}
                        style={{ resize: "none" }}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </div>
            </div>

            <div className="dropdown-divider mt-0"></div>
            <div className="PriceContanier p-4">
              <div className="priceContainerHeading">
                <h5>SET A PRICE</h5>
              </div>
              <div className="mt-4">
                <Form.Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="reviewAccountPhone">
                      <Form.Label>Price *</Form.Label>
                      <InputGroup className="reviewAccountPhoneField">
                        <InputGroup.Prepend>
                          <InputGroup.Text className="inpPrependText my-auto">RS</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          defaultValue={props.adPrice}
                          onChange={(e) => props.sellPriceSet(e.target.value)}
                          className="h-100 border-0"
                          placeholder="Price"
                          required
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Form.Row>
              </div>
            </div>

            <div className="dropdown-divider mt-0"></div>
            <div className="">
              <div className="photosContainer p-4">
                <div className="photosContainerHeading">
                  <h5>Upload upto 12 photos</h5>
                </div>
                <div className="row">
                  <div className="photosContainerUploads mx-auto ml-md-0 col-10 col-lg-8 row mt-3">
                    {props.images.map((item, key) => {
                      return (
                        <div key={key} className="uploadDiv m-1">
                          {props.images[key].imageURL === "" && (
                            <div>
                              {key == 0 ? (
                                <input type="file" onChange={(e) => imageFunc(e, key)} required />
                              ) : (
                                <input type="file" onChange={(e) => imageFunc(e, key)} required />
                              )}
                              {/* <input type="file" onChange={(e) => imageFunc(e, key)} /> */}
                            </div>
                          )}
                          {props.images[key].imageURL !== "" ? (
                            <div>
                              <i className="fa fa-times imgClose" aria-hidden="true" onClick={() => props.uploadedImagesSet("", key)}></i>
                              <img src={props.images[key].imageURL} />
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <small className="text-danger mt-4">This field is mandatory</small>
              </div>
            </div>
            <div className="dropdown-divider mt-0"></div>

            <div className="locationContanier">
              <div className="p-4">
                <div className="locationContainerHeading">
                  <h5>CONFIRM YOUR LOCATION</h5>
                </div>
                <div className="locationTabs row mt-4 mx-2 ">
                  <div className="col-12 col-sm-6 m-0 text-center py-2 activeTab">List</div>
                  <div className="col-12 col-sm-6 m-0 text-center py-2 ">Current Location</div>
                </div>
                <div className="locationFields mt-4">
                  {/* <Form noValidate validated={validated} className="mt-4"> */}
                  <Form.Group controlId="stateFieldControl">
                    <Form.Label>State *</Form.Label>
                    <Form.Control as="select" size="sm" custom defaultValue="" onChange={(e) => selectState(e)} required>
                      {props.locations.map((item, key) => {
                        if (item.state) {
                          // console.log("===>", item.state);
                          return (
                            <option key={key} value={key}>
                              {item.state}
                            </option>
                          );
                        } else {
                          return <option key={key} disabled></option>;
                        }
                      })}
                    </Form.Control>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Looks bad!</Form.Control.Feedback>
                  </Form.Group>

                  {/* {console.log(props.locations[props.currentStateIndex])} */}
                  {props.currentState && (
                    <Form.Group controlId="cityFieldControl">
                      <Form.Label>City *</Form.Label>
                      <Form.Control
                        as="select"
                        size="sm"
                        custom
                        defaultValue=""
                        onChange={(e) => props.curretCityLocationSet(e.target.value)}
                        required>
                        {props.locations[props.currentStateIndex].cities.map((item, key) => {
                          if (item) {
                            return <option key={key}>{item}</option>;
                          } else {
                            return <option key={key} disabled></option>;
                          }
                        })}
                      </Form.Control>
                      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Looks bad!</Form.Control.Feedback>
                    </Form.Group>
                  )}
                  {/* </Form> */}
                </div>
                <small className="text-danger mt-3">This field is mandatory</small>

                <br />
              </div>
            </div>

            <div className="dropdown-divider mt-0"></div>
            {props.user && (
              <div className="reviewDetailContanier p-4">
                <div className="reviewDetailContanierHeading">
                  <h5>REVIEW YOUR DETAILS</h5>
                </div>
                {props.user.email && (
                  <div className="row mt-4">
                    <div className="avatarDivForReview m-0 col-12 col-md-3 col-lg-2 text-center">
                      <span className="avatarReview-div">{props.user.email[0].toUpperCase()}</span>
                    </div>
                    <div className="sellerNameContainer m-0 col-12 col-md-8 col-lg-5 pt-2">
                      <Form.Group className="sellerNameFeild">
                        <Form.Label>Name</Form.Label>
                        <Form.Control size="lg" defaultValue={props.sellerName} onChange={(e) => props.sellerNameSet(e.target.value)} required />
                      </Form.Group>
                    </div>
                  </div>
                )}

                <div className="verifyAccountContainer my-4">
                  <h6>Let's verify your account</h6>
                </div>
                <p>We will send you a confirmation code by sms on the next step.</p>
                <div>
                  <Form.Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="reviewAccountPhone">
                        <Form.Label>Phone Number *</Form.Label>
                        <InputGroup className="reviewAccountPhoneField">
                          <InputGroup.Prepend>
                            <InputGroup.Text className="inpPrependText my-auto">+92</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            defaultValue={props.phoneNumber}
                            onChange={(e) => props.phoneNumberSet(`${e.target.value}`)}
                            className="h-100 border-0"
                            placeholder="Phone Number"
                            required
                          />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </div>
                <div className="row">
                  <div className="numberToggle col-12 col-sm-6 row mt-3">
                    <div className="col col-sm-10">
                      <p>Show my phone number on my ads</p>
                    </div>
                    <div className="col col-sm-2">
                      <Form.Check
                        type="switch"
                        className="phoneSwitchColor"
                        id="phoneSwitch"
                        label=""
                        onChange={(e) => props.showNumberSet(e.target.checked)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="dropdown-divider mt-0"></div>
            <div className="submitContanier">
              <div className="submitButton p-4">
                <Button
                  type="button"
                  className={props.btnFlag ? "ableSubmit" : "disSubmit"}
                  onClick={(e) => handleSubmit(e)}
                  disabled={!props.btnFlag}>
                  Submit
                </Button>

                {/* {btnFlag ? (
                  <Button type="button" onClick={(e) => handleSubmit(e)}>
                    Submit
                  </Button>
                ) : (
                  <Button type="button" dis >
                    Submit
                  </Button>
                )} */}
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    index: state.sellReducer.index,
    sellDataObj: state.sellReducer.sellDataObj,
    images: state.sellReducer.images,
    locations: state.sellReducer.locations,
    currentState: state.sellReducer.currentState,
    currentCity: state.sellReducer.currentCity,
    currentStateIndex: state.sellReducer.currentStateIndex,
    sellerName: state.sellReducer.sellerName,
    phoneNumber: state.sellReducer.phoneNumber,
    showPhoneNumber: state.sellReducer.showPhoneNumber,
    currentCondition: state.sellReducer.currentCondition,
    currentType: state.sellReducer.currentType,
    adTitle: state.sellReducer.adTitle,
    adDiscription: state.sellReducer.adDiscription,
    adPrice: state.sellReducer.adPrice,
    make: state.sellReducer.make,
    year: state.sellReducer.year,
    kmDriven: state.sellReducer.kmDriven,
    currentFuel: state.sellReducer.currentFuel,
    areaUnit: state.sellReducer.areaUnit,
    area: state.sellReducer.area,
    landType: state.sellReducer.landType,
    bathrooms: state.sellReducer.bathrooms,
    bedrooms: state.sellReducer.bedrooms,
    yesOrNo: state.sellReducer.yesOrNo,
    propertyType: state.sellReducer.propertyType,
    compAccessoriesType: state.sellReducer.compAccessoriesType,
    tvAudioType: state.sellReducer.tvAudioType,
    cameraType: state.sellReducer.cameraType,
    powerType: state.sellReducer.powerType,
    jobAdType: state.sellReducer.jobAdType,
    positionType: state.sellReducer.positionType,
    salaryPeriod: state.sellReducer.salaryPeriod,
    salaryFrom: state.sellReducer.salaryFrom,
    salaryTo: state.sellReducer.salaryTo,
    clothFor: state.sellReducer.clothFor,
    btnFlag: state.sellReducer.btnFlag,
    imageStoreObj: state.sellReducer.imageStoreObj,
    phoneNumber: state.loginReducer.phoneNumber,
    phonestep1: state.loginReducer.phonestep1,
    phonestep2: state.loginReducer.phonestep2,
    phonestep3: state.loginReducer.phonestep3,
    nextBtnStatus: state.loginReducer.nextButton,
    recaptcha: state.loginReducer.recaptcha,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    indexSet: (index) => dispatch(categoryIndex(index)),
    sellDataSet: (data) => dispatch(sellData(data)),
    uploadedImagesSet: (data, key) => dispatch(uploadedImages(data, key)),
    currentStateIndexSet: (index) => dispatch(currentIndexOfState(index)),
    curretCityLocationSet: (city) => dispatch(curretCityLocation(city)),
    sellerNameSet: (name) => dispatch(sellerName(name)),
    phoneNumberSet: (number) => dispatch(phoneNumber(number)),
    showNumberSet: (status) => dispatch(showNumber(status)),
    currentConditionSet: (key, name) => dispatch(currentConditionBtn(key, name)),
    currentTypeSet: (key, name) => dispatch(currentTypeBtn(key, name)),
    sellTitleSet: (title) => dispatch(sellTitle(title)),
    sellDiscriptionSet: (discription) => dispatch(sellDiscription(discription)),
    sellPriceSet: (discription) => dispatch(sellPrice(discription)),
    makeSet: (make) => dispatch(makeOf(make)),
    yearSet: (year) => dispatch(yearAction(year)),
    kmDrivedSet: (km) => dispatch(kmDrived(km)),
    fuelTypeSet: (key, name) => dispatch(fuelType(key, name)),
    areaUnitSet: (key, name) => dispatch(areaUnitAction(key, name)),
    areaSet: (area) => dispatch(areaValue(area)),
    landTypeSet: (land) => dispatch(landTypeAction(land)),
    bedroomsSet: (land) => dispatch(bedroomsAction(land)),
    bathroomsSet: (land) => dispatch(bathroomsAction(land)),
    yesOrNoSet: (key, name) => dispatch(yesOrNoAction(key, name)),
    propertyTypeSet: (key, name) => dispatch(propertyTypeAction(key, name)),
    computerAccessoriesSet: (key, name) => dispatch(computerAccessories(key, name)),
    tvAudioActionSet: (key, name) => dispatch(tvAudioAction(key, name)),
    cameraTypeSet: (key, name) => dispatch(cameraTypeAction(key, name)),
    powerTypeSet: (key, name) => dispatch(powerTypeAction(key, name)),
    jobAdTypeSet: (key, name) => dispatch(jobAdTypeAction(key, name)),
    positionTypeSet: (key, name) => dispatch(positionTypeAction(key, name)),
    salaryPeriodSet: (key, name) => dispatch(salaryPeriodAction(key, name)),
    salaryFromSet: (salary) => dispatch(salaryFromAction(salary)),
    salaryToSet: (salary) => dispatch(salaryToAction(salary)),
    forSet: (key, item) => dispatch(forAction(key, item)),
    btnFlagSet: (flag) => dispatch(btnAction(flag)),
    defaultStateSet: () => dispatch(defaultState()),
    stepHandler1: (stepTrigger) => dispatch(phoneStep1(stepTrigger)),
    stepHandler2: (stepTrigger) => dispatch(phoneStep2(stepTrigger)),
    stepHandler3: (stepTrigger) => dispatch(phoneStep3(stepTrigger)),
    setNumber: (number) => dispatch(phoneNumberSet(number)),
    userData: (data) => dispatch(userData(data)),
    firebaseStorageSet: (data) => dispatch(firebaseStorage(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellForm);
