import { combineReducers } from "redux";
import authReducer from "./auth/authReducer.js";

// create root reducer 

const rootReducer = combineReducers({
     auth: authReducer,
     chat: ''
});

export default rootReducer;