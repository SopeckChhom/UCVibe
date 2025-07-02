// src/pages/LecturePage.jsx
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/DiningPage.css";
import "../styles/global.css";

function LecturePage({ title, lectureHalls = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHalls = lectureHalls.filter((hall) =>
    hall.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Explore Lecture Halls at {title}</h1>
        <p>Search and rate the spaces you’ve learned in!</p>
      </section>

      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Search lecture halls..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="hall-list">
        {filteredHalls.length > 0 ? (
          filteredHalls.map((hall, i) => (
            <div key={i} className="rating-card">
              <h3>{hall.name}</h3>
              <div className="rating-buttons">
                <a href={hall.link} className="rate-button">
                  Rate
                </a>
                <a
                  href={hall.link.replace("/rate/", "/view/")}
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

export default LecturePage;
