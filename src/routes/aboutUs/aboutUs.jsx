import React from "react";
import "./aboutUs.scss";

const AboutUs = () => {
    return (
        <div className="about-page">
          <section className="hero-section">
            <div className="hero-overlay">
              <h1>About Us</h1>
            </div>
          </section>
    
          <section className="history-section">
            <div className="history-content">
              <div className="history-image">
                <img className="img1" src="/stand.jpg" alt="Old Building" />
                <img className="img2" src="/stand2.jpg" alt="Old Building" />

              </div>
              <div className="history-text">
                <h2>A Journey through Time</h2>
                <p>From decades of experience in real estate to our growth with clients across generations, our story is one of vision and legacy.</p>
                <ul>
                  <li><strong>1920:</strong> Our foundation was laid in the heart of downtown.</li>
                  <li><strong>1950:</strong> Expansion into commercial real estate.</li>
                  <li><strong>2000:</strong> Embraced technology to modernize real estate processes.</li>
                </ul>
              </div>
            </div>
          </section>
    
          <section className="services-section">
            <h2>Services we Provide</h2>
            <div className="services-list">
              <div className="service-item">
                <img src="/icons/buy.svg" alt="Buying" />
                <p>Residential and commercial buying services tailored to your needs.</p>
              </div>
              <div className="service-item">
                <img src="/icons/sell.svg" alt="Selling" />
                <p>Efficient and professional property selling guidance.</p>
              </div>
              <div className="service-item">
                <img src="/icons/rent.svg" alt="Renting" />
                <p>We help you find the perfect rental property with ease.</p>
              </div>
              <div className="service-item">
                <img src="/icons/manage.svg" alt="Property Management" />
                <p>End-to-end property management services to simplify your life.</p>
              </div>
            </div>
          </section>
    
          <section className="assistance-section">
            <h2>May we be of Assistance?</h2>
            <div className="team">
              <div className="team-member">
                <img src="stand.jpg" alt="Team Member 1" />
              </div>
              <div className="team-member">
                <img src="stand.jpg" alt="Team Member 2" />
              </div>
              <div className="team-member">
                <img src="stand.jpg" alt="Team Member 3" />
              </div>
            </div>
          </section>
        </div>
      );
    };
    

export default AboutUs;
