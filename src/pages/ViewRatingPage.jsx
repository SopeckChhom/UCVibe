import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/ViewRatingPage.css";
import { schoolDiningData } from "../data/schoolDiningData";
import { schoolLectureData } from "../data/schoolLectureData";

const mockReviews = [
  { rating: 5, text: "Food was 🔥🔥🔥", date: "May 27, 2025" },
  { rating: 4, text: "Clean and friendly staff!", date: "May 26, 2025" },
  { rating: 2, text: "Too crowded during lunch.", date: "May 25, 2025" },
];

function ViewRatingPage() {
  const { school: schoolId, hallId: placeId, category } = useParams();
  const navigate = useNavigate();

  const dataSource =
    category === "lecture" ? schoolLectureData : schoolDiningData;
  const schoolData = dataSource[schoolId];

  const categoryMap = {
    dining: "diningHalls",
    cafe: "cafes",
    market: "markets",
    lecture: "lectureHalls",
    rec: "recCenters",
  };

  const categoryKey = categoryMap[category];
  const places = schoolData?.[categoryKey] || [];

  let matchedPlace = places.find((place) => {
    const parts = place.link.split("/");
    return parts[parts.length - 1] === placeId;
  });

  // 🔁 Redirect to correct category if needed
  useEffect(() => {
    if (!matchedPlace && schoolData) {
      const fallbackKeys = ["diningHalls", "cafes", "markets"];
      for (let key of fallbackKeys) {
        const fallbackPlaces = schoolData[key] || [];
        const found = fallbackPlaces.find(
          (place) => place.link.split("/").pop() === placeId
        );
        if (found) {
          const correctedCategory = found.link.split("/")[2];
          navigate(`/${schoolId}/${correctedCategory}/view/${placeId}`, {
            replace: true,
          });
          return;
        }
      }
    }
  }, [matchedPlace, schoolData, schoolId, placeId, navigate]);

  const displayName = matchedPlace?.name || "Campus Spot";

  const ratingCounts = [2, 1, 0, 3, 5];
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

        <Link to={`/${schoolId}/${category}/rate/${placeId}`}>
          <button className="rate-button">Rate this place</button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default ViewRatingPage;
