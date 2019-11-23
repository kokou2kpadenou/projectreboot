import MyHead from "../components/myHead";
import Header from "./header";
import BackToTop from "./commun/backToTop";
import Footer from "./footer";
import useInView from "./useInView";

export default ({ pageTitle, children, headerless = false }) => {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <>
      <MyHead pageTitle={pageTitle} />

      <Header shadow={!inView || !headerless} />

      <div ref={ref}></div>

      <main>{children}</main>

      <BackToTop show={!inView} />

      <Footer />

      <style jsx global>{`
        *,
        *::after,
        *:before {
          padding: 0;
          margin: 0;
          box-sizing: inherit;
        }

        :root {
          --primary-color: #333;
          --secondary-color: #0070f3;
          --tertiary-color: tomato;
        }

        html {
          font-size: 50.78125%;
        }

        body {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          font-size: 1.6rem;
          color: var(--primary-color);
          position: relative;
          overflow-x: hidden;
        }

        main {
          padding: 10rem 0 2rem 0;
        }

        .container {
          max-width: 1024px;
          margin: 4rem auto;
        }

        .main-section {
          margin: 2.5rem;
          padding: 2rem 0;
        }

        .aside {
          margin: 2.5rem;
        }

        a:link,
        a:visited {
          text-decoration: none;
          color: var(--secondary-color);
        }

        a:hover,
        a:active {
          color: var(--tertiary-color);
        }

        @supports (scroll-behavior: smooth) {
          html {
            scroll-behavior: smooth;
          }
        }

        .active:link,
        .active:visited,
        .active:hover,
        .active:active {
          text-decoration: none;
          cursor: default;
          color: var(--tertiary-color);
        }
        .no-active {
          position: relative;
          text-decoration: none;
          transition: color 0.5s;
        }

        .no-active::before {
          content: "";
          position: absolute;
          width: 0%;
          height: 5px;
          background-color: var(--tertiary-color);
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          transition: width 0.5s;
        }

        .no-active:link,
        .no-active:visited {
          color: var(--secondary-color);
        }

        .no-active:hover,
        .no-active:active {
          color: var(--tertiary-color);
        }

        .no-active:hover::before,
        .no-active:active::before {
          width: 110%;
        }

        @media only screen and (min-width: 26.5625em) {
          html {
            font-size: 62.5%;
          }
        }

        @media only screen and (min-width: 50em) {
          .container {
            display: flex;
          }

          .main-section {
            width: 65%;
            border-right: 1px solid #eee;
            padding-right: 2.5rem;
            margin-right: 0;
          }

          .aside {
            width: 35%;
          }
        }
      `}</style>
    </>
  );
};
