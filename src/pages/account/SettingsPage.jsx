// src/pages/SettingsPage.jsx
import React from "react";
import { auth } from "../../firebase";
import "../../styles/SettingsPage.css";

export default function SettingsPage() {
  const user = auth.currentUser;

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      <div className="settings-info">
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Password:</strong> ••••••••
        </p>
      </div>
      <p className="settings-note">
        For security reasons, passwords are hidden and cannot be retrieved.
        <br />
        To update your password, please use the reset password feature on the
        login page.
      </p>
    </div>
  );
}
