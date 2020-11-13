export const categoryIndex = (key) => {
  return {
    type: "CATEGORYINDEX",
    key: key,
  };
};

export const sellData = (data) => {
  return {
    type: "SELLDATA",
    data: data,
  };
};
export const sellTitle = (title) => {
  return {
    type: "ADTITLE",
    title: title,
  };
};
export const sellDiscription = (discription) => {
  return {
    type: "ADDISCRIPTION",
    discription: discription,
  };
};
export const makeOf = (make) => {
  return {
    type: "MAKE",
    make: make,
  };
};
export const sellPrice = (price) => {
  return {
    type: "ADPRICE",
    price: price,
  };
};

export const uploadedImages = (image, key) => {
  return {
    type: "IMAGES",
    key: key,
    image: image,
  };
};

export const curretCityLocation = (city) => {
  return {
    type: "CITYLOCATION",
    city: city,
  };
};
export const currentIndexOfState = (index) => {
  return {
    type: "CURRENTSTATEINDEX",
    index: index,
  };
};

export const sellerName = (name) => {
  return {
    type: "SELLERNAME",
    name: name,
  };
};
export const phoneNumber = (number) => {
  return {
    type: "PHONENUMBER",
    number: number,
  };
};
export const showNumber = (status) => {
  return {
    type: "SHOWNUMBER",
    status: status,
  };
};
export const currentConditionBtn = (key, name) => {
  return {
    type: "CONDITION",
    key: key,
    name: name,
  };
};
export const currentTypeBtn = (key, name) => {
  return {
    type: "CURRENTTYPE",
    key: key,
    name: name,
  };
};
export const yearAction = (year) => {
  return {
    type: "YEAR",
    year: year,
  };
};
export const kmDrived = (km) => {
  return {
    type: "KMDRIVEN",
    km: km,
  };
};
export const fuelType = (key, name) => {
  return {
    type: "FUEL",
    key: key,
    name: name,
  };
};
export const areaUnitAction = (key, name) => {
  return {
    type: "AREAUNIT",
    key: key,
    name: name,
  };
};
export const areaValue = (area) => {
  return {
    type: "AREA",
    area: area,
  };
};
export const landTypeAction = (land) => {
  return {
    type: "LANDTYPE",
    land: land,
  };
};
export const bedroomsAction = (room) => {
  return {
    type: "BEDROOM",
    room: room,
  };
};
export const bathroomsAction = (room) => {
  return {
    type: "BATHROOM",
    room: room,
  };
};
export const yesOrNoAction = (key, name) => {
  return {
    type: "YESORNO",
    key: key,
    name: name,
  };
};
export const propertyTypeAction = (key, name) => {
  return {
    type: "PROPERTYTYPE",
    key: key,
    name: name,
  };
};
export const computerAccessories = (accessories) => {
  return {
    type: "COMPUTERACCESSORIESTYPE",
    accessories: accessories,
  };
};
export const tvAudioAction = (key, name) => {
  return {
    type: "TVAUDIO",
    key: key,
    name: name,
  };
};
export const cameraTypeAction = (key, name) => {
  return {
    type: "CAMERATYPE",
    key: key,
    name: name,
  };
};
export const powerTypeAction = (key, name) => {
  return {
    type: "POWERTYPE",
    key: key,
    name: name,
  };
};
export const jobAdTypeAction = (key, name) => {
  return {
    type: "JOBADTYPE",
    key: key,
    name: name,
  };
};
export const positionTypeAction = (key, name) => {
  return {
    type: "JOBPOSITIONTYPE",
    key: key,
    name: name,
  };
};
export const salaryPeriodAction = (key, name) => {
  return {
    type: "SALARYPERIOD",
    key: key,
    name: name,
  };
};
export const salaryFromAction = (salary) => {
  return {
    type: "SALARYFROM",
    salary: salary,
  };
};
export const salaryToAction = (salary) => {
  return {
    type: "SALARYTO",
    salary: salary,
  };
};
export const forAction = (key, name) => {
  return {
    type: "FOR",
    key: key,
    name: name,
  };
};
export const btnAction = (flag) => {
  return {
    type: "FLAG",
    flag:flag
  };
};
export const firebaseStorage = (obj) => {
  return {
    type: "STORAGE",
    obj:obj
  };
};
export const defaultState = () => {
  return {
    type: "DEFAULT",
  };
};



// const btnAction = (data) => {
//   return (dispatch) => {
//     dispatch({ type: "TYPE", data: data });
//   };
// };

// export { action };

