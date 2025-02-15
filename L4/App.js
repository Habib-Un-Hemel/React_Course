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

const ResturantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
      ></img>
      <div className="res-header">
        <h3>{props.resName}</h3>
        <h4>{props.cusine}</h4>
        <h4>3.8 stats</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search the food</div>
      <div className="res-container">
        <ResturantCard resName="BFC" cusine="fastfood, Burger" />
        <ResturantCard resName="Sultan Dine" cusine="desi , briyani" />
        <ResturantCard resName="Kolapata" cusine="all desi item" />
        <ResturantCard resName="Nanna Briyani" cusine="briyani" />
        <ResturantCard resName="KFC" cusine="fastfood, Burger" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <ul>
          <li>Copyright</li>
          <li>Links</li>
          <li>Address </li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
