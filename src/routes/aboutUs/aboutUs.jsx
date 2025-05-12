import React from "react";
import "./aboutUs.scss";
import Footer from "../../components/footer/footer";

const AboutUs = () => {
    return (
        <div className="about-page">
          <section className="hero-section">
            <div className="hero-overlay">
            <img className="ntw" src="/KingsHome.png" alt="Old Building" style={{width:'20%'}} />
              <h1>ABOUT KINGS_HOME</h1>
            </div>
          </section>
    
          <section className="history-section">
            <div className="history-content">
              <div className="history-image">
                <img className="img1" src="/developer.jpg" alt="Old Building" />
                <img className="img2" src="/stand.jpg" alt="developerImg" />

              </div>
              <div className="history-text">
                <h2> The History of KingHomes</h2>
                <p>KingHomes was born out of a simple but powerful observation: the overwhelming stress people face when trying to find a home in Lagos, Nigeria. The housing search had become a chaotic maze — countless agents involved in a single property, all demanding their share of commissions, with little to no guarantee of transparency or satisfaction.
                Our<strong> founder </strong> Friend  experienced this frustration firsthand and realized there had to be a better way. That insight sparked the idea behind <strong>KingHomes —</strong> a platform designed to simplify, streamline, and humanize the real estate experience for everyone involved.

At <strong>KingHomes</strong>, we bridge the gap between property owners and home seekers. Property owners can now list their homes directly on our platform or choose to partner with <strong>KingHomes</strong> for full property management. For seekers, <strong>KingHomes</strong> provides verified listings, real-time availability, and a user-friendly search experience — eliminating the confusion, double charges, and time-wasting that once defined house-hunting in Lagos.
</p>
                <ul>
                  <li>What started as a vision has become a movement: a modern, transparent, and trustworthy approach to real estate in <strong>Nigeria</strong>. We’re not just helping people find homes — we’re helping them find peace of mind.</li>
                </ul>
              </div>
            </div>
          </section>
    
          <section className="services-section">
            <h2>Services we Provide</h2>
            <div className="services-list">
              <div className="service-item">
                <img src="buyIcon.png" alt="Buying" />
                <p>Residential and commercial buying services tailored to your needs.</p>
              </div>
              <div className="service-item">
                <img src="sellIcon.png" alt="Selling" />
                <p>Efficient and professional property selling guidance.</p>
              </div>
              <div className="service-item">
                <img src="rentIcon.png" alt="Renting" />
                <p>We help you find the perfect rental property with ease.</p>
              </div>
              <div className="service-item">
                <img src="sellIcon.png" alt="Property Management" />
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
          <Footer/>
        </div>
      );
    };
    

export default AboutUs;
