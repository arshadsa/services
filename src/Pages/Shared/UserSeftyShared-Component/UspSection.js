import React from "react";

const UspSection = ({iconPunch1, iconPunch2,iconPunch3, iconSrc}) => {
  return (
      <div className="col-6">
                    <div className="d-flex justify-content-center usp-section__item rounded-3">
                      <div className="usp-section__item__img align-self-center">
                        <img alt="Ensuring Masks" data-src={iconSrc} src={iconSrc} lazy="loaded" />
                      </div>
                      <div className="align-self-center">
                        <p className="default-paragraph" >  {iconPunch1} <br/> {iconPunch2} <br/> {iconPunch3 && iconPunch3 }</p>
                      </div>
                    </div>
                  </div>


  )
};

export default UspSection;
