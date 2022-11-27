import React from "react";
import { useState } from "react";
import { useNavigate }  from 'react-router-dom'
import closeBtn from '../../assets/icons/cross.png';
import Tooltip from "../Tooltip/Tooltip";
import { MdError } from 'react-icons/md';
import { createToast } from '../../utility/toast'
import { userRegister } from "../../redux/auth/action";
import { useDispatch } from 'react-redux'

// date

const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const years = Array.from({ length: 118 }, (_, i) => new Date().getFullYear() - i);


const Register = ({ setRegister }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // tooltip state 
    const [show, setShow] = useState(false);

    // form fields 
    const [input, setInput] = useState({
        first_name: '',
        sur_name: '',
        emailOrMobile: '',
        password: '',
        birth_date: '',
        birth_month: '',
        birth_year: '',
        gender: ''
    })

    const { first_name, sur_name, emailOrMobile, password, birth_date, birth_month, birth_year, gender } = input;

    // form validate state 
    const [validate, setValidate] = useState({
        first_name: false,
        sur_name: false,
        emailOrMobile: false,
        password: false,
        birth_date: false,
        birth_month: false,
        birth_year: false

    })

    // tooltip hide/show state 
    const [tooltip, setTooltip] = useState({
        first_name: false,
        sur_name: false,
        emailOrMobile: false,
        password: false,
        day: false,
        month: false,
        year: false,
    })

    // input state update 
    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    // handle input validate 
    const handleInputValidate = (e) => {
        const fieldName = e.target.name;
        if (!input[fieldName]) {
            setValidate((prevState) => ({
                ...prevState,
                [fieldName]: true
            }))
            setShow(true)
            setTooltip((prevState) => ({
                ...prevState,
                [fieldName]: false
            }))
        } else {
            setValidate((prevState) => ({
                ...prevState,
                [fieldName]: false
            }))
            setShow(false)
        }
    }


    //hanldle  input validate on focus
    const handleInputValidateFocus = (e) => {
        const fieldName = e.target.name;
        setValidate((prevState) => ({
            ...prevState,
            [fieldName]: false
        }))

        if (show) {
            setTooltip((prevState) => ({
                ...prevState,
                [fieldName]: true
            }))
        }
    }


    // handle register 
    const handleRegister = (e) => {
        e.preventDefault();
        if (!input.first_name || !input.sur_name || !input.emailOrMobile || !input.password || !input.gender) {
            createToast("All fields are required");
        } else {
            dispatch(userRegister(
                {
                    first_name,
                    sur_name,
                    email: emailOrMobile,
                    password,
                    birth_date,
                    birth_month,
                    birth_year,
                    gender
                }
                , setInput,
                e, setRegister, navigate
            ))
            
        }
    }

    return <>
        <div className="blur-box">
            <div className="sign-up-card">
                <div className="sign-up-header">
                    <div className="sign-up-content">
                        <span>Sign Up</span>
                        <span>It's quick and easy.</span>
                    </div>
                    <button onClick={() => setRegister(false)}><img src={closeBtn} alt="" /></button>
                </div>
                <div className="sign-up-body">
                    <form onSubmit={handleRegister}>
                        <div className="reg-form reg-form-inline">
                            <div className="input-box">

                                {tooltip.first_name && <Tooltip
                                    msg="What's your first name"
                                    right="207px"
                                />}


                                <input
                                    name="first_name"
                                    type="text"
                                    className={validate.first_name && "error-border"}
                                    onBlur={handleInputValidate}
                                    onFocus={handleInputValidateFocus}
                                    onChange={handleInputChange}
                                    placeholder="First Name" value={input.first_name} />

                                {validate.first_name && <span className="error-icon"><MdError /> </span>}

                            </div>

                            <div className="input-box">
                                {tooltip.sur_name && <Tooltip
                                    msg="What's your first name"
                                    right="207px"
                                />}

                                <input
                                    type="text"
                                    className={validate.sur_name && "error-border"}
                                    name="sur_name"
                                    onBlur={handleInputValidate}
                                    onChange={handleInputChange}
                                    onFocus={handleInputValidateFocus}
                                    placeholder="Surname" value={input.sur_name} />

                                {validate.sur_name && <span className="error-icon"><MdError /> </span>}


                            </div>

                        </div>
                        <div className="reg-form">
                            <div className="input-box">
                                {tooltip.emailOrMobile && <Tooltip
                                    msg="You'll use this when you log in  and if you ever need to reset your password"
                                    left="-385px"
                                    width="370px"
                                />}
                                <input type="text"
                                    name="emailOrMobile"
                                    className={validate.emailOrMobile && "error-border"}
                                    onChange={handleInputChange}
                                    value={input.emailOrMobile}
                                    onBlur={handleInputValidate}
                                    onFocus={handleInputValidateFocus}
                                    placeholder="Mobile number or email address" />
                                {validate.emailOrMobile && <span className="error-icon"><MdError /> </span>}


                            </div>
                        </div>
                        <div className="reg-form">

                            <div className="input-box">
                                {tooltip.password && <Tooltip
                                    msg="Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)"
                                    left="-385px"
                                    width="370px"
                                />}
                                <input type="text"
                                    name="password"
                                    onChange={handleInputChange}
                                    value={input.password}
                                    onBlur={handleInputValidate}
                                    onFocus={handleInputValidateFocus}
                                    className={validate.password && "error-border"}
                                    placeholder="New password" />

                                {validate.password && <span className="error-icon"><MdError /> </span>}


                            </div>
                        </div>
                        <div className="reg-form">
                            <span>Date of birth</span>
                            <div className="reg-form-select">

                                <select name="birth_date" className={validate.day && "error-border"} onChange={handleInputChange} >
                                    {day.map((item, index) =>
                                        <option value={item} key={index}> {item}</option>
                                    )}
                                </select>
                                <select name="birth_month" onChange={handleInputChange} >
                                    {month.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                                <select name="birth_year" onChange={handleInputChange} >
                                    {years.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="reg-form">
                            <span>Gender</span>
                            <div className="reg-form-select">
                                <label>
                                    Female
                                    <input type="radio" name="gender" value="Male" onChange={handleInputChange} />
                                </label>
                                <label>
                                    Male
                                    <input type="radio" name="gender" value="Female" onChange={handleInputChange} />
                                </label>
                                <label>
                                    Custom
                                    <input type="radio" name="gender" onChange={handleInputChange} />
                                </label>
                            </div>
                        </div>

                        <div className="reg-form">
                            <p>People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a></p>
                        </div>
                        <div className="reg-form">
                            <p>By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
                        </div>
                        <div className="reg-form">
                            <button>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>;
};

export default Register;