import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = () => {
  return (
    <div className='rightbar'>
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
      
    </div> 
  )
}

export default Rightbar
