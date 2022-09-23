import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./AllServicesMain.css";

const AllServicesMain = (props) => {
  const { mainData } = props;
  return (
    <div style={{ minHeight: "100vh" }}>
      {mainData.map((item, index) => {
        return (
          <section
            className=" showcase-section"
            key={index}
            id={`section${index}`}
           
          >
            <h3 className=" mt-3 mb3">{item.name}</h3>
            <div className=" cards-container">
              {item.children.slice(0, 3).map((item, index) => {
                return (
                  // <div className="card" key={index}>
                  <Link
                    to={`/${item.slug}`}
                    className="card text-decoration-none"
                    key={index}
                  >
                    <div className="card-body">
                      <img src={item.app_thumb} alt="" className=" rounded-3" />
                      <h5 className=" w-100 text-center mt-3">{item.name}</h5>
                    </div>
                  </Link>
                  // </div>
                );
              })}
            </div>

            {item.children.length > 3 && (
              <div className=" text-muted">
                <h5>All {item.slug}</h5>
                <ul className=" muted-items">
                  {item.children.slice(3, 12).map((item, index) => {
                    return (
                      <Link
                        to={`/${item.slug}`}
                        className=" d-flex list-unstyled text-decoration-none"
                        key={index}
                      >
                        <img
                          src="./Images/default_v3.png"
                          alt=""
                          style={{ height: "1.5rem", width: "auto" }}
                        />
                        {item.name}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default AllServicesMain;
