import React from "react";
import "./CategoryItem.css";

const CategoryItem = (props) => {
  const { text, target } = props;
  return (
    <li className=" category-item  w-100 d-flex ">
      <a className=" text-decoration-none ps-2" href={`#section${target}`}>
        <small>
          <h5 >{text}</h5>
        </small>
      </a>
    </li>
  );
};

export default CategoryItem;
