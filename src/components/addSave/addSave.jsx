import React from "react";
import "./addSave.scss";

const Addsave = () => {
  return (
    <section className="sell-home">
         <div className="image-box">
        <img src= "/lower.jpg" alt="Sell home" />
      </div>
      <div className="content">
        <h2>See how your savings add up </h2>
        <p>
         Customers that sell and buy with our App save an average 0f $5,000, And when you sign with a Kingshome agentbefore your second tour, you will qualify for a 0.25% savings on our buyer's agent fee when you buy your next home-an average of $1,500, It all adds up to an average of $7,500 in savings, Take the first step by chattng with a local agent.
        </p>
        <button className="learn-more-btn">Learn more</button>
      </div>
    </section>
  );
};

export default Addsave;
