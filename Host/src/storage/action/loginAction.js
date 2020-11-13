export const modalHandle = (trigger) => {
  return {
    type: "LOGIN",
    trigger: trigger,
  };
};

export const phoneStep1 = (stepTrigger) => {
  return {
    type: "PHONESTEP",
    stepTrigger1: stepTrigger,
  };
};
export const phoneStep2 = (stepTrigger) => {
  return {
    type: "PHONESTEP",
    stepTrigger2: stepTrigger,
  };
};
export const phoneStep3 = (stepTrigger) => {
  return {
    type: "PHONESTEP",
    stepTrigger3: stepTrigger,
  };
};
export const phoneStep4 = (stepTrigger) => {
  return {
    type: "PHONESTEP",
    stepTrigger4: stepTrigger,
  };
};
export const phoneNumberSet = (number) => {
  return {
    type: "PHONENUMBER",
    number: number,
  };
};
export const nextButton = (status) => {
  return {
    type: "NEXTBUTTON",
    status: status,
  };
};

export const codeDigits1 = (value, digit1Status, digit2Status) => {
  return {
    type: "CODEDIGIT1",
    value: value,
    status: { digit1Flag: digit1Status, digit2Flag: digit2Status },
  };
};
export const codeDigits2 = (value, digit2Status, digit3Status) => {
  return {
    type: "CODEDIGIT2",
    value: value,
    status: { digit2Flag: digit2Status, digit3Flag: digit3Status },
  };
};
export const codeDigits3 = (value, digit3Status, digit4Status) => {
  return {
    type: "CODEDIGIT3",
    value: value,
    status: { digit3Flag: digit3Status, digit4Flag: digit4Status },
  };
};
export const codeDigits4 = (value, digit4Status, digit5Status) => {
  return {
    type: "CODEDIGIT4",
    value: value,
    status: { digit4Flag: digit4Status, digit5Flag: digit5Status },
  };
};
export const codeDigits5 = (value, digit5Status, digit6Status) => {
  return {
    type: "CODEDIGIT5",
    value: value,
    status: { digit5Flag: digit5Status, digit6Flag: digit6Status },
  };
};
export const codeDigits6 = (value, digit6Status) => {
  return {
    type: "CODEDIGIT6",
    value: value,
    status: { digit6Flag: digit6Status },
  };
};
export const codeDigits = (value) => {
  return {
    type: "CODEDIGITS",
    value: value,
  };
};
export const recaptchaSet = (obj) => {
  return {
    type: "RECAPTCHA",
    recaptcha: obj,
  };
};

export const confirmationResultState = (value) => {
  return {
    type: "CONFIRMATIONRESULT",
    value: value,
  };
};
export const userData = (data) => {
  return {
    type: "USER",
    data: data,
  };
};
