import React from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";

export const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      <TweetBox />

      <Post
        displayName="Yuta"
        username="Yuta_Engineer"
        verified={true}
        text="React勉強中"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random"
      />
    </div>
  );
};

export default Timeline;
