import React from "react";

import "./home.css";
import ServicesComponent from "../../Components/ServicesComponent/ServicesComponent";
import UserSeftyComponent from "../../Components/UserSeftyComponent/UserSeftyComponent";
//
import CounterComponent from "../../Components/CounterComponent/CounterComponent";
import ProcessComponent from "../../Components/ProcessComponent/ProcessComponent";



import Advertise from "../../Components/Advertise/Advertise";
import Banner from "../../Components/Bannner/Banner";

//import DetailsComponents from "../../Components/details/DetailsComponent";
import GetApp from "../../Components/GetApp/GetApp";

import ServicesAdd from "../../Components/ServicesAdd/ServicesAdd";

import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./home.css";

const Home = () => {
  return (
    <div 
      style={{
        minHeight: '55vh',
        maxWidth: "100vw",
        overflowX: "hidden",
        // so the components does not overflow in x axis
      }}
    >
    
      {/*<ServicesComponent />
      <UserSeftyComponent />
      <CounterComponent />
      <ProcessComponent />*/}
      

  
      {/*<Header />*/}
      <Banner></Banner>
      <ServicesAdd />
      <Advertise></Advertise>

      <ServicesComponent></ServicesComponent>
      {/*<DetailsComponents />*/}
      <CounterComponent />
      <ProcessComponent />
      <GetApp />
      {/*<Footer />*/}
    </div>
  );
};

export default Home;
