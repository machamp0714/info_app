import React from "react";
import SignedoutLinks from "../Layout/SignedoutLinks";

const Navbar = () => {
  const user = localStorage.getItem("user");

  return (
    <div className="header">
      <div className="header-content">
        {user ? <div>login</div> : <SignedoutLinks />}
      </div>
    </div>
  );
};

export default Navbar;
