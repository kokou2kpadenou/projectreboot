import { useState } from "react";
import Nav from "./nav";
import Svg from "./commun/svg";

export default ({ shadow }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <a href="/">
        <Svg iconRef="icon-project_reboot_short" iconSize="4rem" />
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
          color: var(--tertiary-color);
        }

        h1 {
          font-size: 2.5rem;
          margin-left: 0.5rem;
        }
      `}</style>
    </header>
  );
};
