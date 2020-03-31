import React from "react";
import { Link } from "react-router-dom";

function Movielist() {
  return (
    <div className="content">
      <h2 style={{ color: "red", paddingTop: "30px" }}>Latest Movielist</h2>
      <Link to="sarileeru">
        <li>sarileru neekevvaru</li>
      </Link>
      <Link to="Movielist">
        <li>Bahubali 2</li>
      </Link>
    </div>
  );
}

export default Movielist;
