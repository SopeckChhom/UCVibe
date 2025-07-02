// src/pages/RecCenterPage.jsx
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/DiningPage.css";
import "../styles/global.css";

function RecCenterPage({ title, recCenters = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCenters = recCenters.filter((center) =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Recreation at {title}</h1>
        <p>Find and rate the best places for fun, fitness, and relaxation!</p>
      </section>

      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Search rec centers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="hall-list">
        {filteredCenters.length > 0 ? (
          filteredCenters.map((center, i) => (
            <div key={i} className="rating-card">
              <h3>{center.name}</h3>
              <div className="rating-buttons">
                <a href={center.link} className="rate-button">
                  Rate
                </a>
                <a
                  href={center.link.replace("/rate/", "/view/")}
                  className="view-button"
                >
                  View Ratings
                </a>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No results found.</p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default RecCenterPage;
