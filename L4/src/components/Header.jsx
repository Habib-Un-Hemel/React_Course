import { LOGO_URL } from "../utils/contants";
import { useEffect, useState } from "react";

const Header = () => {
  // let btnName = "login";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              {
                btnNameReact == "Login"
                  ? setbtnNameReact("logOut")
                  : setbtnNameReact("Login");
                console.log(btnNameReact);
              }
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
