import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import UserPost from "../../components/Timeline/UserPost";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import CreatPost from "../../components/Timeline/CreatePost";
import ProfileInro from "../../components/Profile/ProfileIntro/ProfileInro";
import ProfileGallery from "../../components/Profile/ProfileGallery/ProfileGallery";
import Friends from "../../components/Profile/Friends/Friends";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PostSection from "../../components/Profile/PostSection";



const Profile = () => {

  const { pathname } = useLocation();
  const path = pathname.split('/')[1]

  return <>
    <MainHeader />
    <ProfileHeader />
    <div class="fb-profile-body">
      <div className="fb-body-wrapper">
        <Outlet />

        {pathname === "/profile" && <PostSection />}
        
      </div>
    </div>

  </>;
};

export default Profile;
