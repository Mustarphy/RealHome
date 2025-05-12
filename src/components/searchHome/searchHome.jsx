import React from "react";
import "./searchHome.scss";
import { Link } from "react-router-dom";

const SearchHome = () => {
  return (
    <section className="search-home">
      <div className="content">
        <h2>The Best way to buy a home </h2>
        <p>
         We've paired our top-rated home search app with best agents in real estate- so you have everything you need to find the home of your dreams.
        </p>
        <button className="more-btn">
        <Link to="/find">Find Home</Link>
        </button>
      </div>
      <div className="image-box">
        <img src= "/herotenant3.jpeg" alt="Sell home" />
      </div>
    </section>
  );
};

export default SearchHome;
