import React from "react";
import "../styles/Home.css";
//import xrayImage from "../assets/xray-machine.png"; // Update this path to your actual image

export default function Home() {
  return (
    <div className="homepage-root">
      {/* HERO SECTION */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-text">
          <h1 id="hero-heading">
            Diagnostic Imaging Equipment &amp; Supplies
          </h1>
          <p>
            Serving medical professionals with trusted X-ray solutions since 1984.
          </p>
          <a href="#products" className="btn-primary" aria-label="View Products">
            View Products
          </a>
        </div>
        <div className="hero-image" aria-hidden="true">
          <img
            src={xrayImage}
            alt=""
            loading="lazy"
            draggable={false}
          />
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="categories" id="products" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="sr-only">Product Categories</h2>
        <div className="categories-grid">
          <CategoryCard
            icon="🩻"
            label="X-Ray Equipment"
          />
          <CategoryCard
            icon="🗂️"
            label="Film & Accessories"
          />
          <CategoryCard
            icon="💻"
            label="Digital Imaging"
          />
          <CategoryCard
            icon="🥼"
            label="Protective Gear"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" aria-labelledby="about-heading">
        <h2 id="about-heading">About</h2>
        <p>
          Pacific Northwest X-Ray Inc. is a trusted distributor of imaging equipment and accessories, serving clinics, hospitals, and practitioners nationwide.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">Contact Us</h2>
        <div className="contact-grid">
          <ContactItem icon="📞" label="503-667-3000" href="tel:503-667-3000" />
          <ContactItem icon="✉️" label="info@pnwx.com" href="mailto:info@pnwx.com" />
          <ContactItem icon="📍" label="Gresham, OR" />
        </div>
      </section>
    </div>
  );
}

// Reusable category card component
function CategoryCard({ icon, label }) {
  return (
    <div className="category-card" tabIndex={0} aria-label={label}>
      <span className="category-icon" aria-hidden="true">{icon}</span>
      <span className="category-label">{label}</span>
    </div>
  );
}

// Reusable contact item component
function ContactItem({ icon, label, href }) {
  return href ? (
    <a href={href} className="contact-item" tabIndex={0}>
      <span className="contact-icon" aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </a>
  ) : (
    <div className="contact-item" tabIndex={0}>
      <span className="contact-icon" aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </div>
  );
}