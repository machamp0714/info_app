import React from "react";
import SignedoutLinks from "./SignedoutLinks";
import SignedinLinks from "./SignedinLinks";

const Navbar = () => {
  const user = localStorage.getItem("user");

  return (
    <div className="header">
      <div className="header-content">
        {user ? <SignedinLinks /> : <SignedoutLinks />}
      </div>
    </div>
  );
};

export default Navbar;
