import React from "react";
import HomeSectionHeader from "../../Pages/Shared/HomeSectionHeader/HomeSectionHeader";
import UserSeftyContainer from "../../Pages/Shared/UserSeftyShared-Component/UserSeftyContainer";
import './DetailsComponentstyle.css'


const UserSeftyComponent = () => {
  return (
    <>

    <div id="details">    
      <div id="usp">      
        <div className="container">
          <HomeSectionHeader 
            title = 'Because we care about your safety..'
            regularParagraph = 'Why Choose US'
          />
          <div className="row">
                 
          <UserSeftyContainer />

            
               
      </div>
      </div>
      </div>
      </div>
    
    
    </>
  )
};

export default UserSeftyComponent;
