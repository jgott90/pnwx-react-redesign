import React from "react";

function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="header-content">
        <div className="logo-brand">
          <span className="brand-name">Pacific Northwest X-Ray Inc.</span>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <ul>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* Hamburger menu for mobile; implement functionality as needed */}
          <button className="nav-menu" aria-label="Open menu" tabIndex={0}>
            <span aria-hidden="true">&#9776;</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;