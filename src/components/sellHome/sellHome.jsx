import React from "react";
import "./sellHome.scss";

const SellHomeSection = () => {
  return (
    <section className="sell-home">
      <div className="content">
        <h2>Ready to sell your current home?</h2>
        <p>
          Our agents have the experience to price, market, and sell your home
          for the best price possible. Plus, LingsHome listings get seen by 70% more
          buyers. And you get it all for half the listing fee other brokerages
          often charge.
        </p>
        <button className="learn-more-btn">Learn more</button>
      </div>
      <div className="image-box">
        <img src= "/herotenant1.jpg" alt="Sell home" />
      </div>
    </section>
  );
};

export default SellHomeSection;
