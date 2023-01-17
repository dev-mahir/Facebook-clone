import React from 'react'
import { useSelector } from 'react-redux';

const Avatar = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <>
            <img className='user-img-menu' src={user.profile_photo ? `/images/${user.profile_photo}` : "https://www.w3schools.com/howto/img_avatar.png"} alt="" />
        </>
    )
}

export default Avatar