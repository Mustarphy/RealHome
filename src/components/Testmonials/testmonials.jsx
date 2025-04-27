import React from "react";
import "./testmonials.scss";

const testimonials = [
  {
    name: "John Carter",
    role: "Businessman",
    image: "/whitegirlprofile.jpg", // Replace with actual image paths
    quote:
      "Love their organic high quality selections. Great customer service. Recommend to all my friends and family!",
  },
  {
    name: "Lisa Martines",
    role: "Housewife",
    image: "/profilePicsGirl.jpg",
    quote:
      "By far my favorite supermarket. Delicious smoothie and vegan cupcakes and plenty of healthy foods to choose from.",
  },
  {
    name: "Mike Nelson",
    role: "Web Developer",
    image: "/profilePics.jpg",
    quote:
      "Great delivery department. Very accommodating! Also, the re-sliced fruit cups are excellent.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      {/* Header Section */}
      <div className="testimonials-header">
        <h2 className="header-title">Supermarket automatic doors open for me</h2>
        <p className="header-description">
          A person buying ordinary products in a supermarket is in touch with his deepest emotions.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            {/* User Info */}
            <div className="user-info">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="user-image"
              />
              <div>
                <h4 className="user-name">{testimonial.name}</h4>
                <p className="user-role">{testimonial.role}</p>
              </div>
            </div>
            {/* Speech Bubble Tail */}
            <div className="speech-bubble-tail"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
