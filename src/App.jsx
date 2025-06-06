import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCategories from "./components/ProductCategories";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;