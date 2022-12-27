import React from "react";
import { useSelector } from "react-redux";
import MainHeader from "../../components/MainHeader/MainHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreatPost from "../../components/Timeline/CreatePost";
import UserPost from "../../components/Timeline/UserPost";
import Auth from "../Auth/Auth";

const Home = () => {

  const { isLoggedIn } = useSelector(state => state.auth)



  return <>
    {isLoggedIn ?
      <div>
        <MainHeader />
        <div className="fb-home-body">
          <Sidebar />
          <div className="fb-home-timeline-area">
            <div className="fb-home-timeline">
              <CreatPost />
              <UserPost />
            </div>
          </div>
        </div>
      </div>
      :
      <Auth />
    }

  </>;
};

export default Home;
