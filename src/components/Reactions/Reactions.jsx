import React, { Component } from "react";
import LikeIcon from "../icons/like";
import ShareOutlineIcon from "../icons/share";
import BxCommentIcon from "../icons/comment";
import "../post/post.css";

export default class Reactions extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <div className="increment-display d-flex align-items-center">
            <img src="./like.svg" className="me-2" style={{ width: "20px" }} />
            <p className="d-flex gap-2">
              {this.props.count > 0 ? this.props.count + "likes" : null}
            </p>
          </div>
          <div className="comment-display d-flex align-items-center">
            <p>{this.props.count > 0 ? this.props.count : null}</p>
            <p>Comments</p>
          </div>
        </div>
        <div className="social d-flex justify-content-between">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none"
            onClick={this.props.onIncrement}
          >
            <LikeIcon className="me-2" />
            Like
          </a>
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none"
          >
            <BxCommentIcon className="me-2" />
            Comment
          </a>
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none"
          >
            <ShareOutlineIcon className="me-2" style={{ fontSize: 22 }} />
            Share
          </a>
        </div>
      </>
    );
  }
}
