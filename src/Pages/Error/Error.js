import React from "react";

import { Link } from "react-router-dom";

import "./errorStyle.css";

const Error = () => {
  return (
    <div
      id="notfound"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg")`,
      }}
      className="mt-6"
    >
      <div classNameName="notfound-bg"></div>
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! Page Not Found</h2>

        <div>
          <Link className="bg-dark text-white px-4 py-2 rounded " to="/">
            Back To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
