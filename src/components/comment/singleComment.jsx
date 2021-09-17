import React, { Component } from "react";

export default class SingleComment extends Component {
  render() {
    return (
      <>
        <div className="d-flex mt-4">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
            alt="John Doe"
            className="flex-shrink-0 me-1 rounded-circle"
            style={{ width: "36px", height: "36px" }}
          />
          <div className="d-flex flex-column rounded ps-1">
            <div
              className="bg-opacity-10 bg-secondary d-flex flex-column p-2"
              style={{ borderRadius: "20px" }}
            >
              <h4 className="fs-6 mb-0">
                John Doe {/*<small>Posted on February 19, 2016</small> */}
              </h4>
              <p className="mb-0">{this.props.comment}</p>
            </div>
            <div className="d-flex align-items-center gap-1 ps-2">
              <a
                href="#"
                className="text-decoration-none text-secondary"
                style={{ fontSize: "12px", fontWeight: 700 }}
              >
                Like.
              </a>
              <a
                href="#"
                className="text-decoration-none text-secondary"
                style={{ fontSize: "12px", fontWeight: 700 }}
              >
                Reply.
              </a>
              <a
                href="#"
                className="text-decoration-none text-secondary"
                style={{ fontSize: "12px" }}
              >
                2h
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
