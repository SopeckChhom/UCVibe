import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/RateDiningPage.css";
import { schoolDiningData } from "../data/schoolDiningData";

function RateDiningPage() {
  const { schoolId, hallId } = useParams();

  const schoolData = schoolDiningData[schoolId];

  const allHalls = [
    ...(schoolData?.diningHalls || []),
    ...(schoolData?.cafes || []),
    ...(schoolData?.markets || []),
  ];

  const matchedHall = allHalls.find((hall) => {
    const lastSegment = hall.link.split("/").pop();
    return lastSegment === hallId;
  });

  const displayName = matchedHall?.name || "Dining Hall";

  return (
    <>
      <NavBar />
      <section className="hero">
        <h1>Rate {displayName}</h1>
        <p>Share your experience with food, cleanliness, vibe, and more!</p>
      </section>
      {/* rest of your form here */}
      <Footer />
    </>
  );
}

export default RateDiningPage;
