import React from "react";
import logo from "../img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo Argent Bank" />
      <NavLink to="/sign-in" className="log">
      <i className="fa fa-user-circle"></i>
          Sign In
      </NavLink>
    </header>
  );
};

export default Nav;
