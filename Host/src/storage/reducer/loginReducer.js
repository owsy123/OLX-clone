const INITIAL_STATE = {
  modal: false,
  phonestep1: true,
  phonestep2: false,
  phonestep3: false,
  phonestep4: false,
  phoneNumber: "",
  nextButton: false,
  recaptcha: null,
  confirmationResultState: null,
  codeDigit1: { value: "", disabled: false },
  codeDigit2: { value: "", disabled: true },
  codeDigit3: { value: "", disabled: true },
  codeDigit4: { value: "", disabled: true },
  codeDigit5: { value: "", disabled: true },
  codeDigit6: { value: "", disabled: true },
  code: "",
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        modal: action.trigger,
      };
    case "PHONESTEP":
      return {
        ...state,
        phonestep1: action.stepTrigger1 !== undefined ? action.stepTrigger1 : state.phonestep1,
        phonestep2: action.stepTrigger2 !== undefined ? action.stepTrigger2 : state.phonestep2,
        phonestep3: action.stepTrigger3 !== undefined ? action.stepTrigger3 : state.phonestep3,
        phonestep4: action.stepTrigger4 !== undefined ? action.stepTrigger4 : state.phonestep4,
      };
    case "PHONENUMBER":
      return {
        ...state,
        phoneNumber: action.number,
      };
    case "NEXTBUTTON":
      return {
        ...state,
        nextButton: action.status,
      };
    case "CODEDIGIT1":
      return {
        ...state,
        codeDigit1: { value: action.value, disabled: action.status.digit1Flag },
        codeDigit2: { ...state.codeDigit2, disabled: action.status.digit2Flag },
      };
    case "CODEDIGIT2":
      return {
        ...state,
        codeDigit2: { value: action.value, disabled: action.status.digit2Flag },
        codeDigit3: { ...state.codeDigit3, disabled: action.status.digit3Flag },
      };
    case "CODEDIGIT3":
      return {
        ...state,
        codeDigit3: { value: action.value, disabled: action.status.digit3Flag },
        codeDigit4: { ...state.codeDigit4, disabled: action.status.digit4Flag },
      };
    case "CODEDIGIT4":
      return {
        ...state,
        codeDigit4: { value: action.value, disabled: action.status.digit4Flag },
        codeDigit5: { ...state.codeDigit5, disabled: action.status.digit5Flag },
      };
    case "CODEDIGIT5":
      return {
        ...state,
        codeDigit5: { value: action.value, disabled: action.status.digit5Flag },
        codeDigit6: { ...state.codeDigit6, disabled: action.status.digit6Flag },
      };
    case "CODEDIGIT6":
      return {
        ...state,
        codeDigit6: { value: action.value, disabled: action.status.digit6Flag },
      };
    case "CODEDIGITS":
      return {
        ...state,
        code: action.value,
      };
    case "RECAPTCHA":
      return {
        ...state,
        recaptcha: action.recaptcha,
      };
    case "CONFIRMATIONRESULT":
      return {
        ...state,
        confirmationResultState: action.value,
      };
    case "USER":
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};
