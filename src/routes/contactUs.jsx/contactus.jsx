import React from "react";
import "./contactUs.scss";
import { motion } from "framer-motion";
import Footer from "../../components/footer/footer";

const contactUs = () => {
  return (
    <div className="contact-page">
      <header className="hero">
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Contact Us</h1>
          <p>We're here to help you find your perfect property.</p>
        </motion.div>
      </header>

      <section className="contact-section">
        <motion.div
          className="contact-info"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get In Touch</h2>
          <p>
            Whether you're buying, selling, or renting, our team is ready to help.
            Reach out via the form or contact details.
          </p>
          <ul>
            <li><strong>Email:</strong> abdulazeezmustapha204@gmail.com</li>
            <li><strong>Phone:</strong> +234 (705) 050-4918</li>
            {/* <li><strong>Address:</strong> 456 Luxury Ave, Metropolis</li> */}
          </ul>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>
      </section>

      <div className="footer">
  <div className="footer-columns">
    <div className="column">
      <h4>Quick Links</h4>
      <ul>
        <li>Home</li>
        <li>Properties</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>

    <div className="column">
      <h4>Contact</h4>
      <ul>
        <li>Email: abdulazeezmustapha204@gmail.com</li>
        <li>Phone: +234 (705) 050-4918</li>
        {/* <li>Address: 456 Luxury Ave, Metropolis</li> */}
      </ul>
    </div>

    <div className="column">
      <h4>Follow Us</h4>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 KingsHome. All rights reserved.</p>
  </div>
</div>

    </div>
  );
};

export default contactUs;
