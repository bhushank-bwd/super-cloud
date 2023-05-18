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
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer p-2">
      <div className="row">
        <div className="col-md-3 contact">
          <h4>Contact</h4>
          <ul className="ul-address">
            <li>
              <b>Address: </b>Main Road Kolhapur,
              <br /> Maharashtra, 416005
            </li>
            <li>
              <b>Phone: </b>
              <Link to="tel:+4733378901">+47 333 78 901</Link>
            </li>
            <li>
              <b>Email: </b>
              <Link to="mailto:someone@example.com">
                support@supercloud.com
              </Link>
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
              QR Code
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              Chat
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              Community
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              Wallet
            </li>
          </ul>
        </div>
        <div className="col-md-3 services">
          <h4>Services</h4>
          <ul className="ul-links">
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              Home
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              About us
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              Terms & Conditions
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              Privacy Policy
            </li>
            <li>
              <FontAwesomeIcon className="links-fa" icon={faCheck} />
              Contact us
            </li>
          </ul>
        </div>
        <div className="col-md-3 subscribe">
          <h4>Subscribe us</h4>
          <div className="input-group mb-3 p-2 mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="firstname@email.com"
              aria-label="firstname@email.com"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Subscribe Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
