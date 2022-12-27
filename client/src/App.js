import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
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
import { tokenUser } from "./redux/auth/action";
import Cookies from "js-cookie";
import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/RegisterPage";
import Friends from "./components/Friends/Friends";
import LoggedInRoute from "./privateRoute/LoggedInRoute";
import LoggedOutRoute from "./privateRoute/LoggedOutRoute";
import Test from "./components/Test";

function App() {
  const dispatch = useDispatch();

  const tokenDispatch = useDispatch();
  const { topLoader } = useSelector((state) => state);

  const token = Cookies.get("authToken");

  useEffect(() => {
    if (token) {
      tokenDispatch(tokenUser(token));
    }
  }, [token, tokenDispatch]);

  return (
    <>
      <LoadingBar
        color="#1876f2"
        progress={topLoader}
        onLoaderFinished={() => dispatch(loader_end())}
      />

      <ToastContainer style={{ zIndex: 99999 }} />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route element={<LoggedInRoute />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
        </Route>

        <Route element={<LoggedOutRoute />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>

        <Route path="/activation/:type" element={<Activation />}></Route>
        <Route path="/find-account" element={<Forgot />}></Route>
        <Route path="/forgot-password" element={<FindAccount />}></Route>
        <Route path="/change-password" element={<Password />}></Route>

        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
}

export default App;
