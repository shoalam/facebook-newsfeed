import * as React from "react";

function EmojiLaughingIcon(props) {
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
        d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
      />
      <path
        fillRule="evenodd"
        d="M12.331 9.5a1 1 0 010 1A4.998 4.998 0 018 13a4.998 4.998 0 01-4.33-2.5A1 1 0 014.535 9h6.93a1 1 0 01.866.5z"
      />
      <path d="M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
    </svg>
  );
}

export default EmojiLaughingIcon;
