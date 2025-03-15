import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'

const Profile = () => {
  return (
    <>
         <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/8.jpeg" alt=""  className='profileUserImg'/>
                </div>
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Sophia Anderson</h4>
                <h4 className='profileInfoDesc'>Hello everynian. How are you ? Fine, Thankyou</h4>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
        
        </div>
      
    </>
  )
}

export default Profile
