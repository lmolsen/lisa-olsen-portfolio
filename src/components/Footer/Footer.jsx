import "./Footer.scss";
import github from "./../../assets/icons/github.png";
import linkedin from "./../../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <h3 className="footer__title">Socials</h3>
          <div className="footer__icons">
            <a href="https://www.github.com/lmolsen" target="blank">
              <img src={github} className="footer__icon" alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/lisa-m-olsen" target="blank">
              <img
                src={linkedin}
                className="footer__icon footer__icon--linkedin"
                alt="LinkedIn logo"
              />
            </a>
          </div>
        </div>
        <div className="footer__copy">
          <p className="footer__text">© Lisa Olsen 2025</p>
        </div>
      </div>
    </footer>
  );
}
