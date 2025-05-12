import React from "react";
import "./whyUs.scss";

const benefits = [
    {
        icon: "/icons/agent-icon.png",
        title: "Trusted by Sellers Like You.",
        description:
          "Thousands have listed with KingsHome and sold with confidence. Join a growing network of smart homeowners who chose better representation.",
      },
  {
    icon: "/icons/home-icon.png", // Replace with your actual image path
    title: "List Early. Sell Smarter.",
    description:"Get your property in front of serious buyers faster. Our expert agents help you set the right price and market your home to the right audience—right from the start",
  },
  {
    icon: "/icons/save-money-icon.png",
    title: "Sign early. Save more.",
    description:
      "When you sign with a KingsHome agent before your second tour, you'll qualify for a 0.25% savings on our buyer’s agent fee when you buy your next home.",
  },
];

const WhyBuySection = () => {
  return (
    <section className="why-buy">
      <h2>Why List with Us?</h2>
      <div className="cards">
        {benefits.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.icon} alt="img" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBuySection;
