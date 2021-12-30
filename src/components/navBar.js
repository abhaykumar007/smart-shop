import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
function NavBar() {
  const history = useHistory();
  let cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img src={logo} />
        {/* <h3>SMART-SHOP</h3> */}
      </div>
      <div className="nav-input">
        <SearchIcon className="icon" />
        <input />
      </div>
      <div className="nav-right">
        <PersonIcon onClick={() => history.push("/signin")} className="icon" />
        <HomeIcon onClick={() => history.push("/")} className="icon" />
        <FavoriteBorderIcon className="icon" />
        <div className="nav-cart">
          <ShoppingCartIcon
            onClick={() => history.push("/cart")}
            className="icon"
          />
          {cart?.length > 0 ? (
            <div className="nav-cart-length">
              <p>{cart.length}</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
