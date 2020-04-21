import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <nav className="footer bg-dark">
      <ul>
        <Link to="/" color="primary">
          Blog
        </Link>
        <Link to="/profile/5e98d8f1df6c8a559011cbd1" color="primary">
          About
        </Link>
        <Link to="/contact" color="primary">
          Contact
        </Link>
      </ul>
      <ul>
        <li>
          <a href="">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li></li>
        <li></li>
      </ul>
      <ul className="copyright">
        Copyright <i className="far fa-copyright"></i> Harley Davis-2020-All
        Rights Reserved.
      </ul>
    </nav>
  );
};

export default Footer;
