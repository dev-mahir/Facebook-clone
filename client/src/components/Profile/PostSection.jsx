import React from 'react'
import CreatPost from '../Timeline/CreatePost'
import UserPost from '../Timeline/UserPost'
import Friends from './Friends/Friends'
import ProfileGallery from './ProfileGallery/ProfileGallery'
import ProfileInro from './ProfileIntro/ProfileInro'

const PostSection = () => {
    return (
        <>
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
        </>

    )
}

export default PostSection