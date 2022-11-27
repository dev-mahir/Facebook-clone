import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes.js";
import initialState from "./initialState.js";

// create reducer

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        message: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
