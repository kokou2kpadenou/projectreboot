import { useState } from "react";
import Nav from "./nav";

export default ({ shadow }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <a href="/">
        <svg viewBox="0 0 45 32" width="4rem" height="4rem">
          <path d="M38.119 29.333c2.046 0 3.719-1.6 3.719-3.555v-22.222c0-1.956-1.673-3.556-3.719-3.556h-31.611c-2.046 0-3.719 1.6-3.719 3.556v22.222c0 1.956 1.673 3.555 3.719 3.555h-6.508c0 1.956 5.578 2.667 8.368 2.667h27.892c2.789 0 8.368-0.711 8.368-2.667zM6.508 3.556h31.611v22.666h-31.611zM22.314 30.889c-1.022 0-1.859-0.8-1.859-1.778s0.837-1.778 1.859-1.778 1.859 0.8 1.859 1.778c0 0.977-0.837 1.778-1.859 1.778z"></path>
          <path d="M21.366 18.632l-0.195 4.054-0.026 0.242-5.45-0.319c-0.675-0.044-1.233-0.584-1.479-1.069-0.519-1.024 0.156-2.236 0.545-3.217 0 0 0.999 0.132 6.604 0.308zM16.345 12.177l2.335 4.175-1.907-1.013c-2.919 2.831-3.192 4.935-3.192 4.935l-2.465-3.933c-0.506-0.639-0.052-1.333-0.052-1.333s0.454-0.694 1.479-2.071l-1.816-0.947zM32.317 17.872l-2.439 3.955c-0.337 0.716-1.272 0.782-1.272 0.782s-0.921 0.077-2.842 0.132l0.104 1.807-2.984-4.043 2.738-3.988 0.091 1.906c4.399 0.452 6.604-0.551 6.604-0.551zM22.132 7.693c0 0-0.61 0.683-3.438 4.792l-4.113-2.060-0.247-0.132 2.919-3.922c0.363-0.485 1.181-0.661 1.817-0.606 1.297 0.099 2.232 1.168 3.062 1.928zM30.631 11.075l2.751 3.999c0.35 0.496 0.143 1.19-0.195 1.652-0.701 0.925-2.258 1.146-3.425 1.421 0 0-0.441-0.782-3.438-4.803l4.061-2.148zM28.775 8.586l1.842-0.914-2.855 4.109-5.437-0.22 1.959-0.947c-1.557-3.514-3.62-4.726-3.62-4.726l5.255 0.011c0.908-0.066 1.401 0.595 1.401 0.595s0.506 0.672 1.453 2.093z"></path>
        </svg>
        <h1>Project Reboot</h1>
      </a>
      <Nav show={showMenu} onShowMenu={() => setShowMenu(pre => !pre)} />
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          padding: 2rem;
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          z-index: 1;
          background-color: #fff;
          box-shadow: ${shadow ? "0px 6px 20px rgba(0, 0, 0, 0.06)" : "none"};
        }

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        a:link,
        a:visited {
          color: #0070f3;
          transition: color 0.4s;
        }

        a:hover,
        a:active {
          color: tomato;
        }

        h1 {
          font-size: 2.5rem;
          margin-left: 0.5rem;
        }

        svg {
          fill: currentcolor;
        }
      `}</style>
    </header>
  );
};
