import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="logo">Rafael de Paula</h2>
          <p>
            I'm a full-stack developer with a passion for learning and sharing
            knowledge.
          </p>
        </div>
        <div className="footer-right">
          <ul className="menu">
            <li>
              <Link legacyBehavior href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
