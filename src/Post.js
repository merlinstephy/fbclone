import { Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import React from "react";
import "./Post.css";
import { ExpandMoreRounded } from "@material-ui/icons";
function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>Trending</h3>
          <p>october 21 2023 at 6.00AM</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>Good Morning</p>
      </div>
      <div className="post__image">
        <img src="/images/pic1.jpeg" alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p style={{marginTop : '20px'}}>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p style={{marginTop : '20px'}}>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p style={{marginTop : '20px'}}> Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreRounded />
        </div>
      </div>



      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>Nature</h3>
          <p>october 13 2023 at 9.00AM</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>Wonderful !</p>
      </div>
      <div className="post__image">
        <img src="/images/nature.jpg" alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p style={{marginTop : '20px'}}>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p style={{marginTop : '20px'}}>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p style={{marginTop : '20px'}}> Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreRounded />
        </div>
      </div>






    </div>
  );
}

export default Post;
