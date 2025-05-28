import React from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/ViewRatingPage.css";
import { schoolDiningData } from "../data/schoolDiningData";

// Fake backend reviews
const mockReviews = [
  { rating: 5, text: "Food was 🔥🔥🔥", date: "May 27, 2025" },
  { rating: 4, text: "Clean and friendly staff!", date: "May 26, 2025" },
  { rating: 2, text: "Too crowded during lunch.", date: "May 25, 2025" },
];

function ViewRatingPage() {
  const { school: schoolId, hallId: placeId } = useParams();
  const schoolData = schoolDiningData[schoolId];
  const diningHalls = schoolData?.diningHalls || [];
  const matchedPlace = diningHalls.find((place) => place.id === placeId);
  const displayName = matchedPlace?.name || "Campus Spot";

  // Distribution logic (mocked)
  const ratingCounts = [2, 1, 0, 3, 5]; // index 0 = 1★, index 4 = 5★
  const totalRatings = ratingCounts.reduce((a, b) => a + b, 0);
  const averageRating = (
    ratingCounts.reduce((sum, count, i) => sum + count * (i + 1), 0) /
    totalRatings
  ).toFixed(1);

  return (
    <>
      <NavBar />
      <section className="hero">
        <h1>{displayName}</h1>
        <p>See what others think.</p>

        <div className="rating-summary">
          <h2>⭐ {averageRating} / 5</h2>
          <p>{totalRatings} total ratings</p>

          <div className="distribution-bars">
            {ratingCounts
              .map((count, index) => ({ stars: 5 - index, count }))
              .map(({ stars, count }) => (
                <div key={stars} className="distribution-row">
                  <span>{stars}★</span>
                  <div className="bar-container">
                    <div
                      className="bar"
                      style={{
                        width: totalRatings
                          ? `${(count / totalRatings) * 100}%`
                          : "0%",
                      }}
                    />
                  </div>
                  <span className="count">{count}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="review-section">
          <h3>User Reviews</h3>
          {mockReviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-rating">
                {"★".repeat(review.rating).padEnd(5, "☆")}
              </div>
              <p className="review-text">{review.text}</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))}
        </div>

        <Link to={`/${schoolId}/dining/rate/${placeId}`}>
          <button className="rate-button">Rate this place</button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default ViewRatingPage;
