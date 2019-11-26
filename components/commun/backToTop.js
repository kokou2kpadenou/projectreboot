export default ({ show }) => {
  const _click = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div onClick={_click} className={show && "show"}>
      <svg viewBox="0 0 28 28" width="2.5rem" height="2.5rem">
        {/* <title>Up</title> */}
        <path d="M26.297 20.797l-2.594 2.578c-0.391 0.391-1.016 0.391-1.406 0l-8.297-8.297-8.297 8.297c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.578c-0.391-0.391-0.391-1.031 0-1.422l11.594-11.578c0.391-0.391 1.016-0.391 1.406 0l11.594 11.578c0.391 0.391 0.391 1.031 0 1.422z"></path>
      </svg>
      <style jsx>{`
        div {
          color: #0070f3;
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
          color: tomato;
        }

        svg {
          width: 2.5rem;
          height: 2.5rem;
          fill: currentcolor;
        }

        .show {
          transform: translateX(-124px);
        }
      `}</style>
    </div>
  );
};
