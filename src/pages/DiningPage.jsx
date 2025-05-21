// src/pages/UcscDiningPage.jsx
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Collapsible from "../components/Collapsible";
import "../styles/HomePage.css";
import "../styles/Map.css";
import "../styles/global.css";
import "../styles/Footer.css";
import "../styles/NavBar.css";
import "../styles/DiningPage.css";
import "../styles/Collapsible.css";
import "../styles/hero.css";

function DiningPage({ title, diningHalls = [], cafes = [] }) {
  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Find New Places to Dine at {title}!</h1>
        <p>Help us rate the best dining halls and markets on campus!</p>
      </section>

      {diningHalls.length > 0 && (
        <Collapsible title="Dining Halls">
          {diningHalls.map((hall, i) => (
            <div key={i} className="rating-card">
              <h3>{hall.name}</h3>
              <a href={hall.link} className="rate-button">
                Rate
              </a>
            </div>
          ))}
        </Collapsible>
      )}

      {cafes.length > 0 && (
        <Collapsible title="Cafes">
          {cafes.map((cafe, i) => (
            <div key={i} className="rating-card">
              <h3>{cafe.name}</h3>
              <a href={cafe.link} className="rate-button">
                Rate
              </a>
            </div>
          ))}
        </Collapsible>
      )}

      <Footer />
    </>
  );
}

export default DiningPage;
