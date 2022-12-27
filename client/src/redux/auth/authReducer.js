import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  TOKEN_USER_FAILED,
  TOKEN_USER_SUCCESS,
  USER_LOGOUT,
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
    case LOGIN_FAILED:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
        
    
    case TOKEN_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    
    case TOKEN_USER_FAILED:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    
    
    default:
      return state;
  }
};

export default authReducer;
