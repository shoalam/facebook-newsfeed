import React, { Component } from "react";
import "./post.css";
import Userinfo from "../userinfo/userinfo";
import Postcontent from "../Postcontent/Postcontent";
import Reactions from "../Reactions/Reactions";

export default class Post extends Component {
  state = {
    post: {
      imgSrc: "myphoto.jpg",
      username: "Md. Shofiul Alam",
      content: "Lorem Ipsum is simply dummy text of the printing",
      duration: 1 + "hr",
      isLiked: true,
    },
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { imgSrc, username, content, duration, isLiked } = this.state.post;
    const count = this.state.count;
    console.log(count);
    return (
      <div className="post-wrapper">
        <Userinfo name={username} duration={duration} img={imgSrc} />
        <Postcontent content={content} />
        <Reactions count={count} onIncrement={this.handleIncrement} />
      </div>
    );
  }
}
