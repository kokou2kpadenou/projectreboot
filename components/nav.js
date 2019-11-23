import Link from "./commun/activeLink";
import HamburgerMenu from "./commun/hamburgerMenu";

const links = [
  { href: "/", label: "Home" },
  { href: "/donate", label: "Donation" },
  { href: "/receive", label: "Receive a computer" },
  { href: "/refer", label: "Referal" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/directions", label: "Location" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default ({ show, onShowMenu }) => (
  <nav>
    <HamburgerMenu activation={show ? "activation" : ""} onClick={onShowMenu} />
    <ul className={show ? "show" : ""}>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        position: relative;
      }

      ul {
        background-color: #fff;
        position: absolute;
        list-style: none;
        top: 0;
        right: 0;
        padding: 0;
        width: 2rem;
        height: 2rem;
        overflow: hidden;
        z-index: 2;
        transition: width 1s, height 1s;
      }

      .show {
        width: 25rem;
        height: 35rem;
        padding: 4rem 2rem;
        box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25),
          0 2px 10px 0 rgba(0, 0, 0, 0.12);
      }

      li {
        margin: 2rem 0;
      }

      @media only screen and (min-width: 50em) {
        nav {
        }

        .show {
          width: auto;
          height: auto;
          padding: 0;
          box-shadow: none;
        }

        ul {
          background: none;
          position: static;
          width: auto;
          height: auto;
          padding: 0;
          display: flex;
        }

        li {
          margin: 1rem;
        }
      }
    `}</style>
  </nav>
);
