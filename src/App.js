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
import DiningPage from "./pages/DiningPage";
import RateDiningPage from "./pages/RateDiningPage";

import { schoolDiningData } from "./data/schoolDiningData"; // ✅ MOVE THIS UP HERE

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
    />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ucsc" element={<UCSCPage />} />
        <Route path="/ucla" element={<UCLAPage />} />
        <Route path="/:school/dining" element={<DynamicDiningRoute />} />
        <Route
          path="/:school/dining/rate/:hallId"
          element={<RateDiningPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
