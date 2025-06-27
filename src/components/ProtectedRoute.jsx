// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Don’t do anything until we know the auth state
  if (loading) {
    return null; // or return a spinner component if you like
  }

  // If not logged in, send them to login and remember where they came from
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Otherwise render the protected content
  return children;
}
