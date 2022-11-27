import React from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import fbLogo from '../../assets/icons/facebook.svg'
import Footer from '../../components/Footer/Footer';
import cookie from 'js-cookie'
import { useEffect } from 'react';
import { useState } from 'react';
import { activationByOTP, resendLink } from '../../redux/auth/action';
import { createToast } from '../../utility/toast';

const Activation = () => {

    // navigate 
    const navigate = useNavigate();

    // activation email 
    const activationEmail = cookie.get('otp');
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
            createToast("Set a OTP code first", 'warn');
        }
        else {
            dispatch(activationByOTP({
                code: code,
                email: activationEmail
            }, navigate, cookie))
        }
    }

    const handleActivationCancel = (e) => {
        e.preventDefault();
        cookie.remove('otp');
        navigate('/login');

    }

    // handle resend link 
    const handleResendLink = (e) => {
        e.preventDefault();
        dispatch(resendLink(activationEmail))
    }


    useEffect(() => {
        if (!activationEmail) {
            navigate('/login');
        }
    })


    return (
        <>
            {/* Facebook Auth Area */}
            <div className="reset-header">
                <div className="reset-header-wraper">
                    <div className="reset-logo">
                        <img src={fbLogo} alt="" />
                    </div>
                    <div className="login-part">
                        <input type="text" placeholder="Email or mobile number" />
                        <input type="text" placeholder="Password" />
                        <button>Log In</button>
                        <a href="#">Forgotten account?</a>
                    </div>
                </div>
            </div>
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
                                    <span>{activationEmail}</span>
                                </div>
                            </div>
                        </div>
                        <div className="reset-footer">
                            <a href="#" onClick={handleResendLink}>Didn't get a code?</a>
                            <div className="reset-btns">
                                <a onClick={handleActivationCancel} className="cancel" href='#'>Cancel</a>
                                <a className="continue" href="#" onClick={handleCodeContinue}>Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FB FOOTER AREA  */}
            <Footer />
        </>

    )
}

export default Activation