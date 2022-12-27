import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import ResetHeader from '../../components/ResetHeader/ResetHeader'
import { createToast } from '../../utility/toast'

const Forgot = () => {
    const [auth, setAuth] = useState("");

    const navigate = useNavigate();


    const handleFindUser = (e) => {
        e.preventDefault();
        if (!auth) {
            createToast("Input field is required");
        } else {
            axios.post("/api/v1/user/find-account", {auth})
                .then(res => {
                    navigate('/forgot-password');
                })
                .catch(error => {
                    createToast(error.response.data.message);
                });
        }
    }


    return (
        <>
            <ResetHeader />

            <div className="reset-area">
                <div className="reset-wraper">
                    <div className="reset-box">
                        <div className="reset-box-header">
                            <span className="title">Find Your Account</span>
                        </div>
                        <div className="reset-body">
                            <p>
                                Please enter your email address or mobile number to search for
                                your account.
                            </p>
                            <div className="code-box">
                                <input name='auth' value={auth} onChange={(e) => setAuth(e.target.value)} className="w-100" type="text" placeholder="Email address or mobile number" />
                            </div>
                        </div>
                        <div className="reset-footer">
                            <a href="#" />
                            <div className="reset-btns">
                                <Link to="/login" className="cancel">Cancel</Link>
                                <a href="#" onClick={handleFindUser} className="continue">Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Forgot