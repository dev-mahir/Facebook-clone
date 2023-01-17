import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import UserPost from "../../components/Timeline/UserPost";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import CreatPost from "../../components/Timeline/CreatePost";
import ProfileInro from "../../components/Profile/ProfileIntro/ProfileInro";
import ProfileGallery from "../../components/Profile/ProfileGallery/ProfileGallery";
import Friends from "../../components/Profile/Friends/Friends";

const Profile = () => {


  return <>
    <MainHeader />
    <ProfileHeader />
    <div class="fb-profile-body">
      <div className="fb-body-wrapper">
        <div className="user-profile-personal-info">
          <ProfileInro />
          <ProfileGallery />
          <Friends />
        </div>
        <div className="user-profile-posts">
          <div className="fb-home-timeline">
            <CreatPost />
            <UserPost />
          </div>
        </div>
      </div>
    </div>

  </>;
};

export default Profile;
