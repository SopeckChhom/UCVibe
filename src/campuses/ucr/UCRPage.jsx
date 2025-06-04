// src/pages/UCBPage.jsx
import React from "react";
import "../../styles/SchoolPage.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "../../styles/HomePage.css";
import "../../styles/global.css";

function UCRPage() {
  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Discover UCR Hotspots</h1>
        <p>
          Navigate and rate locations across the campus—from dining to
          recreation.
        </p>
      </section>

      <section className="categories">
        <h2>Where would you like to go?</h2>
        <div className="category-list">
          <a href="/ucr/dining" className="category-card">
            <h3>Dining Halls & Markets</h3>
            <p>Explore and rate places to eat on campus.</p>
          </a>
          <a href="/ucr/lecture" className="category-card">
            <h3>Lecture Halls</h3>
            <p>Rate classrooms and lecture spaces.</p>
          </a>
          <a href="/ucr/recreation" className="category-card">
            <h3>Recreation Centers</h3>
            <p>Review gyms, pools, and activity centers.</p>
          </a>
          <a href="/ucr/study-spots" className="category-card">
            <h3>Study Spots</h3>
            <p>Share your favorite quiet corners for studying.</p>
          </a>
        </div>
      </section>

      <section className="campus-image">
        <div className="overlay-messages">
          <h2>Explore UC Riverside!</h2>
        </div>
        <img
          src="https://images.rsmdesign.com/58fba21f-b811-46e4-9f0b-309ff39f6fd7.jpg"
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

export default UCRPage;
