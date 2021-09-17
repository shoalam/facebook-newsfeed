import React, { Component } from "react";
import "./navbar.css";
import NotificationsIcon from "../icons/notifications";
import FacebookMessengerIcon from "../icons/messenger";
import MenuGridOIcon from "../icons/menu";
import CaretDownIcon from "../icons/caret";
import SearchIcon from "../icons/search";
import HomeIcon from "../icons/home";
import UsersIcon from "../icons/users";
import Basic_flag1Icon from "../icons/flag";
import AccountGroupIcon from "../icons/group";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <div className="align-items-center d-flex w-25">
              <a className="navbar-brand" href="#">
                <img src="/logo.png" alt="" />
              </a>
              <form className="d-flex align-items-center form-group">
                <SearchIcon className="fs-4 text-secondary" />
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbar-middle"
              id="navbarSupportedContent"
            >
              <ul className="justify-content-around mb-2 mb-lg-0 navbar-nav w-50">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <HomeIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="nav-middle-icon">
                      <UsersIcon />
                      <span className="icon-top icon-top-round">5</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="nav-middle-icon">
                      <Basic_flag1Icon />
                      <span className="icon-top">9+</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="nav-middle-icon">
                      <img src="/video.png" alt="" />
                      <span className="icon-top">9+</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="nav-middle-icon">
                      <AccountGroupIcon />
                      <span className="icon-top icon-top-round">1</span>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="align-items-center d-flex justify-content-end w-50 nav-right">
                <a href="#" className="align-items-center d-flex mx-4">
                  <img src="myphoto.jpg" alt="" />
                  <h4 className="ms-3 fs-5 mb-0">John Doe</h4>
                </a>
                <a href="#" className="nav-icon mx-2 bg-opacity-50">
                  <MenuGridOIcon />
                </a>
                <a href="#" className="nav-icon mx-2 bg-opacity-50">
                  <FacebookMessengerIcon />
                </a>
                <a href="#" className="nav-icon mx-2 bg-opacity-50">
                  <NotificationsIcon />
                </a>
                <a href="#" className="nav-icon mx-2 bg-opacity-50">
                  <CaretDownIcon />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
