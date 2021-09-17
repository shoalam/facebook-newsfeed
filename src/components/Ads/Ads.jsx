import React from "react";
import "../../App.css";
import SidebarRow from "../sidebar/sidebarRow";
import NotificationsIcon from "../icons/notifications";
import BullhornIcon from "../icons/bullhorn";

const Ads = () => {
  return (
    <div className="d-flex flex-column">
      <div className="ads-header d-flex justify-content-between align-items-center mb-3">
        <h5 className="fs-6 text-secondary m-0">Your Pages</h5>
        <img src="ellipse.png" alt="" />
      </div>
      <div className="ads-content">
        <SidebarRow img="myphoto.jpg" text="Asm Shafiul Alam Tuhin" />
        <div className="notifications d-flex align-items-center gap-2 text-secondary fs-5 p-2">
          <NotificationsIcon />
          <p className="fs-6 m-0">14 Notifications</p>
        </div>
        <div className="promotion d-flex align-items-center fs-5 gap-2 text-secondary p-2 mb-2">
          <BullhornIcon />
          <p className="fs-6 m-0">Create Promotion</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Ads;
