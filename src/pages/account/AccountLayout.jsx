import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../../styles/AccountLayout.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function AccountLayout() {
  const navigate = useNavigate();

  return (
    <div className="account-page-wrapper">
      <NavBar />
      <div className="account-layout">
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Home
        </button>

        <div className="account-nav">
          <NavLink to="/account/profile" className="account-tab">
            Profile
          </NavLink>
          <NavLink to="/account/settings" className="account-tab">
            Settings
          </NavLink>
          <NavLink to="/account/ratings" className="account-tab">
            Ratings
          </NavLink>
        </div>

        <div className="account-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
