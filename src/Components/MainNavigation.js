import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function MainNavigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <FaShoppingCart />
        </a>
        <Link className="nav-link active" aria-current="page" to={"/"}>
          Home
        </Link>
      </div>
    </nav>
  );
}

export default MainNavigation;
