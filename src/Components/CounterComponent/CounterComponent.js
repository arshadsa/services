import React from "react";
import './CounterComponentStyle.css'
import CounterSectionComponent from "./CounterSectionComponent";

const CounterComponent = () => {
  return (
    <div id="counter">
      <div className="container">
        <div className="row">
          <CounterSectionComponent 
          sectionTitle = 'Service Providers' 
          sectionNumber = '15,000 +'  />
          <CounterSectionComponent 
          sectionTitle = 'Service Providers' 
          sectionNumber = '15,000 +'  /><CounterSectionComponent 
          sectionTitle = 'Service Providers' 
          sectionNumber = '15,000 +'  />


            
        
      </div>
    </div>
  </div>

  );
};

export default CounterComponent;
