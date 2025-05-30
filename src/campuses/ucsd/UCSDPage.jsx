// src/pages/UCSCPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/SchoolPage.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "../../styles/HomePage.css";
import "../../styles/global.css";

function UCSDPage() {
  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Discover UCSD Hotspots</h1>
        <p>
          Navigate and rate locations across the campus—from dining to
          recreation.
        </p>
      </section>

      <section className="categories">
        <h2>Where would you like to go?</h2>
        <div className="category-list">
          <Link to="/ucsd/dining" className="category-card">
            <h3>Dining Halls & Markets</h3>
            <p>Explore and rate places to eat on campus.</p>
          </Link>
          <Link to="/ucsd/lecture" className="category-card">
            <h3>Lecture Halls</h3>
            <p>Rate classrooms and lecture spaces.</p>
          </Link>
          <Link to="/ucsd/recreation" className="category-card">
            <h3>Recreation Centers</h3>
            <p>Review gyms, pools, and activity centers.</p>
          </Link>
          <Link to="/ucsd/study-spots" className="category-card">
            <h3>Study Spots</h3>
            <p>Share your favorite quiet corners for studying.</p>
          </Link>
        </div>
      </section>

      <section className="campus-image">
        <div className="overlay-messages">
          <h2>Explore UC San Diego!</h2>
        </div>
        <img
          src="https://fox5sandiego.com/wp-content/uploads/sites/15/2021/09/AdobeStock_446479766-e1631564007798.jpeg?strip=1"
          alt="UCSC Campus"
        />
      </section>

      <section className="connect">
        <h2>Connect with Us</h2>
        <p>We'd love to hear your feedback or answer any questions!</p>
        <a href="mailto:contact@ucvibe.com" className="contact-link">
          Email Us
        </a>
      </section>

      <Footer />
    </>
  );
}

export default UCSDPage;
