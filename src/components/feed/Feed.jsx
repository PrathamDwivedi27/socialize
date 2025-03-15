import React from 'react'
import Share from '../share/Share'
import './feed.css'
import Post from '../post/Post'
import { Posts } from '../../dummyData'

const Feed = () => {
  return (
    <div className='feed'>
      <Share/>
      {Posts.map((post)=>{
        return <Post key={post.id} post={post}/>
      })}
      
    </div>
  )
}

export default Feed
