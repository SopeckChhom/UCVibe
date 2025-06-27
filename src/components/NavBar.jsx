// src/components/NavBar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/NavBar.css";

export default function NavBar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <h1 className="navbar-title">
        <Link to="/" className="ucvibe-link">
          UCVibe
        </Link>
      </h1>

      <nav className="navbar-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>

        {!isAuthenticated ? (
          <>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
            <Link to="/login" className="nav-link">
              Log In
            </Link>
          </>
        ) : (
          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className="nav-greeting"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {"Hello, " + user.displayName || "My Account"}
              <span className={`arrow ${menuOpen ? "open" : ""}`} />
            </button>

            {menuOpen && (
              <div className="dropdown-menu">
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/account");
                    setMenuOpen(false);
                  }}
                >
                  Settings
                </button>
                <button
                  type="button"
                  className="dropdown-item logout-button"
                  onClick={logout}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
