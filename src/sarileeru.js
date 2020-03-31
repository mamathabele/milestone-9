import React from "react";
import Sarileru from "./Sarileru.jpeg";
import { Rate } from "antd";

function sarileeru() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Movie Rating</h1>
      <img src={Sarileru} alt="Logo" style={{}} />
      <div>
        <Rate disabled defaultValue={4} />
        <h3>Sarileeru neekevvaru</h3>
      </div>
    </div>
  );
}

export default sarileeru;
