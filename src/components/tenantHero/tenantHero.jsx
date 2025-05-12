import React from "react";
import "./tenantHero.scss";
import { Link } from "react-router-dom";

const Tenanthero = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1>
          Better Listings.  <br />
          List Smart. Sell Fast. <br />
          Better Clients.
          </h1>
          <div className="search-box">
            {/* <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            /> */}
            {/* <button>
              <i className="fa fa-search" />
            </button> */}
          </div>
          <Link to ="/add">
            <button>Create New Post</button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Tenanthero;
