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
import { tokenUser } from "./redux/auth/action";
import Cookies from "js-cookie";
import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/RegisterPage";
import LoggedInRoute from "./privateRoute/LoggedInRoute";
import LoggedOutRoute from "./privateRoute/LoggedOutRoute";
import FriendsPage from "./pages/Friends/FriendsPage";
import AboutPage from "./pages/About/AboutPage";
import WorkAndEducation from "./components/Profile/About/WorkAndEducation";
import LifeEvents from "./components/Profile/About/LifeEvents";
import Transparency from "./components/Profile/About/Transparency";
import Privacy from "./components/Profile/About/Privacy";
import Contact from "./components/Profile/About/Contact";
import PlacesLived from "./components/Profile/About/PlacesLived";
import Follower from "./components/Profile/Follower/Follower";

function App() {
  const dispatch = useDispatch();

  const tokenDispatch = useDispatch();
  const { topLoader } = useSelector((state) => state);

  const token = Cookies.get("authToken");

  useEffect(() => {
    if (token) {
      tokenDispatch(tokenUser(token));
    }
    // }, [token, tokenDispatch]);
  }, []);

  return (
    <>
      <LoadingBar
        color="#1876f2"
        progress={topLoader}
        onLoaderFinished={() => dispatch(loader_end())}
      />

      <ToastContainer style={{ zIndex: 99999999 }} />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route element={<LoggedInRoute />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="followers" element={<Follower />}></Route>

            <Route path="about" element={<AboutPage />}></Route>
            <Route path="about_overview" element={<AboutPage />}></Route>
            <Route
              path="about_work_and_education"
              element={<WorkAndEducation />}></Route>
            <Route path="about_places" element={<PlacesLived />}></Route>
            <Route
              path="about_contact_and_basic_info"
              element={<Contact />}></Route>
            <Route
              path="about_privacy_and_legal_info"
              element={<Privacy />}></Route>
            <Route
              path="about_profile_transparency"
              element={<Transparency />}></Route>
            <Route path="about_details" element={<AboutPage />}></Route>
            <Route path="about_life_events" element={<LifeEvents />}></Route>
          </Route>

          <Route path="/friends" element={<FriendsPage />}></Route>
        </Route>

        <Route element={<LoggedOutRoute />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>

        <Route path="/activation/:type" element={<Activation />}></Route>
        <Route path="/find-account" element={<Forgot />}></Route>
        <Route path="/forgot-password" element={<FindAccount />}></Route>
        <Route path="/change-password" element={<Password />}></Route>
      </Routes>
    </>
  );
}

export default App;
