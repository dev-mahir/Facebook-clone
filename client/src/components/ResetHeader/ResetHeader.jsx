import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import fbLogo from '../../assets/icons/facebook.svg'
import { userLogin } from '../../redux/auth/action';
import { createToast } from '../../utility/toast';



const ResetHeader = () => {
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
            dispatch(userLogin(input, navigate, setInput));
            Cookies.remove("otp");
        }
    }


  return (
      <div className="reset-header">
          <div className="reset-header-wraper">
              <div className="reset-logo">
                  <Link to="/">  <img src={fbLogo} alt="" /> </Link>
              </div>
              <div className="login-part">
                  <input value={input.auth} name="auth" onChange={handleInputChange} type="text" placeholder="Email or mobile number" />
                  <input value={input.password} name="password" onChange={handleInputChange} type="text" placeholder="Password" />
                  <button type='submit' onClick={handleUserSubmit}>Log In</button>
                  <Link to="/find-account">Forgotten account?</Link>
              </div>
          </div>
      </div>
  )
}

export default ResetHeader