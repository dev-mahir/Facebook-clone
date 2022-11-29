import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Activation from "./pages/Activation/Activation";
import Forgot from "./pages/Forgot/Forgot";
import FindAccount from "./pages/FindAccount/FindAccount";
import Password from "./pages/Password/Password";

function App() {
  return (
    <>
      <ToastContainer style={{ zIndex: 99999 }} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/activation" element={<Activation />}></Route>
        <Route path="/forgot-password" element={<Forgot />}></Route>
        <Route path="/find-account" element={<FindAccount />}></Route>
        <Route path="/change-password" element={<Password />}></Route>
      </Routes>
    </>
  );
}

export default App;
