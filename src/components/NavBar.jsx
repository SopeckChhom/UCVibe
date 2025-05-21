import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <header>
      <h1>
        <a href="/" className="ucvibe-link">
          UCVibe
        </a>
      </h1>
      <nav>
        <a href="/">Home</a>
        <a href="#">Spots</a>
        <a href="#">Rate</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

export default NavBar;
