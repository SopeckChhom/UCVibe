// src/pages/ViewRatingPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/ViewRatingPage.css";
import { schoolDiningData } from "../data/schoolDiningData";
import { schoolLectureData } from "../data/schoolLectureData";
import { schoolRecData } from "../data/schoolRecData";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const categoryMap = {
  dining: "diningHalls",
  cafe: "cafes",
  market: "markets",
  lecture: "lectureHalls",
  rec: "recCenters",
};

export default function ViewRatingPage() {
  const { school: schoolId, category, id: placeId } = useParams();
  const navigate = useNavigate();

  // Data source selection
  const dataSourceMap = {
    dining: schoolDiningData,
    cafe: schoolDiningData,
    market: schoolDiningData,
    lecture: schoolLectureData,
    rec: schoolRecData,
  };
  const dataSource = dataSourceMap[category];
  const schoolData = dataSource?.[schoolId] || {};
  const categoryKey = categoryMap[category];
  const places = schoolData[categoryKey] || [];

  // Match place
  const matchedPlace = places.find((p) => p.id === placeId);

  // Redirect if category mismatch
  useEffect(() => {
    if (!matchedPlace && schoolData) {
      Object.entries(categoryMap).forEach(([cat, key]) => {
        const found = (schoolData[key] || []).find((p) => p.id === placeId);
        if (found) {
          navigate(`/${schoolId}/${cat}/view/${placeId}`, { replace: true });
        }
      });
    }
  }, [matchedPlace, schoolData, schoolId, placeId, navigate]);

  const displayName = matchedPlace?.name || "Campus Spot";

  // Live reviews from Firestore
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (matchedPlace) {
      const q = query(
        collection(db, "reviews"),
        where("school", "==", schoolId),
        where("category", "==", category),
        where("itemId", "==", placeId),
        orderBy("createdAt", "desc")
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setReviews(
          snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              rating: data.rating,
              text: data.text,
              createdAt: data.createdAt?.toDate(),
            };
          })
        );
      });
      return () => unsubscribe();
    }
  }, [matchedPlace, schoolId, category, placeId]);

  // Compute stats
  const totalRatings = reviews.length;
  const averageRating = totalRatings
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalRatings).toFixed(1)
    : null;
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    stars: star,
    count: reviews.filter((r) => r.rating === star).length,
  }));
  const maxCount = Math.max(...distribution.map((d) => d.count), 1);

  return (
    <>
      <NavBar />
      <section className="hero">
        <h1>{displayName}</h1>
        <p>See what others think.</p>

        <div className="rating-summary">
          {totalRatings > 0 ? (
            <>
              <h2>⭐ {averageRating} / 5</h2>
              <p>{totalRatings} total ratings</p>

              <div className="distribution-bars">
                {distribution.map(({ stars, count }) => (
                  <div key={stars} className="distribution-row">
                    <span>{stars}★</span>
                    <div className="bar-container">
                      <div
                        className="bar"
                        style={{ width: `${(count / maxCount) * 100}%` }}
                      />
                    </div>
                    <span className="count">{count}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-reviews">No reviews</div>
          )}
        </div>

        <section className="review-section">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-rating">
                {"★".repeat(rev.rating).padEnd(5, "☆")}
              </div>
              <p className="review-text">{rev.text}</p>
              <div className="review-date">
                {rev.createdAt?.toLocaleDateString()}{" "}
                {rev.createdAt?.toLocaleTimeString()}
              </div>
            </div>
          ))}
        </section>

        <Link to={`/${schoolId}/${category}/rate/${placeId}`}>
          <button className="rate-button">Rate this place</button>
        </Link>
      </section>
      <Footer />
    </>
  );
}
