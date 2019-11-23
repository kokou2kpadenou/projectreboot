export default () => {
  return (
    <footer>
      <div>
        <svg>
          <use xlinkHref="/all.svg#icon-project_reboot" />
        </svg>

        <div className="footer-title">Project Reboot</div>
      </div>
      <address>
        <a href="http://maps.google.com/?q=4 Choke Cherry Road, Rockville, MD, 20850">
          4 Choke Cherry Road, Rockville, MD, 20850
        </a>
        <a href="tel:+13013300034">(301) 330-0034</a>
        <a href="mailto:reboot@projectreboot.org">reboot@projectreboot.org</a>
      </address>

      <div className="footer-menu">
        <a href="http://www.cpcug.org/">CPCUG</a>
        <a href="/faq">FAQ</a>
        <a href="/policy">Policy</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="footer-copy">
        © 2019 Project Reboot. All rights reserved.
      </div>
      <style jsx>{`
        footer {
          text-align: center;
          padding: 8rem 0;
          background-color: #20232a;
          background-image: linear-gradient(
            to bottom,
            #121212 0%,
            #323232 100%
          );
          color: #999;
        }

        .footer-title {
          font-size: 2.8rem;
          color: #fff;
          margin: 1rem 0;
        }

        .footer-copy {
          font-size: 1.2rem;
        }

        .footer-menu {
          margin: 1rem 0;
        }

        a {
          display: inline-block;
          padding: 0 1rem;
          border: 1px solid transparent;
          text-decoration: none;
        }

        .footer-menu a:not(:last-of-type) {
          border-right-color: #999;
        }

        a:link,
        a:visited {
          color: #999;
        }

        a:hover,
        a:active {
          color: #fff;
        }

        a[href^="mailto"]::before {
          content: "📧 ";
        }

        a[href^="tel"]::before {
          content: "📞 ";
        }

        svg {
          width: 10rem;
          height: 10rem;
          // border: 1px solid #fff;
        }
      `}</style>
    </footer>
  );
};
