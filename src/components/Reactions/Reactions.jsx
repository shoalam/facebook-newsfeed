import React, { Component } from "react";
import LikeIcon from "../icons/like";
import ShareOutlineIcon from "../icons/share";
import BxCommentIcon from "../icons/comment";

export default class Reactions extends Component {
  formatCount = () => {
    if (this.props.count > 0) {
      return this.props.count + " " + "Likes";
    }
  };
  render() {
    return (
      <>
        <div className="increment-display">
          <p>{this.formatCount()}</p>
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
