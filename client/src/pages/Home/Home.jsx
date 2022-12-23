import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreatPost from "../../components/Timeline/CreatePost";
import UserPost from "../../components/Timeline/UserPost";

const Home = () => {

  return <>
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
  </>;
};

export default Home;
