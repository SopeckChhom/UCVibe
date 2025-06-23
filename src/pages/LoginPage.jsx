// src/pages/LoginPage.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h1 className="text-3xl font-semibold mb-6">Log In</h1>
      <button
        onClick={login}
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Simulate Log In
      </button>
    </div>
  );
}
