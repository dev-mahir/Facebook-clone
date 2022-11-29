import React from "react";
import { Link } from "react-router-dom";
import fbLogo from '../../assets/icons/facebook.svg';


const Login = ({ setRegister }) => {
    return <>
        <div className="fb-auth">
            <div className="auth-wraper">
                <div className="auth-left">
                    <img src={fbLogo} alt="" />
                    <h2>
                        Facebook helps you connect and share with the people in your life.
                    </h2>
                </div>
                <div className="auth-right">
                    <div className="auth-box">
                        <form action="">
                            <div className="auth-form">
                                <input
                                    type="text"
                                    placeholder="Email address or phone number"
                                />
                            </div>
                            <div className="auth-form">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="auth-form">
                                <button type="submit">Log In</button>
                            </div>
                        </form>

                        <Link to='/forgot-password'>Forgotten password?</Link>

                        <div className="divider"></div>

                        <button onClick={() => setRegister(true)}>Create New Account</button>
                    </div>
                    <p>
                        <a href="#">Create a Page</a> for a celebrity, brand or business.
                    </p>
                </div>
            </div>
        </div>


    </>;
};

export default Login;
