import React from "react";
import { Card } from "antd";
import logo3 from "./logo3.png";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Master from "./Master.jpg";
import { Rate } from "antd";

const { Meta } = Card;

function Home() {
  return (
    <div>
      <h1 style={{ color: "brown", paddingTop: "50px" }}>TOP PICKS</h1>
      <Card
        hoverable
        style={{
          width: 240,
          position: "relative",
          display: "inline-block",
          paddingRight: "20px"
        }}
        cover={<img alt="example" src={logo3} />}
      >
        <Meta title="Sarileru neekevvaru" description="Review" />
        <Rate />
      </Card>
      <Card
        hoverable
        style={{
          width: 239,
          position: "relative",
          display: "inline-block",
          paddingRight: "20px"
        }}
        cover={<img alt="example" src={image2} />}
      >
        <Meta title="Bahubali 2" description="Review" />
        <Rate />
      </Card>
      <Card
        hoverable
        style={{
          width: 230,
          height: 330,
          position: "relative",
          display: "inline-block",
          paddingRight: "20px"
        }}
        cover={<img alt="example" src={image3} />}
      >
        <Meta title="Dharbhar" description="Review" />
        <Rate />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
          position: "relative",
          display: "inline-block",
          paddingRight: "20px"
        }}
        cover={<img alt="example" src={Master} />}
      >
        <Meta title="Dev" description="Review" />
        <Rate />
      </Card>
    </div>
  );
}

export default Home;
