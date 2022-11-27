import express from 'express';
import {
  loggedInUser,
  login,
  activateAccountByCode,
  resendActivation, forgotPassword,
  register,
  activateAccountByLink,
  passwordResetAction,
} from "../controllers/userController.js";

// init router 
const router = express.Router();



// user auth route 
router.post('/login', login)
router.post('/register', register)
router.get('/me', loggedInUser)

router.get('/activate/:token', activateAccountByLink)

router.post('/code-activation', activateAccountByCode)
router.post('/resend-activate', resendActivation)


router.post('/forgot-password', forgotPassword)
router.post('/forgot-password/:token', passwordResetAction)



// export  router 
 export default router 