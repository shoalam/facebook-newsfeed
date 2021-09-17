import React, { Component } from "react";
import SingleComment from "./singleComment";
import EmojiSmileIcon from "../icons/emojismile";
import CameraIcon from "../icons/camera";
import FileGifIcon from "../icons/gif";

export default class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      newComments: [],
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      comment: "",
      newComments: [...this.state.newComments, this.state.comment],
    });
  };

  render() {
    return (
      <>
        <div className="align-items-center d-flex mt-3">
          <div className="image-wrapper">
            <img
              src="/myphoto.jpg"
              alt=""
              style={{ width: "36px", height: "36px" }}
            />
          </div>
          <form className="d-flex align-items-center justify-content-between form-group form-group-feedtop w-100">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Write a comment....."
              value={this.state.comment}
              onChange={this.onChangeHandler}
            />
            <div className="icons-wrapper d-flex align-items-center gap-3">
              <a href="#" className="text-decoration-none text-secondary">
                <EmojiSmileIcon />
              </a>
              <a href="#" className="text-decoration-none text-secondary">
                <CameraIcon />
              </a>
              <a href="#" className="text-decoration-none text-secondary">
                <FileGifIcon />
              </a>
              <a href="#" className="text-decoration-none text-secondary">
                <EmojiSmileIcon />
              </a>
            </div>
            <button
              type="Submit"
              onClick={this.onSubmitHandler}
              className="d-none"
            >
              Click Me
            </button>
          </form>
        </div>
        {this.state.newComments.map((comment) => (
          <SingleComment comment={comment} />
        ))}
      </>
    );
  }
}
