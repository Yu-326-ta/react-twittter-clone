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

export const Post = ({
  displayName,
  username,
  verified,
  text,
  avatar,
  image,
}) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayName}
              <span className="post_headerSpecial">
                <VerifiedUser className="post_badge" />@{username}
              </span>
            </h3>
          </div>
          <div className="post_haederDiscription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} />
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
