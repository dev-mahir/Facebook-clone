import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Tooltip from "../Tooltip/Tooltip";
import { MdError } from 'react-icons/md';
import { createToast } from '../../utility/toast'
import { userRegister } from "../../redux/auth/action";
import { useDispatch } from 'react-redux'



// date
const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const years = Array.from({ length: 118 }, (_, i) => new Date().getFullYear() - i);



const Register = ({ setRegister, loginLink }) => {
    const [custom_gender, setCustom_gender] = useState(false)

    // current date 
    const date = new Date();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // tooltip state 
    const [show, setShow] = useState(false);


    // Empty field check 
    const [isEmpty, setIsEmpty] = useState({

    });



    // form fields 
    const [input, setInput] = useState({
        first_name: '',
        sur_name: '',
        auth: '',
        password: '',
        birth_date: date.getDate().toString(),
        birth_month: month[date.getMonth()],
        birth_year: date.getFullYear().toString(),
        gender: ''
    })

    const { first_name, sur_name, auth, password, birth_date, birth_month, birth_year, gender } = input;


    // form validate state 
    const [validate, setValidate] = useState({
        first_name: false,
        sur_name: false,
        auth: false,
        password: false,
        birth_date: false,
        birth_month: false,
        birth_year: false,
        gender: false

    })

    // tooltip hide/show state 
    const [tooltip, setTooltip] = useState({
        first_name: false,
        sur_name: false,
        auth: false,
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
        }));

        setIsEmpty((prevState) => ({
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



    // field empty check and show error






    // handle register 
    const handleRegister = (e) => {
        e.preventDefault();
        if (!input.first_name || !input.sur_name || !input.auth || !input.password || !input.gender) {
            createToast("All fields are required");

            setIsEmpty((prevState) => ({
                ...prevState,
                first_name: input.first_name,
                sur_name: input.sur_name,
                auth: input.auth,
                password: input.password,
                birth_date: input.birth_date,
                birth_month: input.birth_month,
                birth_year: input.birth_year,
                gender: input.gender

            }))



        } else {
            setIsEmpty((prevState) => ({
                ...prevState,
                first_name: input.first_name,
                sur_name: input.sur_name,
                auth: input.auth,
                password: input.password,
                birth_date: input.birth_date,
                birth_month: input.birth_month,
                birth_year: input.birth_year,
                gender: input.gender

            }))
            dispatch(userRegister(
                {
                    first_name,
                    sur_name,
                    auth,
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

        <div className="sign-up-body">
            <form onSubmit={handleRegister}>
                <div className="reg-form reg-form-inline">
                    <div className="input-box">

                        {(!first_name && tooltip.first_name) && <Tooltip
                            msg="What's your first name"
                            right="207px"
                            top="2px"
                        />}


                        <input
                            name="first_name"
                            type="text"
                            className={`  ${validate.first_name && "error-border"}   ${isEmpty.first_name === "" && "error-border"}`}
                            onBlur={handleInputValidate}
                            onFocus={handleInputValidateFocus}
                            onChange={handleInputChange}
                            placeholder="First Name" value={input.first_name} />

                        {(validate.first_name || isEmpty.first_name === "") && <span className="error-icon"><MdError /> </span>}

                    </div>

                    <div className="input-box">
                        {( !sur_name && tooltip.sur_name) && <Tooltip
                            msg="What's your sur name"
                            right="60px"
                            top="50px"
                            angle="top"
                        />}

                        <input
                            type="text"
                            className={`  ${validate.sur_name && "error-border"}   ${isEmpty.sur_name === "" && "error-border"}`}
                            name="sur_name"
                            onBlur={handleInputValidate}
                            onChange={handleInputChange}
                            onFocus={handleInputValidateFocus}
                            placeholder="Surname" value={input.sur_name} />

                        {(validate.sur_name || isEmpty.sur_name === "") && <span className="error-icon"><MdError /> </span>}
                    </div>

                </div>
                <div className="reg-form">
                    <div className="input-box email">
                        {( !auth && tooltip.auth) && <Tooltip
                            msg="You'll use this when you log in  and if you ever need to reset your password"
                            left="-235px"
                            width="370px"
                        />}
                        <input type="text"
                            name="auth"
                            className={` ${validate.auth && "error-border"}   ${isEmpty.auth === "" && "error-border"}`}
                            onChange={handleInputChange}
                            value={input.auth}
                            onBlur={handleInputValidate}
                            onFocus={handleInputValidateFocus}
                            placeholder="Mobile number or email address" />
                        {(validate.auth || isEmpty.auth === "") && <span className="error-icon"><MdError /> </span>}

                    </div>
                </div>
                <div className="reg-form">
                    <div className="input-box">
                        {(!password && tooltip.password) && <Tooltip
                            msg="Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)"
                            left="-275px"
                            width="240px"
                        />}
                        <input type="password"
                            name="password"
                            onChange={handleInputChange}
                            value={input.password}

                            onBlur={handleInputValidate}
                            onFocus={handleInputValidateFocus}
                            className={` ${validate.password && "error-border"}   ${isEmpty.password === "" && "error-border"}`}
                            placeholder="New password" />

                        {(validate.password || isEmpty.password === "") && <span className="error-icon"><MdError /> </span>}
                    </div>
                </div>
                <div className="reg-form">
                    <span>Date of birth</span>
                    <div className="reg-form-select" style={{position: "relative"}}>


                        {(validate.birth_year || isEmpty.birth_year === "2022") && <span className="error-icon" style={{ top: "-20px" }}><MdError /> </span>}

                        <select name="birth_date" className={isEmpty.birth_year == date.getFullYear() && "error-border"} onChange={handleInputChange} >
                            {day.map((item, index) =>
                                <option value={item} key={index} selected={item === input.birth_date ? true : false}> {item}</option>
                            )}

                        </select>
                        <select name="birth_month" className={isEmpty.birth_year == date.getFullYear() && "error-border"} onChange={handleInputChange} >
                            {month.map((item, index) =>
                                <option value={item} key={index} selected={item === input.birth_month ? true : false} >{item}</option>
                            )}
                        </select>
                        <select name="birth_year" className={`${isEmpty.birth_year == date.getFullYear() && "error-border"}  ${input.birth_year === date.getFullYear() && "error-border"}        `} onChange={handleInputChange} >
                            {years.map((item, index) =>
                                <option value={item} key={index} selected={date.getFullYear() === item ? true : false}>{item}  </option>
                            )}
                        </select>
                    </div>
                </div>



                <div className="reg-form">
                    <span>Gender</span>
                    <div className="reg-form-select">
                        <label className={` ${validate.gender && "error-border"}   ${isEmpty.gender === "" && "error-border"}`}>
                            Female
                            <input type="radio" name="gender" value="Male" onChange={handleInputChange} />
                        </label>
                        <label className={` ${validate.gender && "error-border"}   ${isEmpty.gender === "" && "error-border"}`}>
                            Male
                            <input type="radio" name="gender" value="Female" onChange={handleInputChange} />
                        </label>
                        <div style={{ position: "relative" }}>
                            {(validate.gender || isEmpty.gender === "") && <span className="error-icon" style={{ top: "-20px" }}><MdError /> </span>}

                            <label className={` ${validate.gender && "error-border"}   ${isEmpty.gender === "" && "error-border"}`} htmlFor="custom_gender" onClick={() => setCustom_gender(!custom_gender)}  >
                                Custom
                                <input id="custom_gender" type="radio" name="gender" onChange={handleInputChange} />
                            </label>
                        </div>
                    </div>
                    {custom_gender && <div className="reg-form-select custom-gender">
                        <select name="" id="">
                            <option disabled selected>Choose your pronoun (the gender you'll be called). </option>
                            <option value="1">He/She: "Wish him a happy birthday!"</option>
                            <option value="1">They/Them: "Wish him a happy birthday!"</option>
                        </select>
                        <span>Everyone will see your pronouns.</span>
                        <div className="reg-form">
                            <input name="custom_gender" className="custom_gender" type="text" placeholder="Gender (Optional)" />
                        </div>

                    </div>
                    }
                </div>

                <div className="reg-form">
                    <p>People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a></p>
                </div>
                <div className="reg-form">
                    <p>By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
                </div>
                <div className="reg-form">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            {

                loginLink && <div style={{ textAlign: "center" }}>
                    <Link to={loginLink} style={{ color: "#1877f2" }}>Already have an account</Link>
                </div>
            }
        </div>








    </>;
};

export default Register;
