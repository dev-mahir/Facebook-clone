import React, { useState } from "react";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";
import closeBtn from '../../assets/icons/cross.png';


const Auth = () => {
  const [register, setRegister] = useState(false)


  return (
    <>

      {register &&

        <>
          <div className="blur-box">

            <div className="sign-up-card">
              <div className="sign-up-header">
                <div className="sign-up-content">
                <span>Sign Up</span>
                  <span>It's quick and easy.</span>
              </div>
                <button onClick={() => setRegister(false)}><img src={closeBtn} alt="" /></button>

              </div>
              <Register
                setRegister={setRegister} />
            </div>



          </div>




        </>




      }

      <div className="fb-auth">
        <div className="auth-wraper">

          <div className="auth-right">
            <Login setRegister={setRegister} />

          </div>
        </div>
      </div>

      <Footer />

    </>
  );
};

export default Auth;
