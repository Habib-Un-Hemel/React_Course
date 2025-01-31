import React from "react";
import ReactDOM from "react-dom/client";
/*
*Header
    - Logo
    - Nav Items
*Body
    - Search
    - ResturantContainer
        - Resturant Card
*Footer
    - Copyright
    - Links
    - Address
    - Contact
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
      ></img>
      <h3>Megna Foods</h3>
      <h4>Briyani, Asian</h4>
      <h4>3.8 stats</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
