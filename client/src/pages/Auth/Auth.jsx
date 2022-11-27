import React, { useState } from "react";
import Register from "../../components/Register/Register";
import fbLogo from '../../assets/icons/facebook.svg'
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";

const Auth = () => {
  const [register, setRegister] = useState(false)


  return (
    <>
      {register && <Register setRegister={ setRegister} />}
      <div className="fb-auth">
        <div className="auth-wraper">

          <div className="auth-right">
          <Login setRegister={setRegister}/>
      
          </div>
        </div>
      </div>

      <Footer/>
    
    </>
  );
};

export default Auth;
