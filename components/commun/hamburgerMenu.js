export default ({ activation, onClick }) => {
  return (
    <span className={`button ${activation}`} onClick={onClick}>
      <span className="icon">&nbsp;</span>
      <style jsx>{`
        .button {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 5rem;
          padding: 1rem;
          border: 1px solid transparent;
          background: none;
          cursor: pointer;
          background-color: #fff;
          transition: all 0.4s;
          z-index: 10;
        }

        .icon {
          position: relative;
        }

        .icon,
        .icon::after,
        .icon::before {
          width: 3rem;
          height: 2px;
          background-color: #000;
          display: inline-block;
          transition: all 0.4s;
        }

        .icon::after,
        .icon::before {
          content: "";
          position: absolute;
          left: 0;
        }

        .icon::before {
          top: -0.9rem;
        }

        .icon::after {
          top: 0.9rem;
        }

        .button:hover .icon::before {
          top: -1.2rem;
        }

        .button:hover .icon::after {
          top: 1.2rem;
        }

        .button.activation .icon {
          background-color: transparent;
        }

        .button.activation .icon::before {
          top: 0;
          transform: rotate(135deg);
        }

        .button.activation .icon::after {
          top: 0;
          transform: rotate(-135deg);
        }

        .button.activation:hover .icon::before {
          top: 0;
          transform: rotate(135deg) scale(1.3);
        }

        .button.activation:hover .icon::after {
          top: 0;
          transform: rotate(-135deg) scale(1.3);
        }

        @media only screen and (min-width: 50em) {
          .button {
            display: none;
          }
        }
      `}</style>
    </span>
  );
};
