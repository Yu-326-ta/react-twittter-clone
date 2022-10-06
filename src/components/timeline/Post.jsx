import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

export const Post = () => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Yuta
              <span className="post_headerSpecial">
                <VerifiedUser className="post_badge" />
                @Yuta_Enginner
              </span>
            </h3>
          </div>
          <div className="post_haederDiscription">
            <p>React勉強</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" />
        <div className="post_footer">
          <ChatBubbleOutline font="small" />
          <Repeat font="small" />
          <FavoriteBorder font="small" />
          <PublishOutlined font="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
