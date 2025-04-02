import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === "/contact" ? "space": ""}`}>
      <div className="header__container">
        <Link className="header__link" to="/">
          Home
        </Link>

        <Link className="header__link" to="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
}
