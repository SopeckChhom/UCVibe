// src/pages/UCBPage.jsx
import React from "react";
import "../../styles/SchoolPage.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "../../styles/HomePage.css";
import "../../styles/global.css";

function UCSBPage() {
  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Discover UCSB Hotspots</h1>
        <p>
          Navigate and rate locations across the campus—from dining to
          recreation.
        </p>
      </section>

      <section className="categories">
        <h2>Where would you like to go?</h2>
        <div className="category-list">
          <a href="/ucsb/dining" className="category-card">
            <h3>Dining Halls & Markets</h3>
            <p>Explore and rate places to eat on campus.</p>
          </a>
          <a href="/ucsb/lecture" className="category-card">
            <h3>Lecture Halls</h3>
            <p>Rate classrooms and lecture spaces.</p>
          </a>
          <a href="/ucsb/recreation" className="category-card">
            <h3>Recreation Centers</h3>
            <p>Review gyms, pools, and activity centers.</p>
          </a>
          {/* <a href="/ucsb/study-spots" className="category-card">
            <h3>Study Spots</h3>
            <p>Share your favorite quiet corners for studying.</p>
          </a> */}
        </div>
      </section>

      <section className="campus-image">
        <div className="overlay-messages">
          <h2>Explore UC Santa Barbara!</h2>
        </div>
        <img
          src="https://news.ucsb.edu/sites/default/files/images/2015/perko-3357.jpg"
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

export default UCSBPage;
