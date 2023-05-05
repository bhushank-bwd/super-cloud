import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <div className="footer p-2">
      <div className="row">
        <div className="col-md-3 contact">
          <h4>Contact</h4>
          <ul className="ul-address">
            <li>
              <b>Address: </b>Main Road Kolhapur,
              <br /> Maharashtra,416005
            </li>
            <li>
              <b>Phone: </b>
              <a href="tel:+4733378901">+47 333 78 901</a>
            </li>
            <li>
              <b>Email: </b>
              <a href="mailto:someone@example.com">Support@supercloud.com</a>
            </li>
          </ul>
          <ul className="ul-social">
            <li>
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </li>
          </ul>
        </div>
        <div className="col-md-3 ql">
          <h4>Quick Links</h4>
          <ul className="ul-links">
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              Home
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              Marketplace
            </li>
            <li>
              <FontAwesomeIcon className="links-fa"  icon={faCheck} />
              Streaming deck
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              QR Code
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              ERP
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Services</h4>
        </div>
        <div className="col-md-3">
          <h4>Subscribe us</h4>
        </div>
      </div>
    </div>
  );
};
