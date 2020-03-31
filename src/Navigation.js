import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="header">
      <Link to="/" style={{ display: "inline-block", paddingLeft: "100px" }}>
        Home
      </Link>
      <Link to="Movielist">
        <li style={{ display: "inline-block", paddingLeft: "100px" }}>
          Movielist
        </li>
      </Link>
      <Link to="/signin">
        <li style={{ display: "inline-block", paddingLeft: "100px" }}>
          Signin
        </li>
      </Link>
    </div>
  );
}

export default Navigation;
