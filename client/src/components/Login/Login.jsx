import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import fbLogo from '../../assets/icons/facebook.svg';
import { createToast } from "../../utility/toast";


const Login = ({ setRegister }) => {
    const [input, setInput] = useState({
        auth: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleUserSubmit = (e) => {
        e.preventDefault();
        if (!input.auth || !input.password) {
            createToast("All fields are required");
        } else {

        }

    }




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
                        <form onSubmit={handleUserSubmit}>
                            <div className="auth-form">
                                <input
                                    type="text"
                                    name="auth"
                                    onChange={handleInputChange}
                                    value={input.auth}
                                    placeholder="Email address or phone number"
                                />
                            </div>
                            <div className="auth-form">
                                <input type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    value={input.password} placeholder="Password" />
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
