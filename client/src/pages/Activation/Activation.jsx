import React from 'react';
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import cookie from 'js-cookie'
import { useEffect } from 'react';
import { useState } from 'react';
import { activationByOTP, checkPasswordResetCode, newOTPCode, resendLink } from '../../redux/auth/action';
import { createToast } from '../../utility/toast';
import ResetHeader from '../../components/ResetHeader/ResetHeader';

const Activation = () => {

    const { type } = useParams();

    // navigate 
    const navigate = useNavigate();

    // activation email 
    const auth = cookie.get('otp');
    // dispactch
    const dispatch = useDispatch();
    // code state 
    const [code, setCode] = useState("");

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    }

    const handleCodeContinue = (e) => {
        e.preventDefault();

        if (!code) {
            createToast("OTP code is required", 'warn');
        }
        else {
            dispatch(activationByOTP(
                { code: code, auth: auth },
                navigate, cookie))
        }
    }

    const handleActivationCancel = (e) => {
        e.preventDefault();
        cookie.remove('otp');
        navigate('/');
    }

    // handle resend link 
    const handleResendLink = (e) => {
        e.preventDefault();
        setCode("")
        dispatch(resendLink(auth))
    }



    // handle resend code 
    const handleResendCode = (e) => {
        e.preventDefault();
        setCode("");
        dispatch(newOTPCode(auth))
    }




    // handle password reset 
    const handlePasswordReset = (e) => {
        e.preventDefault();

        if (!code) {
            createToast("OTP code is required", 'warn');
        }
        else {
            dispatch(checkPasswordResetCode({
                code: code,
                auth: auth
            }, navigate, cookie))
        }
    }



    useEffect(() => {
        if (!auth) {
            navigate('/login');
        }
    })


    return (
        <>
            <ResetHeader />
            {/* reset Box  */}
            <div className="reset-area">
                <div className="reset-wraper">
                    <div className="reset-box">
                        <div className="reset-box-header">
                            <span className="title">Enter security code</span>
                        </div>
                        <div className="reset-body">
                            <p>
                                Please check your emails for a message with your code. Your code
                                is 6 numbers long.
                            </p>
                            <div className="code-box">
                                <input type="text" value={code} onChange={handleCodeChange} />
                                <div className="code-text">
                                    <span>We sent your code to: </span>
                                    <span>{auth}</span>
                                </div>
                            </div>
                        </div>
                        <div className="reset-footer">
                            <a onClick={type === "reset-password" ? handleResendCode : handleResendLink} href="#">Didn't get a code?</a>
                            <div className="reset-btns">
                                <a href='#' onClick={handleActivationCancel} className="cancel">Cancel</a>
                                <a className="continue" href="#" onClick={type === 'account' ? handleCodeContinue : handlePasswordReset}>Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Activation