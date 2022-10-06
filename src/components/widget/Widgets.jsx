import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed tweetId={"1475764828208009220"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Shin_Engineer"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.con/Shin_Engineer"}
          options={{ text: "#React.js勉強中", via: "Shin_Engineer" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
