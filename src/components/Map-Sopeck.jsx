import React, { useEffect } from "react";
import "../styles/Map.css";

function Map() {
  useEffect(() => {
    const initMap = () => {
      const ucsc_map = { lat: 36.9914, lng: -122.0609 };
      const mapContainer = document.getElementById("map");
      if (!mapContainer) return;

      const map = new window.google.maps.Map(mapContainer, {
        zoom: 15,
        center: ucsc_map,
      });

      new window.google.maps.Marker({
        position: { lat: 36.9992, lng: -122.0587 },
        map,
        title: "John R. Lewis & College Nine Dining Hall",
      });

      new window.google.maps.Marker({
        position: { lat: 36.9972, lng: -122.0549 },
        map,
        title: "Cowell & Stevenson Dining Hall",
      });
    };

    if (window.google) {
      initMap();
    }
  }, []);

  return <div id="map"></div>;
}

export default Map;
