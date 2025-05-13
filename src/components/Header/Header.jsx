import "./Header.scss";
import home from "./../../assets/icons/home.png";
import options from "./../../assets/icons/options.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    }

  return (
    <>
      <header
        className={`header ${
          location.pathname === "/contact" ||
          location.pathname === "/"
            ? "space"
            : ""
        }`}
      >
        <div className="header__container">
          <Link className="header__link header__link--icon" to="/">
            <img src={home} alt="Home icon" className="header__icon" />
          </Link>
          <div className="header__block">
            <div
              className="header__dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <button className="header__link header__dropdown-button tablet">
                Showcase
              </button>
              {isDropdownOpen && (
                <div className="header__dropdown-menu">
                  <Link className="header__dropdown-item" to="/software-dev">
                    Software Development
                  </Link>
                  <Link className="header__dropdown-item" to="/writing">
                    Writing & Poetry
                  </Link>
                  <Link
                    className="header__dropdown-item"
                    to="/freelance-services"
                  >
                    Freelance Services
                  </Link>
                </div>
              )}
            </div>
            <Link className="header__link tablet" to="/contact">
              Contact
            </Link>
          </div>
          <button
            className="header__link header__dropdown-button header__link--icon mobile"
            onClick={toggleModal}
          >
            <img src={options} alt="Options icon" className="header__icon" />
          </button>
        </div>
      </header>

      <div className={`modal ${isModalOpen ? "modal--open" : ""}`}>
        <button className="modal__close" onClick={toggleModal}>
          ✕
        </button>
        <nav className="modal__menu">
          <Link
            className="modal__link"
            to="/software-dev"
            onClick={toggleModal}
          >
            Software Development
          </Link>
          <Link className="modal__link" to="/writing" onClick={toggleModal}>
            Writing & Poetry
          </Link>
          <Link
            className="modal__link"
            to="/freelance-services"
            onClick={toggleModal}
          >
            Freelance Services
          </Link>
          <Link className="modal__link" to="/contact" onClick={toggleModal}>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
