import { Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import React from "react";
import "./Shots.css";
import { ExpandMoreRounded } from "@material-ui/icons";
import PropTypes from "prop-types";



function Shots({ profilePic, image, username, timestamp, message,embedId }) {
  return (
    <div className="post1">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>JVL Code</h3>
          <p>october 3 at 4.58 PM</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>React JS for Beginners in Tamil | Full Video</p>
      </div>
      <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/-qyBtRPWZsQ?si=1H9MvWWL45XnqW7b`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreRounded />
        </div>
      </div>

      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>Traversy Media</h3>
          <p>october 3 at 4.58 PM</p>
        </div>
      </div>
 <div className="post__bottom">
        <p>React JS Crash Course</p>
      </div>
      <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/w7ejDZ8SWv8?si=6-jz5wK41uSAN_ze`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p >Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreRounded />
        </div>
      </div>







    </div>








  );
}


Shots.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default Shots;