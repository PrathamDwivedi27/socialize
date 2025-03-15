import React from 'react'
import './online.css'

const Online = ({user}) => {
    console.log(user)
  return (
    <div className='rightbarFriend'>
        <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </div>
  )
}

export default Online
