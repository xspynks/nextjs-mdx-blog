import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2 className="logo">Rafael de Paula</h2>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
