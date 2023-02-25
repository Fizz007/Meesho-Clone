import React, { useContext } from "react";

import "../Navv/Nav.css";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { GiShoppingCart } from "react-icons/gi";
import { CartCoontext } from "../../Context/Context";
const Navbar = () => {
  const Globalstate = useContext(CartCoontext);
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">
        <Badge color="secondary" badgeContent={Globalstate.state.length}>
          <GiShoppingCart size={28} />
        
        </Badge>
      </NavLink>
     
    </div>
  );
};

export default Navbar;
