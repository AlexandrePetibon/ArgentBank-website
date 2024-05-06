import React from "react";
import logo from "../img/argentBankLogo.png";

const Nav = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo Argent Bank" />
      <div className="Log">
      <i className="fa fa-user-circle"></i>
          Sign In
      </div>
    </header>
  );
};

export default Nav;
