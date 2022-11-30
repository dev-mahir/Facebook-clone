import axios from "axios";
import { createToast } from "../../utility/toast";
import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
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

          navigate("/activation");
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
        .post("/api/v1/user/code-activation", { code: code , email: email})
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
export const resendLink =
  (email) =>
  async (dispatch) => {
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
