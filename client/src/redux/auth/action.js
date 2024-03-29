import axios from "axios";
import Cookies from "js-cookie";
import { createToast } from "../../utility/toast";
import { loader_start } from "../top-loader/action";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  TOKEN_USER_FAILED,
  TOKEN_USER_REQUEST,
  TOKEN_USER_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_UPDATE,
} from "./actionTypes";

// user register
export const userRegister =
  (data, setInput, e, setRegister, navigate) => async (dispatch) => {
    try {
      dispatch({
        type: REGISTER_REQUEST,
      });
      await axios
        .post("/api/v1/user/register", data)
        .then((res) => {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
          });
          createToast("Registration successfully", "success");
          setInput({
            first_name: "",
            sur_name: "",
            emailOrMobile: "",
            password: "",
            birth_date: "",
            birth_month: "",
            birth_year: "",
            gender: "",
          });
          e.target.reset();
          setRegister(false);

          navigate("/activation/account");
        })
        .catch((error) => {
          createToast(error.response.data.message, "warn");
          dispatch({
            type: REGISTER_FAILED,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
        createToast(error.response.data.message, "warn");

    }
  };

  
// user account activation by otp
export const activationByOTP =
  ({ code, auth }, navigate, cookie) =>
    async (dispatch) => {
    console.log(auth);
    try {
      await axios
        .post("/api/v1/user/code-activation", { code: code, auth: auth } )
        .then((res) => {
          createToast("User account Activate", "success");
          cookie.remove("otp");
          navigate("/");
        })
        .catch((error) => {
          createToast(error.response.data.message);
        });
    } catch (error) {
      createToast(error.response.data.message);
    }
  };


// resend link
export const resendLink = (email, navigate) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/resend-activate", { auth: email })
      .then((res) => {
        createToast(res.data.message, "success");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};




// resend new otp code 
export const newOTPCode = (auth) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/new-otp-code", { auth: auth })
      .then((res) => {
        createToast(res.data.message, "success");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};



// check password reset otp code
export const checkPasswordResetCode =
  (data, navigate, cookie) => async (dispatch) => {
    console.log(data);
    try {
      await axios
        .post("/api/v1/user/check-password-reset-otp", data)
        .then((res) => {
          createToast("You can change your password", "success");
          cookie.remove("otp");
          navigate("/change-password");
        })
        .catch((error) => {
          createToast(error.response.data.message);
        });
    } catch (error) {
      createToast(error.response.data.message);
    }
  };

// check password reset otp code
export const changePassword = (data, navigate) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/user-password-reset", data)
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};

// check password reset otp code
export const userLogin = (data, navigate, setInput) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    await axios
      .post("/api/v1/user/login", data)
      .then((res) => {
        setInput((prevState) => ({
          password: "",
          auth: "",
        }));
        navigate("/");
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        createToast("Login success", "success");
        dispatch(loader_start());
      })
      .catch((error) => {
        createToast(error.response.data.message);
        dispatch({ type: LOGIN_FAILED });
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};

// token user
export const tokenUser = (token) => async (dispatch) => {
  dispatch({ type: TOKEN_USER_REQUEST });
  try {
    await axios
      .get("/api/v1/user/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: TOKEN_USER_SUCCESS, payload: res.data.user });
        dispatch(loader_start());
      })
      .catch((error) => {
        dispatch({ type: TOKEN_USER_FAILED });
        createToast(error.response.data.message);
        dispatch(userLogOut());
      });
  } catch (error) {
    dispatch({ type: TOKEN_USER_FAILED });
    createToast(error.response.data.message);
    dispatch(userLogOut());
  }
};



// user profile update
export const profileUpdate = (id, dat, setModalShow) => async (dispatch) => {
  console.log(dat);

  try {
    await axios
      .put(`/api/v1/user/profile-update/${id}`, dat)
      .then((res) => {
        dispatch({ type: USER_PROFILE_UPDATE, payload: res.data.user });
        setModalShow(false);
        createToast(res.data.message, "success");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};



// user logout
export const userLogOut = (navigate) => async (dispatch) => {
  dispatch(loader_start());
  Cookies.remove("authToken");
  dispatch({ type: USER_LOGOUT });
  navigate("/");
};
