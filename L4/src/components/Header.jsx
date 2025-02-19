import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "login";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
