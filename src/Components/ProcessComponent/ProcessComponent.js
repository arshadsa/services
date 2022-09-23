import React from "react";
import HomeSectionHeader from "../../Pages/Shared/HomeSectionHeader/HomeSectionHeader";

import './ProcessComponentStyle.css'
import ProcessSection from "./ProcessSection";

const ProcessComponent = () => {
  return (
    <div id="process" className="mt-4">    
      <div className="container">
      <HomeSectionHeader 
        regularParagraph = 'How it works'
        title = "Easiest way to get a service" 
        />

        <ProcessSection />

     </div>
    </div>
  );
};

export default ProcessComponent;
