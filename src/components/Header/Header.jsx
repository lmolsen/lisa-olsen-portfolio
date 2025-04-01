import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
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
