// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Welcome to UCVibe!</h1>
      <button onClick={logout}>Log Out</button>
      <section>
        <h2>Choose a campus</h2>
        <Link to="/ucsc/dining">UC Santa Cruz</Link>
        <Link to="/ucla/dining">UCLA</Link>
        {/* etc… */}
      </section>
    </div>
  );
}
