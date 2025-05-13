import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl normal-case">
          Andrew Kemler
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-2">
            <button
              onClick={() => (window.location.href = "#about")}
              className="btn btn-ghost"
            >
              About
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={() => (window.location.href = "#products")}
              className="btn btn-ghost"
            >
              Our Products
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={() => (window.location.href = "#contact")}
              className="btn btn-primary text-white"
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
