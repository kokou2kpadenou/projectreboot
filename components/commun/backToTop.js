import Svg from "./svg";

export default ({ show }) => {
  const _click = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div onClick={_click} className={show && "show"}>
      <Svg iconRef="up" iconSize="2.5rem" />
      <style jsx>{`
        div {
          color: var(--secondary-color);
          background-color: #fff;
          padding: 0.5rem;
          box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
          position: fixed;
          bottom: 24px;
          right: -100px;
          cursor: pointer;
          transition: color 0.5s, transform 0.8s;
          z-index: 19;
        }

        div:hover {
          color: var(--tertiary-color);
        }

        .show {
          transform: translateX(-124px);
        }
      `}</style>
    </div>
  );
};
