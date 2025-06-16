// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

// === Pages ===
import HomePage from "./pages/HomePage";
import DiningPage from "./pages/DiningPage";
import LecturePage from "./pages/LecturePage";
import RecCenterPage from "./pages/RecCenterPage";
import RatePage from "./pages/RatePage";
import ViewRatingPage from "./pages/ViewRatingPage";

// === Static Content ===
import GuidelinesPage from "./pages/GuidelinesPage";

// === School Landing Pages (explicit imports) ===
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

// ——— Dynamic Dining Route ———
function DynamicDiningRoute() {
  const { school } = useParams();
  const data = schoolDiningData[school];
  if (!data) return <h1>404 – No dining data for “{school}”</h1>;
  return (
    <DiningPage
      title={data.title}
      diningHalls={data.diningHalls}
      cafes={data.cafes}
      markets={data.markets}
      mapCenter={data.mapCenter}
      mapMarkers={data.mapMarkers}
    />
  );
}

// ——— Dynamic Lecture Route ———
function DynamicLectureRoute() {
  const { school } = useParams();
  const data = schoolLectureData[school];
  if (!data) return <h1>404 – No lecture data for “{school}”</h1>;
  return (
    <LecturePage
      title={data.title}
      lectureHalls={data.lectureHalls}
      mapCenter={data.mapCenter}
      mapMarkers={data.mapMarkers}
    />
  );
}

// ——— Dynamic Rec-Center Route ———
function DynamicRecCenterRoute() {
  const { school } = useParams();
  const data = schoolRecData[school];
  if (!data) return <h1>404 – No rec-centers for “{school}”</h1>;
  return (
    <RecCenterPage
      title={data.title}
      recCenters={data.recCenters}
      mapCenter={data.mapCenter}
      mapMarkers={data.mapMarkers}
    />
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Campus landing pages */}
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

        {/* Dynamic category pages */}
        <Route path="/:school/dining" element={<DynamicDiningRoute />} />
        <Route path="/:school/lecture" element={<DynamicLectureRoute />} />
        <Route path="/:school/recreation" element={<DynamicRecCenterRoute />} />

        {/* Rate & view */}
        <Route path="/:school/:category/rate/:hallId" element={<RatePage />} />
        <Route
          path="/:school/:category/view/:hallId"
          element={<ViewRatingPage />}
        />

        {/* Static */}
        <Route path="/guidelines" element={<GuidelinesPage />} />

        {/* (Optional) catch-all 404 */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}
