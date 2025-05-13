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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
