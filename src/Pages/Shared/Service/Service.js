import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ img, text,  }) => {
  let link = text.toLowerCase().replaceAll(' ', '-')
  
  


  return (
    <>
    <Link className="col-3 me-3" to={`/${link}`}>
      <div className="col-12 me-3">
        <img src={img} alt="" className="service-img" />
        <p className="service-p">{text}</p>
      </div> 
      </Link>
    </>
  );
};

export default Service;
