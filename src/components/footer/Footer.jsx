import React from "react";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/img/logo.png";
import "./footer.css";
const Footer = (props) => {
  const navigate = useNavigate();
  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091331367572",
      "_blank"
    );
  };
  const openInsta = () => {
    window.open("https://www.instagram.com/avineek_pvt_ltd/", "_blank");
  };
  const openTwitter = () => {
    window.open("https://twitter.com/avineek_pvt_ltd", "_blank");
  };
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/company/avineek-pvt-ltd/", "_blank");
  };
  const routeAction = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };
  return (
    <section className="footer__container">
      <div className="footer__content">
        <div className="footer__logo" onClick={() => routeAction("/")}>
          <img className="logo" alt="avineek.com" src={Logo} />
        </div>
        <ul className="footer__tab">
          {props.path !== "home" ? (
            <li className="main-nav-link">
              <a onClick={() => routeAction("/")}>Home</a>
            </li>
          ) : null}

          {props.path !== "service" ? (
            <li className="main-nav-link">
              <a onClick={() => routeAction("/web-service")}>Services</a>
            </li>
          ) : null}

          {props.path !== "about" ? (
            <li className="main-nav-link">
              <a onClick={() => routeAction("/best-web-service-company")}>
                About Us
              </a>
            </li>
          ) : null}

          {props.path !== "career" ? (
            <li className="main-nav-link">
              <a onClick={() => routeAction("/career-opportunity")}>Career</a>
            </li>
          ) : null}

          {props.path !== "contact" ? (
            <li className="main-nav-link">
              <a onClick={() => routeAction("/contact-us")}>Contact Us</a>
            </li>
          ) : null}
        </ul>
        <ul className="footer__social">
          <li>
            <FaFacebook
              className="footer__social-icon"
              onClick={openFacebook}
            />
          </li>
          <li>
            <AiFillInstagram
              className="footer__social-icon"
              onClick={openInsta}
            />
          </li>
          <li>
            <FaTwitter className="footer__social-icon" onClick={openTwitter} />
          </li>
          <li>
            <FaLinkedin
              className="footer__social-icon"
              onClick={openLinkedin}
            />
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <span>Copyright ©2023 Avineek. All rights reserved.</span>
      </div>
    </section>
  );
};

export default Footer;
