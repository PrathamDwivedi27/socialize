import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'

const Post = () => {
  return (
    <div className='post'>
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">Joyboy</span>
                <span className="postTime">5 mins ago</span>
            </div>

            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey! Its my first post:)</span>
            <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">69 people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">27 comments</span>
            </div>
        </div>
      
    </div>
  )
}

export default Post
