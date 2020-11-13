import { act } from "react-dom/test-utils";

const STATE = {
  sellerName: null,
  currentState: null,
  currentCity: null,
  phoneNumber: "",
  sellDataObj: null,
  adTitle: "",
  adDiscription: "",
  adPrice: null,
  loadder: false,
  index: null,
  currentStateIndex: null,
  showPhoneNumber: false,
  currentCondition: { key: null, name: "" },
  currentType: { key: null, name: "" },
  year: "",
  make: "",
  kmDriven: "",
  currentFuel: { key: null, name: "" },
  areaUnit: { key: null, name: "" },
  area: "",
  landType: "",
  bedrooms: "",
  bathrooms: "",
  yesOrNo: { key: null, name: "" },
  propertyType: { key: null, name: "" },
  compAccessoriesType: "",
  tvAudioType: { key: null, name: "" },
  cameraType: { key: null, name: "" },
  powerType: { key: null, name: "" },
  jobAdType: "",
  positionType: "",
  salaryPeriod: "",
  salaryFrom: "",
  salaryTo: "",
  clothFor: "",
  images: [
    { key: "0", imageURL: "" },
    { key: "1", imageURL: "" },
    { key: "2", imageURL: "" },
    { key: "3", imageURL: "" },
    { key: "4", imageURL: "" },
    { key: "5", imageURL: "" },
    { key: "6", imageURL: "" },
    { key: "7", imageURL: "" },
    { key: "8", imageURL: "" },
    { key: "9", imageURL: "" },
    { key: "10", imageURL: "" },
    { key: "11", imageURL: "" },
  ],
  locations: [
    { state: null, cities: [] },
    { state: "Sindh", cities: ["", "karachi", "hyderabad", "jamshoro"] },
    { state: "Balochistan", cities: ["", "quetta", "chaghi", "gawadar"] },
    { state: "Punjab", cities: ["", "lahore", "bhawalpur", "faisalabad"] },
    { state: "Kpk", cities: ["", "peshawer", "abbottabad", "kohat"] },
    { state: "Islambad Capital", cities: ["", "Islamabad"] },
  ],
  btnFlag: false,
  imageStoreObj: null,
};

export default (state = STATE, action) => {
  switch (action.type) {
    case "CATEGORYINDEX":
      return {
        ...state,
        index: action.key,
      };
    case "SELLDATA":
      return {
        ...state,
        sellDataObj: action.data ? action.data : null,
      };
    case "MAKE":
      return {
        ...state,
        make: action.make,
      };
    case "ADTITLE":
      return {
        ...state,
        adTitle: action.title,
      };
    case "ADDISCRIPTION":
      return {
        ...state,
        adDiscription: action.discription,
      };
    case "ADPRICE":
      return {
        ...state,
        adPrice: action.price,
      };

    case "IMAGES":
      const updatedImages = state.images.map((e) => (e.key == action.key ? { ...e, imageURL: action.image } : e));
      return {
        ...state,
        images: updatedImages,
      };

    case "CURRENTSTATEINDEX":
      return {
        ...state,
        currentStateIndex: action.index,
        currentState: state.locations[action.index].state,
      };

    case "CITYLOCATION":
      return {
        ...state,
        currentCity: action.city,
      };
    case "SELLERNAME":
      return {
        ...state,
        sellerName: action.name,
      };
    case "PHONENUMBER":
      return {
        ...state,
        phoneNumber: action.number,
      };
    case "SHOWNUMBER":
      return {
        ...state,
        showPhoneNumber: action.status,
      };
    case "CONDITION":
      return {
        ...state,
        currentCondition: { key: action.key, name: action.name },
      };
    case "CURRENTTYPE":
      return {
        ...state,
        currentType: { key: action.key, name: action.name },
      };
    case "YEAR":
      return {
        ...state,
        year: action.year,
      };
    case "KMDRIVEN":
      return {
        ...state,
        kmDriven: action.km,
      };
    case "FUEL":
      return {
        ...state,
        currentFuel: { key: action.key, name: action.name },
      };
    case "AREAUNIT":
      return {
        ...state,
        areaUnit: { key: action.key, name: action.name },
      };
    case "AREA":
      return {
        ...state,
        area: action.area,
      };
    case "LANDTYPE":
      return {
        ...state,
        landType: action.land,
      };
    case "BEDROOM":
      return {
        ...state,
        bedrooms: action.room,
      };
    case "BATHROOM":
      return {
        ...state,
        bathrooms: action.room,
      };
    case "YESORNO":
      return {
        ...state,
        yesOrNo: { key: action.key, name: action.name },
      };
    case "PROPERTYTYPE":
      return {
        ...state,
        propertyType: { key: action.key, name: action.name },
      };
    case "COMPUTERACCESSORIESTYPE":
      return {
        ...state,
        compAccessoriesType: action.accessories,
      };
    case "TVAUDIO":
      return {
        ...state,
        tvAudioType: { key: action.key, name: action.name },
      };
    case "CAMERATYPE":
      return {
        ...state,
        cameraType: { key: action.key, name: action.name },
      };
    case "POWERTYPE":
      return {
        ...state,
        powerType: { key: action.key, name: action.name },
      };
    case "JOBADTYPE":
      return {
        ...state,
        jobAdType: { key: action.key, name: action.name },
      };
    case "JOBPOSITIONTYPE":
      return {
        ...state,
        positionType: { key: action.key, name: action.name },
      };
    case "SALARYPERIOD":
      return {
        ...state,
        salaryPeriod: { key: action.key, name: action.name },
      };
    case "SALARYFROM":
      return {
        ...state,
        salaryFrom: action.salary,
      };
    case "SALARYTO":
      return {
        ...state,
        salaryTo: action.salary,
      };
    case "SALARYTO":
      return {
        ...state,
        salaryTo: action.salary,
      };
    case "FOR":
      return {
        ...state,
        clothFor: { key: action.key, name: action.name },
      };
    case "FLAG":
      return {
        ...state,
        btnFlag: action.flag,
      };
    case "STORAGE":
      return {
        ...state,
        imageStoreObj: action.obj,
      };

    case "DEFAULT":
      return {
        state: STATE,
      };
    default:
      return state;
  }
};
