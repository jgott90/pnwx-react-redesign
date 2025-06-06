import React from "react";

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-text">
        <h1 id="hero-heading">Diagnostic Imaging Equipment &amp; Supplies</h1>
        <p>
          Serving medical professionals with trusted X-ray solutions since 1984.
        </p>
        <a href="#products" className="cta-btn">
          View Products
        </a>
      </div>
      <div className="hero-image" role="presentation" aria-hidden="true">
        <img
          src="/assets/xray-machine.jpg"
          alt=""
          className="hero-img"
          draggable="false"
        />
      </div>
    </section>
  );
}

export default HeroSection;