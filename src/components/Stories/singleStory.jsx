import React from "react";

const SingleStory = ({ title, imgSrc, img }) => {
  return (
    <div className="story">
      <img src={imgSrc} alt="" />
      <div className="image-small">
        <img src={img} alt="" />
      </div>
      <div className="story-title">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default SingleStory;
