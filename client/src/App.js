import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Activation from "./pages/Activation/Activation";
import Forgot from "./pages/Forgot/Forgot";
import FindAccount from "./pages/FindAccount/FindAccount";
import Password from "./pages/Password/Password";
import { useDispatch, useSelector } from "react-redux";
import { loader_end } from "./redux/top-loader/action";
import AuthReject from "./privateRoute/AuthReject";

function App() {
  const dispatch = useDispatch();
  const { topLoader } = useSelector((state) => state);


  useEffect(() => { 

  }, [])


  return (
    <>
      <LoadingBar
        color="#1876f2"
        progress={topLoader}
        onLoaderFinished={() => dispatch(loader_end())}
      />
      <ToastContainer style={{ zIndex: 99999 }} />
      <Routes>
        <Route path="/" element={<AuthReject> <Home/></AuthReject>}></Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/activation/:type" element={<Activation />}></Route>
        <Route path="/forgot-password" element={<Forgot />}></Route>
        <Route path="/find-account" element={<FindAccount />}></Route>
        <Route path="/change-password" element={<Password />}></Route>
      </Routes>
    </>
  );
}

export default App;
