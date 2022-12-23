import React from 'react'
import Avatar from '../Avatar/Avatar'

const CreatPost = () => {
  return (
      <>
      
      <div className="create-post">
        <div className="create-post-header">
          <Avatar />

            <input type="text" placeholder='Whats on your mind ?  ' />
        </div>
        <div className="divider-0" />
        <div className="create-post-footer">
          <ul>
            <li><div className="post-icon" /><span>Live Video</span></li>
            <li><div className="post-icon" /> Photo/video</li>
            <li><div className="post-icon" /> Feeling/ctivity</li>
          </ul>
        </div>
      </div>
      </>
  )
}

export default CreatPost