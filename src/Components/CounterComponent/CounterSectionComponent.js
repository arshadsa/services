import React from "react";

const CounterSectionComponent = ({sectionTitle, sectionNumber}) => {
  return (
      <div className="col-4 column-border">
            <div className="counter-section">
                <h2 className="h1-title counter-section__number">{sectionNumber}</h2> 
                <p className="large-paragraph counter-section__title">{sectionTitle}</p>
              </div>
            </div>
  );
};

export default CounterSectionComponent;
