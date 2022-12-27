import React, { useState } from 'react'
import Register from '../../components/Register/Register';
import fbLogo from '../../assets/icons/facebook.svg';
import Footer from '../../components/Footer/Footer';



const RegisterPage = () => {
  const [register, setRegister] = useState(false)

  return (
    <>
      <div div className='registerPage' style={{ background: "#f0f2f5", paddingBottom: "50px"}}>

        <div className='logo'>
          <img src={fbLogo} alt="" />

        </div>
        <div className="sign-up-card ">
          <div className="sign-up-header">
            <div className="sign-up-content" style={{ width: "100%" }}>
              <center>
                <span style={{ fontSize: "28px" }}>Create a new account</span>
                <span>It's quick and easy.</span>
              </center>
            </div>
          </div>

          <Register setRegister={setRegister} loginLink="/login" />

        </div>



      </div>
      <div style={{ marginTop: "20px" }}>
        <Footer />
      </div>

    </>

  )
}

export default RegisterPage