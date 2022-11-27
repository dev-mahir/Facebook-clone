import User from "../models/User.js";
import createError from "../utility/createError.js";
import { hash, passwordVarify } from "../utility/hash.js";
import { getRandom } from "../utility/math.js";
import {
  sendActivationLink,
  sendPasswordForgotLink,
} from "../utility/sendMail.js";
import { createToken, tokenVerify } from "../utility/token.js";
import { isEmail } from "../utility/validate.js";

/**
 * @access public
 * @route /api/user/register
 * @method POST
 */
export const register = async (req, res, next) => {
  try {
    // get form data
    const { first_name, sur_name, email, password, gender } = req.body;

    // validation
    if (!first_name || !sur_name || !email || !password || !gender) {
      next(createError(400, "All fields are required"));
    }
    if (!isEmail(email)) {
      next(createError(400, "Invalid Email Address"));
    }
    // email check
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      next(createError(400, "Email already exists"));
    }

    const activation_code = getRandom();

    // create user
    const user = await User.create({
      ...req.body,
      password: hash(password),
      access_token: activation_code,
    });

    if (user) {
      // create activation token
      const activationToken = createToken({ id: user._id }, "30d");

      // send activation link
      sendActivationLink(user.email, {
        name: user.first_name + " " + user.sur_name,
        link: `${
          process.env.APP_URL + ":" + process.env.PORT
        }/api/v1/user/activate/${activationToken}`,
        code: activation_code,
      });

      res
        .status(200)
        .cookie("otp", user.email, {
          expires: new Date(Date.now() + 1000 * 60 * 15),
        })
        .json({
          message: "User created successfull",
          user,
        });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/resend-activation
 * @method POST
 */

export const resendActivation = async (req, res, next) => {
  try {
    const { email } = req.body;

    const emailUser = await User.findOne({ email: email });
    if (!emailUser) {
      next(createError(400, "Invalid link request !"));
    }
    if (emailUser) {
      // create activation token
      const activationToken = createToken({ id: emailUser._id }, "30d");
      // code generate
      const activation_code = getRandom();

      // upadate code
      await User.findByIdAndUpdate(
        { _id: emailUser._id },
        {
          access_token: activation_code,
        }
      );

      // send activation link
      sendActivationLink(emailUser.email, {
        name: emailUser.first_name + " " + emailUser.sur_name,
        link: `${
          process.env.APP_URL + ":" + process.env.PORT
        }/api/v1/user/activate/${activationToken}`,
        code: activation_code,
      });

      res
        .status(200)
        .cookie("otp", emailUser.email, {
          expires: new Date(Date.now() + 1000 * 60 * 15),
        })
        .json({
          message: "Activation link send",
        });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/login
 * @method POST
 */

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //validate form
    if (!email || !password) {
      next(createError(400, "All fields are required"));
    }

    if (!isEmail(email)) {
      next(createError(400, "Invalid Email Address"));
    }

    // email check
    const loginUser = await User.findOne({ email });
    if (!loginUser) {
      next(createError(400, "Invalid email"));
    } else {
      // password verify
      if (!passwordVarify(password, loginUser.password)) {
        next(createError(400, "Wrong password"));
      } else {
        // create token
        const token = createToken({ id: loginUser._id }, "365d");

        res.status(200).cookie("authToken", token).json({
          message: "Uset Login successfull",
          user: loginUser,
          token,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/me
 * @method GET
 */

export const loggedInUser = async (req, res, next) => {
  try {
    const auth_token = req.headers.authorization;
    if (!auth_token) {
      next(createError(400, "Token not found"));
    }
    if (auth_token) {
      const token = auth_token.split(" ")[1];
      const user = tokenVerify(token);

      if (!user) {
        next(createError(400, "Invalid token"));
      }
      if (user) {
        const logged_in_user = await User.findById(user.id);
        if (!logged_in_user) {
          next(createError(400, "User data not match"));
        } else {
          res.status(200).json({
            message: "User data stable",
            user: logged_in_user,
          });
        }
      }
      res.status(200).json({
        token,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/activate/:token
 * @method GET
 */
export const activateAccountByLink = async (req, res, next) => {
  try {
    // get token
    const token = req.params.token;

    if (!token) {
      next(createError(400, "Invalid activation url"));
    } else {
      // verify token
      const tokenData = tokenVerify(token);

      // check token
      if (!tokenData) {
        next(createError(400, "Invalid token"));
      }

      // now activate account
      if (tokenData) {
        const account = await User.findById(tokenData.id);

        if (account.isActivate === true) {
          next(createError(400, "Account already activate"));
        } else {
          await User.findByIdAndUpdate(tokenData.id, {
            isActivate: true,
            access_token: "",
          });
          res.status(200).json({
            message: "Account activation successfull",
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 *  Activate account by code
 *
 * @access public
 * @route /api/user/code-activation
 * @method GET
 */

export const activateAccountByCode = async (req, res, next) => {
  try {
    const { code, email } = req.body;

    const user = await User.findOne().and([
      { access_token: code },
      { isActivate: false },
      { email: email}
    ]);

    if (!user) {
      next(createError(400, "Invalid OTP code"));
    }
    if (user) {
      await User.findByIdAndUpdate(user._id, {
        isActivate: true,
        access_token: "",
      });
      res.status(200).json({
        message: "Account activate successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Forgot password
 * @route /api/user/forgot-password
 * @method POST
 */

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      next(createError(404, "User not found"));
    }

    if (user) {
      const activation_code = getRandom();

      // creat activation Token
      const passwordResetToken = createToken({ id: user._id }, "10m");

      // send activation link
      sendPasswordForgotLink(user.email, {
        name: user.first_name + " " + user.sur_name,
        link: `${
          process.env.APP_URL + ":" + process.env.PORT
        }/api/v1/user/forgot-password/${passwordResetToken}`,
        code: activation_code,
      });

      await User.findByIdAndUpdate(user._id, {
        access_token: activation_code,
      });

      res.status(200).json({
        message: "Password reset link send to your email",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 *
 * Password reset action
 * @access public
 * @route /api/user/
 * @method GET
 */

export const passwordResetAction = async (req, res, next) => {
  try {
    // get token
    const { token } = req.params;
    const { password } = req.body;

    if (!token) {
      next(createError(400, "Invalid passrord reset url"));
    } else {
      // verify token
      const tokenData = tokenVerify(token);

      // check token
      if (!tokenData) {
        next(createError(400, "Invalid token"));
      }

      // now activate account
      if (tokenData) {
        const user = await User.findById(tokenData.id);

        if (!user) {
          next(createError(400, "Invalid user id"));
        }
        if (user) {
          await User.findByIdAndUpdate(user._id, {
            password: hash(password),
            access_token: "",
          });
        }
        res.status(200).json({
          message: "Password reset successfull",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};
