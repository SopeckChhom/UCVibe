// src/pages/UCSCPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/SchoolPage.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "../../styles/HomePage.css";
import "../../styles/global.css";

function UCSFPage() {
  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Discover UCSF Hotspots</h1>
        <p>
          Navigate and rate locations across the campus—from dining to
          recreation.
        </p>
      </section>

      <section className="categories">
        <h2>Where would you like to go?</h2>
        <div className="category-list">
          <Link to="/ucsf/dining" className="category-card">
            <h3>Dining Halls & Markets</h3>
            <p>Explore and rate places to eat on campus.</p>
          </Link>
          <Link to="/ucsf/lecture" className="category-card">
            <h3>Lecture Halls</h3>
            <p>Rate classrooms and lecture spaces.</p>
          </Link>
          <Link to="/ucsf/recreation" className="category-card">
            <h3>Recreation Centers</h3>
            <p>Review gyms, pools, and activity centers.</p>
          </Link>
          <Link to="/ucsf/study-spots" className="category-card">
            <h3>Study Spots</h3>
            <p>Share your favorite quiet corners for studying.</p>
          </Link>
        </div>
      </section>

      <section className="campus-image">
        <div className="overlay-messages">
          <h2>Explore UC San Francisco!</h2>
        </div>
        <img
          src="https://media.licdn.com/dms/image/v2/C4D1BAQFRL4jMLhFLQQ/company-background_10000/company-background_10000/0/1633019697675/ucsf_cover?e=2147483647&v=beta&t=U7bN5pXlGaUKzBCvMmenXJ-IIfph6IH5pkx4NiICXNg"
          alt="UCSC Campus"
        />
      </section>

      <section className="connect">
        <h2>Connect with Us</h2>
        <p>We'd love to hear your feedback or answer any questions!</p>
        <a href="mailto:cosntact@ucvibe.com" className="contact-link">
          Email Us
        </a>
      </section>

      <Footer />
    </>
  );
}

export default UCSFPage;
