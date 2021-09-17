import * as React from "react";

function FileImageIcon(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v10l2.224-2.224a.5.5 0 01.61-.075L8 11l2.157-3.02a.5.5 0 01.76-.063L13 10V2a1 1 0 00-1-1H4z"
      />
      <path fillRule="evenodd" d="M6.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );
}

export default FileImageIcon;
