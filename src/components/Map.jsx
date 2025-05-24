import React, { useEffect } from "react";
import { useGoogleMaps } from "../hooks/useGoogleMaps";
import "../styles/Map.css";

function Map({ center, markers = [] }) {
  const mapLoaded = useGoogleMaps("AIzaSyAMjJMiV-VG9Esth30DzM_Jgze_OY1a5ik");

  useEffect(() => {
    if (!mapLoaded) return;

    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;

    const map = new window.google.maps.Map(mapContainer, {
      zoom: 15,
      center,
    });

    markers.forEach(({ position, title }) => {
      new window.google.maps.Marker({ position, map, title });
    });
  }, [mapLoaded, center, markers]);

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
}

export default Map;
