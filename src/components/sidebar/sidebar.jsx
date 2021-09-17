import React from "react";
import SidebarRow from "./sidebarRow";
import "../../App.css";

const Sidebar = () => {
  const [states, setStates] = React.useState([
    { img: "myphoto.jpg", text: "Asm Shafiul Alam Tuhin" },
    { img: "users.png", text: "Friends" },
    { img: "pages.png", text: "Pages" },
    { img: "user.png", text: "Groups" },
    { img: "home.png", text: "Marketplace" },
    { img: "videos.png", text: "Watch" },
    { img: "watch.png", text: "Memories" },
    { img: "ad.png", text: "Ad Center" },
    { img: "ads.png", text: "Ads Manager" },
    { img: "blood.png", text: "Blood Donations" },
    { img: "community.png", text: "Community Help" },
    { img: "covid.png", text: "COVID-19 Information Centre" },
    { img: "emo.png", text: "Emotional Health" },
    { img: "event.png", text: "Emotional Health" },
    { img: "favorite.png", text: "Favourites" },
    { img: "jobs.png", text: "Jobs" },
    { img: "live.png", text: "Live Video" },
    { img: "messenger.png", text: "Messenger" },
    { img: "recent.png", text: "Recent Ad Activity" },
    { img: "save.png", text: "Saved" },
    { img: "weather.png", text: "Weather" },
  ]);
  const [expand, setExpand] = React.useState(false);
  const [loadCount, setLoadCount] = React.useState(8);

  const handleClick = (e) => {
    e.preventDefault();
    setExpand(!expand);
  };

  const getItems = () => {
    if (expand) return states;
    return states.slice(0, loadCount);
  };
  return (
    <>
      {getItems().map((state) => (
        <SidebarRow img={state.img} text={state.text} />
      ))}

      <a
        href=""
        className="d-block w-100 btn btn-lg text-black"
        onClick={handleClick}
      >
        {expand ? "See Less" : "See More"}
      </a>
      <hr />
      <div className="d-flex justify-content-between align-items-center my-3">
        <h5 className="fs-6 text-secondary m-0">Your Shortcuts</h5>
        <a href="" className="btn btn-sm">
          Edit
        </a>
      </div>
      <SidebarRow img="ins1.jpg" text="Asm Shafiul Alam Tuhin" />
      <SidebarRow img="quran.jpg" text="Al Quran Learning Center(AQLC)" />
      <SidebarRow img="hero.png" text="Programming Hero Community" />
      <SidebarRow img="skill.png" text="Managerial Skill of Rasulullah" />
    </>
  );
};

export default Sidebar;
