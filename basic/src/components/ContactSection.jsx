import React from "react";

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Us</h2>
      <address>
        <ul className="contact-list">
          <li>
            <a href="tel:503-667-3000" aria-label="Call 503-667-3000">
              <span role="img" aria-label="Phone">📞</span> 503-667-3000
            </a>
          </li>
          <li>
            <a href="mailto:info@pnwx.com" aria-label="Email info@pnwx.com">
              <span role="img" aria-label="Email">✉️</span> info@pnwx.com
            </a>
          </li>
          <li>
            <span role="img" aria-label="Location">📍</span> Gresham, OR
          </li>
        </ul>
      </address>
    </section>
  );
}

export default ContactSection;