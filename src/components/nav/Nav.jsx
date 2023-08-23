import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const Nav = (props) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = (path) => {
    setIsMobile(!isMobile);
    window.scrollTo(0, 0);
    if (path) {
      navigate(path);
    }
  };
  const routeAction = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };
  return (
    <section className="header">
      <nav className="header__container">
        <a onClick={() => routeAction("/")} className="header__logo">
          <img className="logo" alt="avineek.com" src={Logo} />
        </a>
        <ul className="header__menu">
          {props.path !== "home" ? (
            <li className="header__item">
              <a onClick={() => routeAction("/")}>Home</a>
            </li>
          ) : null}

          {props.path !== "service" ? (
            <li className="header__item">
              <a onClick={() => routeAction("/web-service")}>Services</a>
            </li>
          ) : null}

          {props.path !== "about" ? (
            <li className="header__item">
              <a onClick={() => routeAction("/best-web-service-company")}>
                About Us
              </a>
            </li>
          ) : null}

          {props.path !== "career" ? (
            <li className="header__item">
              <a onClick={() => routeAction("/career-opportunity")}>Career</a>
            </li>
          ) : null}

          {props.path !== "contact" ? (
            <li>
              <button
                className="btn btn-primary"
                onClick={() => routeAction("/contact-us")}
              >
                Contact Us
              </button>
            </li>
          ) : null}
        </ul>
        <a href="#" className="header__nav-btn" onClick={handleClick}>
          {isMobile === true ? (
            <RxCross1 className="header__nav-icon" />
          ) : (
            <AiOutlineMenu className="header__nav-icon" />
          )}
        </a>
      </nav>
      <ul
        className={
          isMobile === true
            ? "header__menu-mobile mobile-mode"
            : "header__menu-mobile"
        }
      >
        {props.path !== "home" ? (
          <li className="header__item-mobile">
            <a onClick={() => handleClick("/")}>Home</a>
          </li>
        ) : null}

        {props.path !== "service" ? (
          <li className="header__item-mobile">
            <a onClick={() => handleClick("/web-service")}>Services</a>
          </li>
        ) : null}

        {props.path !== "about" ? (
          <li className="header__item-mobile">
            <a onClick={() => handleClick("/best-web-service-company")}>
              About Us
            </a>
          </li>
        ) : null}

        {props.path !== "career" ? (
          <li className="header__item-mobile">
            <a onClick={() => handleClick("/career-opportunity")}>Career</a>
          </li>
        ) : null}

        {props.path !== "contact" ? (
          <li className="header__item-mobile">
            <a onClick={() => handleClick("/contact-us")}>Contact Us</a>
          </li>
        ) : null}
      </ul>
    </section>
  );
};

export default Nav;
