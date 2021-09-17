import React from "react";

const SidebarRow = ({ img, text }) => {
  return (
    <div className="sidebarRow">
      <a
        href=""
        className="d-flex align-items-center text-decoration-none text-black p-2"
      >
        <div className="me-3">
          <img
            src={img}
            alt=""
            className="rounded-circle"
            style={{ width: "36px", height: "36px" }}
          />
        </div>
        <div className="sidebar-content">
          <h4 className="fs-6 m-0">{text}</h4>
        </div>
      </a>
    </div>
  );
};

export default SidebarRow;
