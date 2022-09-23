import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

import "./AllServicesAside.css";



const AllServicesAside = (props) => {
  const { asideData,  } = props;


  return (
    <div className=" category-navigation">
      <ul className=" list-unstyled category-list">
        {asideData.map((item, index) => {
          return <CategoryItem text={item} key={index} target={index} />;
        })}
      </ul>
    </div>
  );
};

export default AllServicesAside;
