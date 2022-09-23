import React, { useEffect, useState } from "react";

import "./AllServiceBody.css";
import AllServicesAside from "./AllServicesAside";
import AllServicesMain from "./AllServicesMain";

let calculatedOut = false;
let calculatedArrayOut = [];


const AllServiceBody = () => {
  const [asideData, setAsideData] = useState([]);
  const [mainData, setMainData] = useState([]);

  const getCalculation = async () => {
    if (!calculatedOut) {
      await window.scrollTo(0, 0);

      let asideCategoryItem = document.querySelectorAll(".category-item");
      let asideCategoryItemAarray = Array.prototype.map.call(
        asideCategoryItem,
        function (node, index) {
          return { node: node, index };
        }
      );

      let sectionCategory = document.querySelectorAll(".showcase-section");

      let sectionCategoryArray = Array.prototype.map.call(
        sectionCategory,
        function (node, index) {
          return {
            node: node,
            index: index,
            offsetTop: node.offsetTop,
            offsetBottom: node.offsetTop + node.offsetHeight,
            target: asideCategoryItemAarray[index].node,
          };
        }
      );

      // to stop the re calculating
      // setCalculated(true); // useState not working
      calculatedOut = true; // so i used variable

      // setCalculatedArray(sectionCategoryArray);

      calculatedArrayOut = sectionCategoryArray;
      // console.log(calculatedArrayOut);

      console.log("reCalculating");
      // console.log(calculated);

      return calculatedArrayOut;
      // return sectionCategoryArray;
    } else {
      // to fix problems
      if (calculatedArrayOut.length < 1) {
        calculatedOut = false;
      }

      return calculatedArrayOut;
    }
  };
  const scrollAction = async () => {
    try {
      let pageYOffset = window.pageYOffset + 160;
      let nodeArray = await getCalculation();

      nodeArray.forEach((item) => {
        if (pageYOffset > item.offsetTop && pageYOffset < item.offsetBottom) {
          item.target.classList.add("active");
          item.node.style.color = "red";
        } else {
          item.target.classList.remove("active");
          item.node.style.color = "black";
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const reRunCalculation = () => {
    calculatedOut = false;
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollAction);
    window.addEventListener("resize", reRunCalculation);
    return () => {
      window.removeEventListener("scroll", scrollAction);
      window.removeEventListener("resize", reRunCalculation);
      calculatedOut = false;
    };
  }, []);

  useEffect(() => {
    fetch("allservices.json")
      .then((data) => data.json())
      .then((data) => {
        setAsideData(data.map((item) => item.name));
        // console.log(data);
        // setTitleData(data);
        setMainData(data);
      });
  }, []);

  return (
    <div className=" container all-services-wrapper">
      <h1 className=" mb-5 mt-5">All Services</h1>
      <div className="row ">
        <div className=" col-3 d-none d-lg-block">
          <div className="aside-wrapper">
            <AllServicesAside asideData={asideData} />
          </div>
        </div>
        <div className=" col-12 col-lg-9">
          <AllServicesMain mainData={mainData} />
        </div>
      </div>
    </div>
  );
};

export default AllServiceBody;
