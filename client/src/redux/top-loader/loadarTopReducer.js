import {
  LOADER_END,
  LOADER_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes.js";
import initialState from "./initialState.js";

// create reducer

const loaderTopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADER_START:
      return 100;
    case LOADER_END:
      return 0;

    default:
      return state;
  }
};

export default loaderTopReducer;
