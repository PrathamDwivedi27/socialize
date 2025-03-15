import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pallavi</b> and <b>3 other friends</b> have birthday today</span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user)=>{
            return <Online key={user.id} user={user}/>
          })}
          
          
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">William Taylor</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane Wilson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Motherboard</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Bhosdiwala</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Gangubai</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/10.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johanson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Sparky</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
      
    </div> 
  )
}

export default Rightbar
