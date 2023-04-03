import React from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import footer_logo1 from "../../Images/footer_logo.png";
import phone_call from "../../Images/phone-call.svg";
import facebook_icon from "../../Images/facebook_icon.svg";
import insta_icon from "../../Images/insta_icon.svg";
import youtube_icon from "../../Images/youtube_icon.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="f1">
      <Container>
        <div className="img1div">
          <img src={footer_logo1} alt="footer_log" className="img-fluid"></img>
        </div>
        <div className="footer1">
          <div className="h4f1">
            <h5>New Jersey, USA</h5>
          </div>
          <div className="h4f11">
            <img src={phone_call} alt="phone-call" className="img-fluid"></img>
            <h5>+11 0987 6543 321</h5>
          </div>
          <div className="h4f1">
            <h5>janedoe@abc.com</h5>
          </div>
        </div>
        <div className="footer2">
          <h4>Home</h4>
          <span className="d-md-flex d-none">|</span>
          <h4>About</h4>
          <span className="d-md-flex d-none">|</span>
          <h4>Classes</h4>
          <span className="d-md-flex d-none">|</span>
          <h4>Blogs</h4>
          <span className="d-md-flex d-none">|</span>
          <h4>Connect</h4>
        </div>
        <div className="footer3">
          <img
            src={facebook_icon}
            alt="facebook_icon"
            className="img-fluid"
          ></img>
          <img src={insta_icon} alt="insta_icon" className="img-fluid"></img>
          <img
            src={youtube_icon}
            alt="youtube_icon"
            className="img-fluid"
          ></img>
        </div>
        <div className="footer4">
          <a href="/">Copyright © 2022, Being Consistent </a>
          <span className="d-md-flex d-none">|</span>
          <a href="/">All Rights Reserved</a>
          <span className="d-md-flex d-none">|</span>
          <a href="/">Privacy Policy</a>
          <span className="d-md-flex d-none">|</span>
          <a href="/">Terms & Conditions</a>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
