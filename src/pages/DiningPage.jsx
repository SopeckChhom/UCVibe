// src/pages/DiningPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
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

function DiningPage({
  title,
  diningHalls = [],
  cafes = [],
  markets = [],
  mapCenter,
  mapMarkers,
}) {
  const { school } = useParams(); // 👈 get school dynamically from URL

  return (
    <>
      <NavBar />

      <section className="hero">
        <h1>Find New Places to Dine at {title}!</h1>
        <p>Help us rate the best dining halls and markets on campus!</p>
      </section>

      <section className="map-heading">
        <h2>Dining and Market Locations</h2>
      </section>
      <Map center={mapCenter} markers={mapMarkers} />

      {diningHalls.length > 0 && (
        <Collapsible title="Dining Halls">
          {diningHalls.map((hall, i) => (
            <div key={i} className="rating-card">
              <h3>{hall.name}</h3>
              <div className="rating-card-buttons">
                <a
                  href={`/${school}/dining/view/${hall.id}`}
                  className="view-button"
                >
                  View
                </a>
                <a
                  href={`/${school}/dining/rate/${hall.id}`}
                  className="rate-button"
                >
                  Rate
                </a>
              </div>
            </div>
          ))}
        </Collapsible>
      )}

      {cafes.length > 0 && (
        <Collapsible title="Cafes">
          {cafes.map((cafe, i) => (
            <div key={i} className="rating-card">
              <h3>{cafe.name}</h3>
              <div className="rating-card-buttons">
                <a
                  href={`/${school}/dining/view/${cafe.id}`}
                  className="view-button"
                >
                  View
                </a>
                <a
                  href={`/${school}/dining/rate/${cafe.id}`}
                  className="rate-button"
                >
                  Rate
                </a>
              </div>
            </div>
          ))}
        </Collapsible>
      )}

      {markets.length > 0 && (
        <Collapsible title="Markets">
          {markets.map((market, i) => (
            <div key={i} className="rating-card">
              <h3>{market.name}</h3>
              <div className="rating-card-buttons">
                <a
                  href={`/${school}/dining/view/${market.id}`}
                  className="view-button"
                >
                  View
                </a>
                <a
                  href={`/${school}/dining/rate/${market.id}`}
                  className="rate-button"
                >
                  Rate
                </a>
              </div>
            </div>
          ))}
        </Collapsible>
      )}

      <Footer />
    </>
  );
}

export default DiningPage;
