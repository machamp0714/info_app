import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-content">
        <ul className="header-menu">
          <li className="header-item">
            <Button color="inherit">sign up</Button>
          </li>
          <li className="header-item">
            <Button color="inherit">
              <Link to="/signin" className="nav-link">
                sign in
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
