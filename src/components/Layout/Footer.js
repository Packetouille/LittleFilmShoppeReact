import React from "react";
import classes from "./Footer.module.css";
import MainLogo from "../../assets/logos/main-logo.png";
import FBIcon from "../../assets/images/icons/fb_icon.png";

const Footer = (props) => {
  return (
    <footer className={classes["main-footer-container"]}>
      <div className={classes["main-footer"]}>
        <div className={classes["logo-footer"]}>
          <img
            className={classes["logo-footer-img"]}
            src={MainLogo}
            alt="Little Film Shoppe logo."
          />
        </div>
        <div className={classes["copyright-footer"]}>
          © 2021 The Little Film Shoppe
        </div>
        <div className={classes["social-media-footer"]}>
          <ul>
            <li>
              <a
                href="http://www.facebook.com/LittleFilmShoppe"
                target="_blank"
              >
                <img
                  className={classes["social-logo-img"]}
                  src={FBIcon}
                  alt="Facebook icon"
                />
              </a>
            </li>
            <li>
              <a
                href="http://www.facebook.com/LittleFilmShoppe"
                target="_blank"
              >
                <img
                  className={classes["social-logo-img"]}
                  src={FBIcon}
                  alt="Facebook icon"
                />
              </a>
            </li>
            <li>
              <a
                href="http://www.facebook.com/LittleFilmShoppe"
                target="_blank"
              >
                <img
                  className={classes["social-logo-img"]}
                  src={FBIcon}
                  alt="Facebook icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
