// src/App.js
import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// === Pages ===
import HomePage from "./pages/HomePage";
import DiningPage from "./pages/DiningPage";
import LecturePage from "./pages/LecturePage";
import RecCenterPage from "./pages/RecCenterPage";
import StudySpotsPage from "./pages/StudySpotsPage";
import RatePage from "./pages/RatePage";
import ViewRatingPage from "./pages/ViewRatingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// === Static Content ===
import GuidelinesPage from "./pages/GuidelinesPage";

// === Campus Landings ===
import UCSCPage from "./campuses/ucsc/UCSCPage";
import UCLAPage from "./campuses/ucla/UCLAPage";
import UCBPage from "./campuses/ucb/UCBPage";
import UCSDPage from "./campuses/ucsd/UCSDPage";
import UCDPage from "./campuses/ucd/UCDPage";
import UCIPage from "./campuses/uci/UCIPage";
import UCMPage from "./campuses/ucm/UCMPage";
import UCRPage from "./campuses/ucr/UCRPage";
import UCSFPage from "./campuses/ucsf/UCSFPage";
import UCSBPage from "./campuses/ucsb/UCSBPage";

// === ProtectedRoute ===
import ProtectedRoute from "./components/ProtectedRoute";

// === Dynamic Data ===
import { schoolDiningData } from "./data/schoolDiningData";
import { schoolLectureData } from "./data/schoolLectureData";
import { schoolRecData } from "./data/schoolRecData";

// Dynamic route helpers
function DynamicDiningRoute() {
  const { school } = useParams();
  const data = schoolDiningData[school];
  return data ? (
    <DiningPage {...data} />
  ) : (
    <h1>404 – No dining data for “{school}”</h1>
  );
}

function DynamicLectureRoute() {
  const { school } = useParams();
  const data = schoolLectureData[school];
  return data ? (
    <LecturePage {...data} />
  ) : (
    <h1>404 – No lecture data for “{school}”</h1>
  );
}

function DynamicRecCenterRoute() {
  const { school } = useParams();
  const data = schoolRecData[school];
  return data ? (
    <RecCenterPage {...data} />
  ) : (
    <h1>404 – No rec centers for “{school}”</h1>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Campus Landings */}
        <Route path="/ucsc" element={<UCSCPage />} />
        <Route path="/ucla" element={<UCLAPage />} />
        <Route path="/ucb" element={<UCBPage />} />
        <Route path="/ucsd" element={<UCSDPage />} />
        <Route path="/ucd" element={<UCDPage />} />
        <Route path="/uci" element={<UCIPage />} />
        <Route path="/ucm" element={<UCMPage />} />
        <Route path="/ucr" element={<UCRPage />} />
        <Route path="/ucsf" element={<UCSFPage />} />
        <Route path="/ucsb" element={<UCSBPage />} />

        {/* Dynamic Categories */}
        <Route path="/:school/dining" element={<DynamicDiningRoute />} />
        <Route path="/:school/lecture" element={<DynamicLectureRoute />} />
        <Route path="/:school/rec" element={<DynamicRecCenterRoute />} />
        <Route path="/:school/study-spots" element={<StudySpotsPage />} />

        {/* View & Rate (Protected) */}
        <Route
          path="/:school/:category/view/:id"
          element={<ViewRatingPage />}
        />
        <Route
          path="/:school/:category/rate/:id"
          element={
            <ProtectedRoute>
              <RatePage />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
