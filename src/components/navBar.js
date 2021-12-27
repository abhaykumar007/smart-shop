import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router-dom";
function NavBar() {
  const history = useHistory();
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <h3>SMART-SHOP</h3>
      </div>
      <div className="nav-input">
        <SearchIcon className="icon" />
        <input />
      </div>
      <div className="nav-right">
        <PersonIcon onClick={() => history.push("/signup")} className="icon" />
        <HomeIcon onClick={() => history.push("/")} className="icon" />
        <FavoriteBorderIcon className="icon" />
        <ShoppingCartIcon className="icon" />
      </div>
    </div>
  );
}

export default NavBar;