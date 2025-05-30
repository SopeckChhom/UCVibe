import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import UCSCPage from "./campuses/ucsc/UCSCPage";
import UCLAPage from "./campuses/ucla/UCLAPage";
import UCBPage from "./campuses/ucb/UCBPage";
import DiningPage from "./pages/DiningPage";
import RatePage from "./pages/RatePage";
import ViewRatingPage from "./pages/ViewRatingPage";
import LecturePage from "./pages/LecturePage";

import { schoolDiningData } from "./data/schoolDiningData";

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

function App() {
  return (
    <Router>
      <Routes>
        {/* Home + Campus Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/ucsc" element={<UCSCPage />} />
        <Route path="/ucla" element={<UCLAPage />} />
        <Route path="/ucb" element={<UCBPage />} />

        {/* Dining Main Page (Dynamic) */}
        <Route path="/:school/dining" element={<DynamicDiningRoute />} />

        {/* Rate + View Routes — universal across all categories */}
        <Route path="/:school/:category/rate/:hallId" element={<RatePage />} />
        <Route
          path="/:school/:category/view/:hallId"
          element={<ViewRatingPage />}
        />

        {/* Lecture Page */}
        <Route path="/:school/lecture" element={<LecturePage />} />
      </Routes>
    </Router>
  );
}

export default App;
