import React, { Component } from "react";
import FeedTop from "../feedTop/feedtop";
import Post from "../post/post";
import Stories from "../Stories/Stories";

export default class Newsfeed extends Component {
  render() {
    return (
      <>
        <Stories />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <FeedTop />
          <Post />
        </div>
      </>
    );
  }
}
