// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12">
      <div className="mb-2 text-sm text-gray-600">
        © {new Date().getFullYear()} UCVibe. All rights reserved.
      </div>
      <div className="guideline">
        <Link to="/guidelines" className="guideline">
          Guidelines / Terms & Conditions / Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
