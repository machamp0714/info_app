import React from "react";
import SignedoutLinks from "./SignedoutLinks";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-signedout">
        <SignedoutLinks />
      </div>
    </div>
  );
};

export default Navbar;
