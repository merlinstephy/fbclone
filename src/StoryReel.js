import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="/images/feed5.jpg"
        title="Vijay"
        profileSrc="/images/feed5.jpg"
      />
      <Story
        image="/images/feed1.jpg"
        title="Nayan"
        profileSrc="/images/feed1.jpg"
      />
      <Story
        image="/images/feed3.jpg"
        title="Alu Arjun"
        profileSrc="/images/feed3.jpg"
      />
      <Story
        image="/images/feed2.jpg"
        title="Nasriya"
        profileSrc="/images/feed2.jpg"
      />
      <Story
        image="/images/feed4.jpg"
        title="Nivin pauly"
        profileSrc="/images/feed4.jpg"
      />
    </div>
  );
}

export default StoryReel;
