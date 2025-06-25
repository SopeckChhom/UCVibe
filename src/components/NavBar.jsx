// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/NavBar.css";

export default function NavBar() {
  const { isAuthenticated, user, logout } = useAuth();

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
          <>
            <span className="nav-greeting"> {user.displayName} </span>
            {user.displayName ? (
              <span className="nav-greeting">Hello, {user.displayName}</span>
            ) : (
              <Link to="/account" className="nav-greeting">
                My Account
              </Link>
            )}
            <button onClick={logout} className="nav-link logout-button">
              Log Out
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
