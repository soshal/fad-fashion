import React from "react";

function Slider({ currentImageIndex }) {
  const sliderTitles = [
    "Fashion Fusion: Where Trends Collide",
    "Monetization Opportunities",
    "Private Community",
    "Enhanced Reach",
    "Fashion Forward: Pioneering Trends",
    "Brand Collaborations",
  ];

  // const sliderParas = [
  //   "Immerse yourself in a world of diverse styles and witness the magic where fashion trends from various cultures and influences effortlessly come together at Fad. Join our vibrant community and explore a kaleidoscope of creativity and self-expression.",
  //   "Embrace the thrill of leading fashion's cutting-edge on Fad's trendsetting platform. Stay ahead of the curve, set new trends, and inspire others with your avant-garde style. Join us to pioneer the future of fashion.",
  //   "Set your style free at Fad, where authenticity reigns supreme. Fearlessly express your unique self and celebrate individuality. Unleash the power of fashion to showcase the real you.",
  //   "Break the boundaries of fashion and connect with like-minded fashion enthusiasts from around the globe on Fad's thriving international platform. Embrace the richness of global style and culture.",
  //   "Be a catalyst of style and inspiration at Fad. Share your fashion journey, inspire others, and be inspired by the creativity of our fashion-forward community. Together, let's influence the world of fashion.",
  //   "Transform your passion for fashion into tangible rewards on Fad. Monetize your unique style, unlock exclusive opportunities, and earn as you empower others with your fashion sense. Fashion meets earnings at Fad.",
  // ];

  return (
    <div className="slider-title">
      <h3 className="slider-title__main oh">
        <span className="oh__inner">
          {currentImageIndex !== null ? sliderTitles[currentImageIndex] : ""}
        </span>
      </h3>
      {/* <p className="slider-title__desc">
        {currentImageIndex !== null ? sliderParas[currentImageIndex] : ""}
      </p> */}
    </div>
  );
}

export default Slider;
