import React from "react";
import advertiseImg from "../../assets/advertise/emi-banner.webp";
const Advertise = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="advertise">
        <img className="img-fluid" src={advertiseImg} alt="" />
      </div>
    </div>
  );
};

export default Advertise;
