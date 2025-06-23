// src/pages/SignupPage.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function SignupPage() {
  const { login } = useAuth();
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Sign Up</h1>
      <button
        onClick={login}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Simulate Sign Up
      </button>
    </div>
  );
}
