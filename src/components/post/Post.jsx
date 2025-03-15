import React, { useState } from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData'

const Post = ({post}) => {
    const [like,setLike]=useState(post.like);
    const [isLiked,setIsLiked]=useState(false);

    const handleLike=()=>{
        if(isLiked){
            setLike((previousState)=>{
                setIsLiked(false);
                return previousState-1;
            })
        }
        else setLike((previousState)=>{
            setIsLiked(true);
            return previousState+1;
        })
    }
    
  return (
    <div className='post'>
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{
                    Users.filter((u)=>u.id===post.userId)[0].username 
                    
                }</span>
                <span className="postTime">{post.date}</span>
            </div>

            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt=""  onClick={handleLike} />
                <img className="likeIcon" src="/assets/heart.png" alt=""  onClick={handleLike} />
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      
    </div>
  )
}

export default Post
