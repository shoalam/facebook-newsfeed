import React, { Component } from "react";
import "./post.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import Userinfo from "../userinfo/userinfo";
// import Postcontent from "../Postcontent/Postcontent";
import CommentBox from "../comment/commentbox";
import Reactions from "../Reactions/Reactions";
import SingleComment from "../comment/singleComment";

export default class Post extends Component {
  state = {
    posts: [
      {
        imgSrc: "myphoto.jpg",
        username: "Md. Shofiul Alam",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        duration: 1 + "hr.",
      },
      {
        imgSrc: "team-3.jpg",
        username: "John Doe",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        duration: 1 + "hr.",
      },

      {
        imgSrc: "ins1.jpg",
        username: "Jane Doe",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        duration: 1 + "hr.",
      },
    ],
    isLiked: false,
    count: 0,
  };

  handleIncrement = (e) => {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { isLiked } = this.state;
    const count = this.state.count;
    return (
      <>
        {this.state.posts.map((post) => (
          <div className="post-wrapper mb-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className="post align-items-center d-flex">
                <div className="image-wrapper">
                  <img src={post.imgSrc} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <h2>{post.username}</h2>
                  <div>{post.duration}</div>
                </div>
              </div>
              <div>
                <img src="ellipse.png" alt="" />
              </div>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
            </div>
            <Reactions
              count={count}
              onIncrement={this.handleIncrement}
              isLiked={isLiked}
            />
            <CommentBox />
          </div>
        ))}
      </>
    );
  }
}
