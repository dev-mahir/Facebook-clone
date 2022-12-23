import { combineReducers } from "redux";
import authReducer from "./auth/authReducer.js";
import loaderTopReducer from "./top-loader/loadarTopReducer.js";

// create root reducer 

const rootReducer = combineReducers({
  auth: authReducer,
  topLoader: loaderTopReducer,
});

export default rootReducer;