import React from "react";
import "./Banner.css";
import { HiLocationMarker } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="container-full banner">
      <div className="container">
        <h1 className="banner-title">Your personal Assistant</h1>
        <h5>One-stop solution for your sevices. Order any servie, anytime.</h5>
        <div className="banner-content  mt-3 d-flex align-items-center justify-content-center">
          <div className="location">
            <button className="d-flex location-btn">
              <span>
                <HiLocationMarker className="icon" />
              </span>
              <span className="btn-title">Gulshan</span>
            </button>
          </div>
          <div  className="input-group ">
            <input
              type="text"
               className="form-control banner-input"
              placeholder="Find your service here e.g. AC, Car, Facial …"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <span  className="input-group-text search-btn">
              <FaSearch className="search-icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
