import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import ResetHeader from '../../components/ResetHeader/ResetHeader'
import { changePassword } from '../../redux/auth/action'
import { createToast } from '../../utility/toast'

const Password = () => {
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (!password) {
            createToast("Password field is required")
        } else {
            dispatch(changePassword(
                {
                    password: password,
                    id: Cookies.get('cpId'),
                    code: Cookies.get('code')
                },
                navigate))
        }

    }

    return (
        <>
            <ResetHeader />
            <div className="reset-area">
                <div className="reset-wraper">
                    <div className="reset-box">
                        <div className="reset-box-header">
                            <span className="title">Choose a new password</span>
                        </div>
                        <div className="reset-body">
                            <p>
                                Create a new password that is at least 6 characters long. A strong
                                password has a combination of letters, digits and punctuation
                                marks.
                            </p>
                            <div className="code-box">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="w-100" type="password" placeholder="New password"
                                />
                            </div>
                        </div>
                        <div className="reset-footer">
                            <a href="#" />
                            <div className="reset-btns">
                                <Link className="cancel" to="/login">Skip</Link>
                                <a className="continue" href="#" onClick={handlePasswordChange} >Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Password