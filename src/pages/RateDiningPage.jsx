// src/pages/RateDiningPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/RateDiningPage.css";

function RateDiningPage() {
  const { hallId } = useParams();

  const hallNames = {
    "john-lewis": "John R. Lewis & College Nine Dining Hall",
    "cowell-stevenson": "Cowell & Stevenson Dining Hall",
    "oakes-cafe": "Oakes' Cafe",
    "global-village": "Global Village Cafe",
  };

  const displayName = hallNames[hallId] || "Dining Hall";

  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Rate {displayName}</h1>
        <p>Share your experience with food, cleanliness, vibe, and more!</p>
      </section>

      <section className="rating-form">
        <form>
          <label htmlFor="food">Food Quality:</label>
          <select id="food" name="food">
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="1">⭐️</option>
          </select>

          <label htmlFor="cleanliness">Cleanliness:</label>
          <select id="cleanliness" name="cleanliness">
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="1">⭐️</option>
          </select>

          <label htmlFor="vibe">Atmosphere/Vibe:</label>
          <select id="vibe" name="vibe">
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="1">⭐️</option>
          </select>

          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="4"></textarea>

          <button type="submit">Submit Rating</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default RateDiningPage;
