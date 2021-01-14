import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #ededed;
  margin: 0;
  padding: 3rem;
  color: black;
`;

const StyledDivForFooter = styled.img`
  height: 100%;
  width: 90%;
`;

const Footer = () => {
  return (
    <footer id="footer" className="footer-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
            <div className="widget">
              <h3 className="footer-logo">
                <StyledDivForFooter
                  src="/images/blue-web.png"
                  alt="BlueWeb"
                ></StyledDivForFooter>
              </h3>
              <div className="textwidget">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque lobortis tincidunt est, et euismod purus suscipit
                  quis.
                </p>
              </div>
              <div className="social-icon">
                <a className="facebook" href="#">
                  <i className="lni-facebook-filled"></i>
                </a>
                <a className="twitter" href="#">
                  <i className="lni-twitter-filled"></i>
                </a>
                <a className="instagram" href="#">
                  <i className="lni-instagram-filled"></i>
                </a>
                {/* <a className="linkedin" href="#">
                  <i className="lni-linkedin-filled"></i>
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <h3 className="footer-titel">Products</h3>
            <ul className="footer-link">
              <li>
                <a href="#">Tracking</a>
              </li>
              <li>
                <a href="#">Application</a>
              </li>
              <li>
                <a href="#">Resource Planning</a>
              </li>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Employee Management</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <h3 className="footer-titel">Resources</h3>
            <ul className="footer-link">
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Fee Schedule</a>
              </li>
              <li>
                <a href="#">Getting Started</a>
              </li>
              <li>
                <a href="#">Identity Verification</a>
              </li>
              <li>
                <a href="#">Card Verification</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <h3 className="footer-titel">Contact</h3>
            <ul className="address">
              <li>
                <a href="#">
                  <i className="lni-map-marker"></i> AV.74 Entre Calle 105 Y Av
                  75 Al lado de Toyoclub, Avenida Intercomunal Don Julio
                  Centeno, San Diego 2006, Carabobo
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni-phone-handset"></i> P: +84 846 250 592
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni-envelope"></i> E: contact@uideck.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-content">
                <p>
                  Copyright © 2020
                  <a rel="nofollow" href="https://uideck.com">
                    UIdeck
                  </a>
                  All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
