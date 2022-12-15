import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie'
import Footer from '../../components/Footer/Footer';
import ResetHeader from '../../components/ResetHeader/ResetHeader';
import { useState } from 'react';
import { useEffect } from 'react';
import { hideMobileEmail } from '../../utility/helper';
import axios from 'axios';
import { createToast } from '../../utility/toast';
import Cookies from 'js-cookie';


const FindAccount = () => {
    const navigate = useNavigate();

    const [findUser, setFindUser] = useState({
        name: "",
        email: "",
        mobile: "",
        profile_photo: ""
    })


    const handleNotYou = (e) => {
        e.preventDefault();
        Cookie.remove("findUser");
        navigate('/forgot-password');
    }



    const handlePasswordResetLink = async (e) => {
        e.preventDefault();
        await axios.post('/api/v1/user/send-password-reset-otp', { auth: findUser.mobile ?? findUser.email })
            .then(res => {
                createToast(res.data.message, "success");
                Cookies.remove('findUser')
                navigate('/activation/reset-password');
            })
            .catch(error => {
                createToast(error.response.data.message);
                console.log(error);
            });

    }



    useEffect(() => {
        const userData = JSON.parse(Cookie.get('findUser')) ?? null;
        if (userData) {
            setFindUser((prevState) => ({
                name: userData.name,
                email: userData.email ?? null,
                mobile: userData.mobile ?? null,
                profile_photo: userData.profile_photo ?? null
            }))
        }
    }, []);




    return (
        <>
            <ResetHeader />
            <div className="reset-area">
                <div className="reset-wraper">
                    <div className="reset-box">
                        <div className="reset-box-header">
                            <span className="title">Reset your password</span>
                        </div>
                        <div className="reset-body">
                            <div className="find-user-account">
                                <img src={findUser.profile_photo ? findUser.profile_photo : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"} alt="" />
                                <span>{findUser.name}</span>

                                {findUser.email && <p>Email: {hideMobileEmail(findUser.email)}</p>}
                                {findUser.mobile && <p>Mobile: {hideMobileEmail(findUser.mobile)}</p>}

                                <p>To reset your account password, please continue</p>
                            </div>
                        </div>
                        <div className="reset-footer">
                            <a href="#" />
                            <div className="reset-btns">
                                <a onClick={handleNotYou} className="cancel" hreg="#">Not you ?</a>
                                <a onClick={handlePasswordResetLink} className="continue" href='#'>Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>


    )
}

export default FindAccount