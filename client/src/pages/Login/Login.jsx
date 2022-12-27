import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import fbLogo from '../../assets/icons/facebook.svg';
import Footer from "../../components/Footer/Footer";
import { userLogin } from "../../redux/auth/action";
import { createToast } from "../../utility/toast";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            dispatch(userLogin(input, navigate, setInput))
        }
    }


    return <>
        <div className="fb-auth login-page">

            <div className="auth-right">
                <div>
                    <center> <img src={fbLogo} alt="" /></center>
                </div>

                <div className="auth-box">
                    <form onSubmit={handleUserSubmit}>
                        <h4 className="">Log in to Facebook</h4>
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

                    <div className="login-footer">
                        <Link to='/find-account'>Forgotten password?</Link>
                        <Link to="/register">Sign up for facebook</Link>
                    </div>
                </div>

            </div>

        </div>

        <Footer />
    </>;
};

export default Login;
