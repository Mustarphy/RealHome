import React from "react";
import "./lowerPrice.scss";

const Lowerprice = () => {
  return (
    <section className="sell-home">
        <div className="image-box">
        <img src= "/lower1.jpg" alt="Sell home" />
      </div>
      <div className="content">
        <h2>Lower fees. Higher proceeds.</h2>
        <p>
         Keep more of the proceeds from your home sales by paying a 1% listing fee when you buy and sell with us,
         less than half of what other brokerages community charge.
        </p>
        <div className="text-box">
            <div className="text-card">
              <h2>1%</h2>
              <p>BUY AND SELL <br/> WITH KINGSHOME</p>
            </div>
            <div className="text-card">
            <h2>2.5%-3%</h2>
              <p>OTHER BROKERAGES</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Lowerprice;
