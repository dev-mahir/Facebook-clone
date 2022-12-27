import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { MdError } from 'react-icons/md';
import { useDispatch } from 'react-redux'
import { createToast } from "../utility/toast";



// date
const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const years = Array.from({ length: 118 }, (_, i) => new Date().getFullYear() - i);



const Test = ({ setRegister, loginLink }) => {
    const [custom_gender, setCustom_gender] = useState(false)

    // current date 
    const date = new Date();

    const dispatch = useDispatch();




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




    // input state update 
    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));

    }

    const [showFocus, setShowFocus] = useState({
        first_name: false,
        sur_name: false,
        auth: false,
        password: false,
        birth_date: false,
        birth_month: false,
        birth_year: false,
        gender: false
    })


    const [errorBorder, setErrorBorder] = useState({
        first_name: false,
        sur_name: false,
        auth: false,
        password: false,
        birth_date: false,
        birth_month: false,
        birth_year: false,
        gender: false
    })

    const [errorFocus, setErrorFocus] = useState({
        first_name: false,
        sur_name: false,
        auth: false,
        password: false,
        birth_date: false,
        birth_month: false,
        birth_year: false,
        gender: false
    })




    // blur 
    const handleInputValidate = (e) => {
        let fieldName = e.target.name;
        if (!input[fieldName]) {
            setErrorBorder((prevState) => ({
                ...prevState,
                [e.target.name]: true
            }));
            setShowFocus((prevState) => ({
                ...prevState,
                [e.target.name]: true
            }));

            setErrorFocus((prevState) => ({
                ...prevState,
                [e.target.name]: false
            }))


        } else {
            setErrorBorder((prevState) => ({
                ...prevState,
                [e.target.name]: false
            }));
            setShowFocus((prevState) => ({
                ...prevState,
                [e.target.name]: false
            }));

        }


    }


    // focus 
    const handleInputValidateFocus = (e) => {
        let fieldName = e.target.name;
        if (!input[fieldName]) {
            setErrorFocus((prevState) => ({
                ...prevState,
                [e.target.name]: true
            }));

        } else {
            setErrorFocus((prevState) => ({
                ...prevState,
                [e.target.name]: false
            }))
        }
    }




    // handle register 
    const handleRegister = (e) => {
        e.preventDefault();
        if (!input.first_name || !input.sur_name || !input.auth || !input.password || !input.gender) {
            createToast("All fields are required");


        } else {


        }
    }

    console.log(showFocus);
    console.log(errorFocus);

    return <>

        <div className="sign-up-body" style={{ width: "420px", marginLeft: "auto", marginRight: "auto" }}>
            <form onSubmit={handleRegister}>
                <div className="reg-form reg-form-inline">
                    <div className="input-box">
                        {(errorFocus.first_name) && "kjdkfkd"}
                        <input
                            name="first_name"
                            type="text"
                            className={`${errorBorder.first_name && "error-border"}`}
                            onBlur={handleInputValidate}
                            onFocus={handleInputValidateFocus}
                            onChange={handleInputChange}
                            placeholder="First Name" value={input.first_name} />
                        {errorBorder.first_name && <span className="error-icon"> <MdError /> </span>}
                    </div>

                    <div className="input-box">
                        <input
                            type="text"
                            name="sur_name"
                            onBlur={handleInputValidate}
                            onChange={handleInputChange}
                            onFocus={handleInputValidateFocus}
                            placeholder="Surname" value={input.sur_name} />
                        {errorBorder.sur_name && <span className="error-icon"> <MdError /> </span>}

                    </div>

                </div>
                <div className="reg-form">
                    <div className="input-box email">
                        <input type="text"
                            name="auth"
                            onChange={handleInputChange}
                            value={input.auth}
                            onBlur={handleInputValidate}
                            onFocus={handleInputValidateFocus}
                            placeholder="Mobile number or email address" />
                        {errorBorder.auth && <span className="error-icon"> <MdError /> </span>}

                    </div>
                </div>
                <div className="reg-form">
                    <div className="input-box">

                        <input type="password"
                            name="password"
                            onChange={handleInputChange}
                            value={input.password}

                            onBlur={handleInputValidate}
                            onFocus={handleInputValidateFocus}
                            placeholder="New password" />
                        {errorBorder.password && <span className="error-icon"> <MdError /> </span>}


                    </div>
                </div>
                <div className="reg-form">
                    <span>Date of birth</span>
                    <div className="reg-form-select">

                        <div>
                            {(errorBorder.birth_year ==  date.getFullYear()) && <span className="error-icon"> <MdError /> </span>}

                        </div>
                        <select name="birth_date" onChange={handleInputChange} >
                            {day.map((item, index) =>
                                <option value={item} key={index} selected={item === input.birth_date ? true : false}> {item}</option>
                            )}

                        </select>
                        <select name="birth_month" onChange={handleInputChange} >
                            {month.map((item, index) =>
                                <option value={item} key={index} selected={item === input.birth_month ? true : false} >{item}</option>
                            )}
                        </select>
                          
                        <select name="birth_year" onChange={handleInputChange}   onBlur={handleInputValidate} >
                            {years.map((item, index) =>
                                <option value={item} key={index} selected={date.getFullYear() === item ? true : false}>{item}  </option>
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
                        <div>


                            <label>
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

export default Test;
