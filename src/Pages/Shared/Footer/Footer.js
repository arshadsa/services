import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="home-footer-container">
      <div className="footer-main">
        <div className=" container">
          <div className="row">
            <div className=" col-12 col-md-3 ">
              <h5 className="list-header">CONTACT</h5>
              <ul className=" list-unstyled list-text">
                <li>16516</li>
                <li>info@sheba.xyz</li>
                <li>Corporate Address</li>
                <li>House # 57, Road # 25, Block - A, Banani, Dhaka 1212</li>
              </ul>
            </div>
            <div className=" col-12 col-md-2 list-link">
              <h5 className="list-header">Other Pages</h5>
              <ul className=" list-unstyled list-link">
                <li>Blog</li>
                <li>Help</li>
                <li>Terms of use</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className=" col-12 col-md-2 ">
              <h5 className="list-header">Company</h5>
              <ul className=" list-unstyled list-link">
                <li>sManager</li>
                <li>sBusiness</li>
                <li>sDelevery</li>
                <li>sBondhu</li>
              </ul>
            </div>
            <div className=" col-12 col-md-5 last-column ">
              <h5 className="list-header">Download Our App</h5>
              <ul className=" list-unstyled list-link">
                <li>
                  Tackle your to-do list wherever you are with our mobile app &
                  make your life easy.
                </li>

                <li>icons</li>
                <li className="download-app-link">
                  <div>
                    <img src="./Images/app-store.png" alt="" />
                  </div>
                  <div>
                    <img src="./Images/play-store .png" alt="" />
                  </div>
                </li>
                <li className="social-link">
                  <div>
                    <img src="./Images/facebook.svg" alt="" />
                  </div>
                  <div>
                    <img src="./Images/instagram.svg" alt="" />
                  </div>
                  <div>
                    <img src="./Images/linkedin.svg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className=" container" style={{ textAlign: "center" }}>
          Copyright © 2022 Sheba Platform Limited | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
