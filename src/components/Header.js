import React from "react";
import "../css/Header.css";
import {Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to={"/"}>
          <div className="headerLogo">e!</div>
        </Link>
        <div className="account">
          <div className="login">Login</div>
          <div className="create-account">Create Account</div>
        </div>
      </div>
    );
  }
}

export default Header;
