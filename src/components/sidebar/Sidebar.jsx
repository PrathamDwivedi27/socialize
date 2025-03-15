import React from 'react'
import './sidebar.css'
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import { Users } from '../../dummyData'
import CloseFriends from '../closeFriends/CloseFriends'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span>Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon'/>
            <span>Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span>Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon'/>
            <span>Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon'/>
            <span>Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span>Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon'/>
            <span>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon'/>
            <span>Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span>Courses</span>
          </li>
        </ul>
      <button className='sidebarButton'>Show More</button>
      <hr className='sidebarHr'/>
      <ul className="sidebarFriendList">
        {Users.map((user)=>{
          return <CloseFriends key={user.id} user={user}/>
        })}
        
      </ul>
      <div className="sidebarhr"></div>
    </div>
  )
}

export default Sidebar
