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
import RatePage from "./pages/RatePage";
import ViewRatingPage from "./pages/ViewRatingPage";
import LecturePage from "./pages/LecturePage";
import RecCenterPage from "./pages/RecCenterPage";

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

// === Data ===
import { schoolDiningData } from "./data/schoolDiningData";
import { schoolLectureData } from "./data/schoolLectureData";
import { schoolRecData } from "./data/schoolRecData";

// === Dynamic Dining Route ===
function DynamicDiningRoute() {
  const { school } = useParams();
  const data = schoolDiningData[school];

  if (!data) {
    return <h1>404 – Dining data not found for '{school}'</h1>;
  }

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

// === Dynamic Lecture Route ===
function DynamicLectureRoute() {
  const { school } = useParams();
  const data = schoolLectureData[school];

  if (!data) return <h1>404 - Lecture data not found for '{school}'</h1>;

  return (
    <LecturePage
      title={data.title}
      lectureHalls={data.lectureHalls}
      mapCenter={data.mapCenter}
      mapMarkers={data.mapMarkers}
    />
  );
}

function DynamicRecCenterRoute() {
  const { school } = useParams();
  const data = schoolRecData[school];

  if (!data) {
    return <h1>404 – Rec Center data not found for '{school}'</h1>;
  }

  return (
    <RecCenterPage
      title={data.title}
      recCenters={data.recCenters}
      mapCenter={data.mapCenter}
      mapMarkers={data.mapMarkers}
    />
  );
}

// === Main App Router ===
function App() {
  return (
    <Router>
      <Routes>
        {/* === Home Page === */}
        <Route path="/" element={<HomePage />} />

        {/* === School Landing Pages === */}
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

        {/* === Dining Page (Dynamic) === */}
        <Route path="/:school/dining" element={<DynamicDiningRoute />} />

        {/* === Rating & Viewing Routes === */}
        <Route path="/:school/:category/rate/:hallId" element={<RatePage />} />
        <Route
          path="/:school/:category/view/:hallId"
          element={<ViewRatingPage />}
        />

        {/* === Lecture Halls Page === */}
        <Route path="/:school/lecture" element={<DynamicLectureRoute />} />

        {/* === Rec Centers Page === */}
        <Route path="/:school/recreation" element={<DynamicRecCenterRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
