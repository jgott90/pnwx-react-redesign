import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="app-root">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Pacific Northwest X-Ray</p>
      </footer>
    </div>
  );
}