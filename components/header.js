import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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
