import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// === Pages ===
import HomePage from "./pages/HomePage";
import DiningPage from "./pages/DiningPage";
import LecturePage from "./pages/LecturePage";
import RecCenterPage from "./pages/RecCenterPage";
import RatePage from "./pages/RatePage";
import ViewRatingPage from "./pages/ViewRatingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";

// === Static Content ===
import GuidelinesPage from "./pages/GuidelinesPage";

// === School Landing Pages ===
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

// === Mock Data ===
import { schoolDiningData } from "./data/schoolDiningData";
import { schoolLectureData } from "./data/schoolLectureData";
import { schoolRecData } from "./data/schoolRecData";

// PrivateRoute component to guard protected routes
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

// ——— Dynamic Dining Route ———
function DynamicDiningRoute() {
  const { school } = useParams();
  const data = schoolDiningData[school];
  if (!data) return <h1>404 – No dining data for “{school}”</h1>;
  return <DiningPage {...data} />;
}

// ——— Dynamic Lecture Route ———
function DynamicLectureRoute() {
  const { school } = useParams();
  const data = schoolLectureData[school];
  if (!data) return <h1>404 – No lecture data for “{school}”</h1>;
  return <LecturePage {...data} />;
}

// ——— Dynamic Rec-Center Route ———
function DynamicRecCenterRoute() {
  const { school } = useParams();
  const data = schoolRecData[school];
  if (!data) return <h1>404 – No rec centers for “{school}”</h1>;
  return <RecCenterPage {...data} />;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Campus Landing Pages (public) */}
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

        {/* Dynamic Category Pages (public) */}
        <Route path="/:school/dining" element={<DynamicDiningRoute />} />
        <Route path="/:school/lecture" element={<DynamicLectureRoute />} />
        <Route path="/:school/rec" element={<DynamicRecCenterRoute />} />

        {/* View Rating Page (public) */}
        <Route
          path="/:school/:category/view/:hallId"
          element={<ViewRatingPage />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/:school/:category/rate/:hallId"
          element={
            <PrivateRoute>
              <RatePage />
            </PrivateRoute>
          }
        />

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
