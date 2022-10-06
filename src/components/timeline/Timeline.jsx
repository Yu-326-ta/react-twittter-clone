import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";

export const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      <TweetBox />
    </div>
  );
};

export default Timeline;
