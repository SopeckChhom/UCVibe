import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/ViewRatingPage.css";
import { schoolDiningData } from "../data/schoolDiningData";
import { schoolLectureData } from "../data/schoolLectureData";
import { schoolRecData } from "../data/schoolRecData";

const categoryMap = {
  /* …same as before… */
};
const mockReviews = [
  /* … */
];

export default function ViewRatingPage() {
  const { school: schoolId, category, id: placeId } = useParams();
  const navigate = useNavigate();
  const dataSource = {
    dining: schoolDiningData,
    cafe: schoolDiningData,
    market: schoolDiningData,
    lecture: schoolLectureData,
    rec: schoolRecData,
  }[category];
  const schoolData = dataSource?.[schoolId] || {};
  const places = schoolData[categoryMap[category]] || [];
  const matched = places.find((p) => p.id === placeId);

  useEffect(() => {
    if (!matched && schoolData) {
      Object.entries(categoryMap).forEach(([cat, key]) => {
        const found = (schoolData[key] || []).find((p) => p.id === placeId);
        if (found) {
          navigate(`/${schoolId}/${cat}/view/${placeId}`, { replace: true });
        }
      });
    }
  }, [matched, schoolData, schoolId, placeId, navigate]);

  const displayName = matched?.name || "Campus Spot";
  // …compute averageRating & totalRatings…

  return (
    <>
      <NavBar />
      <section className="hero">
        <h1>{displayName}</h1>
        {/* …rating summary & mockReviews… */}
        <Link to={`/${schoolId}/${category}/rate/${placeId}`}>
          <button className="rate-button">Rate this place</button>
        </Link>
      </section>
      <Footer />
    </>
  );
}
