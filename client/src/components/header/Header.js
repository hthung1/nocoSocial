import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";
import {} from "../../redux/actions/authAction";

const Header = () => {
  return (
    <nav className="container-nav">
      <div className="header_container">
        <Link to="/" className="logo">
          <h2 className="log">nokoSocial</h2>
        </Link>

        <Search />

        <div class="create">
          <div class="profile-photo">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
