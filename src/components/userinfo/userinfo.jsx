import React, { Component } from "react";

export default class Userinfo extends Component {
  render() {
    return (
      <>
        <div className="post align-items-center d-flex">
          <div className="image-wrapper">
            <img src={this.props.img} alt="" />
          </div>
          <div className="d-flex flex-column">
            <h2>{this.props.name}</h2>
            <div>{this.props.duration}</div>
          </div>
        </div>
      </>
    );
  }
}
