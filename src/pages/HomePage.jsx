// src/pages/HomePage.jsx
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CampusGrid.css";
import "../styles/HomePage.css";
import "../styles/hero.css";
import "../styles/NavBar.css";
import "../styles/global.css";
import "../styles/connect.css";

function HomePage() {
  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Welcome to UCVibe</h1>
        <p>
          Find and rate the best spots on your UC campus — from lecture halls to
          late-night study jams.
        </p>
      </section>

      <section className="content">
        <h2>Get started by exploring top-rated places</h2>
        <p>Choose your UC campus</p>
      </section>

      <div className="campus-grid">
        <a href="/ucb" className="campus-card">
          <img
            src="https://coursera-university-assets.s3.amazonaws.com/4e/115f6ff5a845b89c1bc809f133491b/Berkeley_Square_GoldOnBlue.png"
            alt="UC Berkeley"
          />
          <p>UC Berkeley</p>
        </a>
        <a href="/ucd" className="campus-card">
          <img
            src="https://media.licdn.com/dms/image/v2/C4E0BAQEBG25KNBwuCQ/company-logo_200_200/company-logo_200_200/0/1630629297217/uc_davis_logo?e=2147483647&v=beta&t=c_C0_eteJy1zJlmlOf3n9xUv1XBKfEyfB1ejQjhjO44"
            alt="UC Davis"
          />
          <p>UC Davis</p>
        </a>
        <a href="/uci" className="campus-card">
          <img
            src="https://media-speakerfile-pre.s3.amazonaws.com/images_corporation_logos/cb8ed3423d71b5a61369028f4efd06d71532706361_l.jpg"
            alt="UC Irvine"
          />
          <p>UC Irvine</p>
        </a>
        <a href="/ucsc" className="campus-card">
          <img
            src="https://pbs.twimg.com/profile_images/1845154627790245888/rWtQXdun_400x400.jpg"
            alt="UC Santa Cruz"
          />
          <p>UC Santa Cruz</p>
        </a>
        <a href="/ucsd" className="campus-card">
          <img
            src="https://pbs.twimg.com/profile_images/1161027494268420096/mMAIqDBB_400x400.jpg"
            alt="UC San Diego"
          />
          <p>UC San Diego</p>
        </a>
        <a href="/ucla" className="campus-card">
          <img
            src="https://marazultours.com/wp-content/uploads/2017/05/UCLA-Logo.png"
            alt="UCLA"
          />
          <p>UCLA</p>
        </a>
        <a href="/ucm" className="campus-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UdYvS0BRzwm9x_aQYyN5PdRhJhwycryymg&s"
            alt="UC Merced"
          />
          <p>UC Merced</p>
        </a>
        <a href="/ucr" className="campus-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1D7TtFhWd5KmtGfmQqDtG2o4xhnT0Fo9Zg&s"
            alt="UC Riverside"
          />
          <p>UC Riverside</p>
        </a>
        <a href="/ucsf" className="campus-card">
          <img
            src="https://seeklogo.com/images/U/university-of-california-san-francisco-logo-C0D2F03901-seeklogo.com.png"
            alt="UC San Francisco"
          />
          <p>UC San Francisco</p>
        </a>
        <a href="/ucsb" className="campus-card">
          <img
            src="https://www.gannett-cdn.com/content-pipeline-sports-images/sports2/cbk/logos/1595.png?format=png8&auto=webp&width=324"
            alt="UC Santa Barbara"
          />
          <p>UC Santa Barbara</p>
        </a>
      </div>

      <section className="what-we-do">
        <div className="feature-banner">
          <h1>What Vibes Does Your Campus Bring?</h1>
          <img
            src="https://www.sasaki.com/wp-content/uploads/2022/03/DD_SASAKI_BERKELEY_V2-Evans_2021_07_30-Update-1800x1013.jpg"
            alt="UCVibe feature"
          />
          <div className="overlay-messages">
            <div className="message-item">Discover New Spots!</div>
            <div className="message-item">Rate Your Favorites!</div>
            <div className="message-item">Share with Friends!</div>
          </div>
        </div>
      </section>

      <section className="connect">
        <h2>Connect with Us</h2>
        <p>We'd love to hear your feedback or answer any questions!</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=schhom@ucsc.edu&su=UCVibe%20Feedback&body=Hey%20UCVibe%20team%2C%20I%20have%20some%20feedback..."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          📧 Email Us
        </a>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
