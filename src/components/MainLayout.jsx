// MainLayout.js
import React, { useState, useEffect } from "react";

import "../css/mainlayout.css";
import background from "../assets/background.webp";
import logo from "../assets/little_lemon_logo.png";
import DishCard from "./DishCard";
import ReservationForm from "./ReservationForm";
import Footer from "./Footer";
import dishData from "../dishData";

function MainLayout() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`main-container ${scrolling ? "scrolled" : ""}`}>
      <header className={`fixed-header  ${scrolling ? "scrolled" : ""}`}>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Your Restaurant Logo" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservation">Reservation</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero">
        <img src={background} alt="hero img"></img>
        <div className="text-overlay">
          <h1>Welcome to Our Restaurant</h1>
          <p>Delicious Food and Great Atmosphere</p>
        </div>
      </section>

      <section id="menu" className="menu">
        <div className="heading">Menu</div>
        <div className="dish-card-container">
          {dishData.map((dish, index) => (
            <DishCard
              key={index}
              name={dish.name}
              description={dish.description}
              imageSrc={dish.imageSrc}
            />
          ))}
        </div>
      </section>

      <section id="reservation" className="reservation">
        <div className="heading">Reservation</div>
        <ReservationForm />
      </section>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
