import React from 'react'
import Share from '../share/Share'
import './feed.css'
import Post from '../post/Post'

const Feed = () => {
  return (
    <div className='feed'>
      <Share/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
    </div>
  )
}

export default Feed
