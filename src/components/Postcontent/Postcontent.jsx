import React, { Component } from "react";

export default class Postcontent extends Component {
  render() {
    return (
      <>
        <div className="post-content">
          <p>{this.props.content}</p>
        </div>
      </>
    );
  }
}
