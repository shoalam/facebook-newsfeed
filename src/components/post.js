import React, { Component } from "react";
import "./post.css";

export default class Post extends Component {
  state = {
    imgSrc: "myphoto.jpg",
    username: "Md. Shofiul Alam",
    content: "Lorem Ipsum is simply dummy text of the printing",
    duration: 1 + "hr",
    isLiked: true,
  };
  render() {
    const { imgSrc, username, content, duration, isLiked } = this.state;
    return (
      <div className="container mx-auto">
        <div className="post-wrapper">
          <div className="post align-items-center d-flex">
            <div className="image-wrapper">
              <img src={imgSrc} alt="" />
            </div>
            <div className="d-flex flex-column">
              <h2>{username}</h2>
              <div>{duration}</div>
            </div>
          </div>
          <div className="post-content">
            <p>{content}</p>
          </div>
          <div className="social d-flex justify-content-between">
            <div>{isLiked ? "Liked" : "Like"}</div>
            <div>Comment </div>
            <div>Share</div>
          </div>
        </div>
      </div>
    );
  }
}
