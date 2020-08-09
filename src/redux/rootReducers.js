import { combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({ loginState: loginReducer });

export default rootReducer;
