import React from "react";
import "./stories.css";
import SingleStory from "./singleStory";

const Stories = (props) => {
  const [states, setStates] = React.useState([
    {
      title: "John Doe",
      imgSrc: "story1.jpg",
      img: "team-3.jpg",
    },
    {
      title: "Steven King",
      imgSrc: "story2.jpg",
      img: "myphoto.jpg",
    },
    {
      title: "Wasim Khan",
      imgSrc: "story3.jpg",
      img: "ins1.jpg",
    },
    {
      title: "Amir Khan",
      imgSrc: "story4.jpg",
      img: "team-3.jpg",
    },
  ]);
  return (
    <div className="d-flex justify-content-center gap-2">
      {states.map((state) => (
        <SingleStory
          title={state.title}
          imgSrc={state.imgSrc}
          img={state.img}
        />
      ))}
    </div>
  );
};

export default Stories;
