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
      console.log(error);
    }
  };

// user account activation by otp
export const activationByOTP =
  ({ code, email }, navigate, cookie) =>
  async (dispatch) => {
    try {
      await axios
        .post("/api/v1/user/code-activation", { code: code, email: email })
        .then((res) => {
          createToast("User account Activate", "success");
          cookie.remove("otp");
          navigate("/login");
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
        navigate("/activation/account");
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
        navigate("/login");
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
export const tokenUser = (navigate) => async (dispatch) => {
  const token = Cookies.get("authToken")
  dispatch({ type: TOKEN_USER_REQUEST });
  try {
    await axios
      .get("/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: TOKEN_USER_SUCCESS, payload: res.data.user });
        dispatch(loader_start());
        // navigate("/");
      })
      .catch((error) => {
        createToast(error.response.data.message);
        dispatch({ type: TOKEN_USER_FAILED });
      });
  } catch (error) {
    createToast(error.response.data.message);
    dispatch({ type: TOKEN_USER_FAILED });
  }
};
