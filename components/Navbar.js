import Link from "next/link";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        background: #333;
        color: white;
        display: flex;
        list-style-type: none;
      }
      ul li {
        margin-right: 20px;
      }

      ul li a {
        text-decoration: none;
        color: white;
      }
    `}</style>
  </div>
);

export default Navbar;
