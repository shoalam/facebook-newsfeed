import React from "react";
import "./feedtop.css";
import VideoCameraIcon from "../icons/videocamrea";
import FileImageIcon from "../icons/image";
import EmojiLaughingIcon from "../icons/emojilaughing";

const FeedTop = () => {
  return (
    <>
      <div className="card my-4">
        <div className="card-body">
          <div className="align-items-center d-flex">
            <div className="image-wrapper">
              <img src="/myphoto.jpg" alt="" />
            </div>
            <form className="d-flex align-items-center form-group form-group-feedtop w-100">
              <input
                className="form-control me-2"
                type="search"
                placeholder="What's on your mind?....."
              />
            </form>
          </div>
          <hr className="bg-secondary" />
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ fontWeight: 500 }}
          >
            <a
              href=""
              className="align-items-center d-flex gap-2 text-black text-decoration-none"
            >
              <VideoCameraIcon className="text-danger" />
              <span className="text-secondary"> Live Video</span>
            </a>
            <a
              href=""
              className="align-items-center d-flex gap-2 text-black text-decoration-none"
            >
              <FileImageIcon className="text-success" />
              <span className="text-secondary"> Photo/Video </span>
            </a>
            <a
              href=""
              className="align-items-center d-flex gap-2 text-black text-decoration-none"
            >
              <EmojiLaughingIcon className="text-warning" />
              <span className="text-secondary">Feeling/Activity</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedTop;
