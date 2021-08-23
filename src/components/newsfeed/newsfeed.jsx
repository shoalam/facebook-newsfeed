import React, { Component } from "react";
import Post from "../post/post";

export default class Newsfeed extends Component {
  render() {
    return (
      <div className="w-50">
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}
