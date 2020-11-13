import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import sellReducer from "./sellReducer";

export default combineReducers({ loginReducer, sellReducer });
