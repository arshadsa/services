import React from "react";
import './HomeSectionHeaderStyle.css'

const HomeSectionHeader = ({regularParagraph, title}) => {
  
  return (
      <div className="row ml-0 mr-0">
            <div className="home-header">
              <p className="regular-paragraph">{regularParagraph}</p> 
              <h3 className="h2-title">{title}</h3>
            </div>
          </div> 



  )
};

export default HomeSectionHeader;
