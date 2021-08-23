import * as React from "react";

function Basic_flag1Icon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M12 0v64M12 6h41l-6 12 6 12H12"
      />
    </svg>
  );
}

export default Basic_flag1Icon;
