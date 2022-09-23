import React from "react";
import { Link } from "react-router-dom";
import "./header.css";




const Header = () => {
  return (
    <header className="home-header">
      <nav className=" navbar navbar-light navbar-expand-lg">
        <div className=" container d-flex justify-content-between">
          <button className=" btn btn-link header-logo" >   
          <Link to='/' >
          
            <img
              src="./Images/sheba.svg"
              alt=""
              style={{ height: "35px", width: "125px" }}
            />
          </Link>
          </button>
          <div className=" d-none d-xl-block navigation-picker">
          <img src="./Images/location.svg" alt="logo" srcSet="" />
          
            
            <button className=" btn"> Gulsan</button>
          </div>
          <div className=" d-none d-xl-block" style={{ width: "500px" }}>
            <div className=" input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Find Your Service Here"
              />
              <span className="input-group-text  top-search-bg">
                <img src="./Images/search-icon-white.svg" alt="" />
              </span>
            </div>
          </div>
          <div
            className=" list-unstyled d-flex justify-content-center align-content-center h-100 home-header-links "
            
          >
            <li className=" d-xl-none header-short-search">
              <div className=" input-group">
                <span className="input-group-text  top-search-bg">
                  <img src="./Images/search-icon-white.svg" alt="" />
                </span>
              </div>
            </li>
            <li className="">
              <Link to='all-services' >
              All Services
              </Link>
            
            
            </li>
            <li>Log In</li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
