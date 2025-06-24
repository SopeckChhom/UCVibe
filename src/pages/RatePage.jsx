import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";
import "../styles/RateDiningPage.css";
import { schoolDiningData } from "../data/schoolDiningData";
import { schoolLectureData } from "../data/schoolLectureData";
import { schoolRecData } from "../data/schoolRecData";

// Firebase & Firestore imports
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Mapping categories to data keys
const categoryMap = {
  dining: "diningHalls",
  cafe: "cafes",
  market: "markets",
  lecture: "lectureHalls",
  rec: "recCenters",
};

export default function RatePage() {
  const { school: schoolId, category, hallId: placeId } = useParams();
  const navigate = useNavigate();

  // Local component state
  const [rating, setRating] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [customTagInput, setCustomTagInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Select appropriate data source
  const dataSourceMap = {
    dining: schoolDiningData,
    cafe: schoolDiningData,
    market: schoolDiningData,
    lecture: schoolLectureData,
    rec: schoolRecData,
  };
  const dataSource = dataSourceMap[category];
  const schoolData = dataSource?.[schoolId];

  const categoryKey = categoryMap[category];
  const allPlaces = schoolData?.[categoryKey] || [];

  // Find the specific place by id
  let matchedPlace = allPlaces.find((place) => place.id === placeId);

  // Redirect if the place exists under a different category
  useEffect(() => {
    if (!matchedPlace && schoolData) {
      const fallbackKeys = Object.values(categoryMap);
      for (let key of fallbackKeys) {
        const places = schoolData[key] || [];
        const found = places.find((place) => place.id === placeId);
        if (found) {
          const correctedCategory =
            Object.keys(categoryMap).find((k) => categoryMap[k] === key) ||
            "dining";
          navigate(`/${schoolId}/${correctedCategory}/rate/${placeId}`, {
            replace: true,
          });
          return;
        }
      }
    }
  }, [matchedPlace, schoolData, schoolId, placeId, navigate]);

  const displayName = matchedPlace?.name || "Campus Spot";

  const predefinedTags = [
    "Good Food",
    "Clean",
    "Chill Vibes",
    "Cramped",
    "Dirty",
    "Very Hot",
    "Super Cold",
    "Old & Boring",
    "Fun",
    "Variety",
    "Accessible",
    "Limited",
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) return prev.filter((t) => t !== tag);
      if (prev.length >= 3) return prev;
      return [...prev, tag];
    });
  };

  const addCustomTag = () => {
    const trimmed = customTagInput.trim();
    const wordCount = trimmed.split(/\s+/).length;
    if (!trimmed || wordCount > 3 || selectedTags.length >= 3) return;
    setSelectedTags([...selectedTags, trimmed]);
    setCustomTagInput("");
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const handleReviewChange = (e) => {
    const text = e.target.value;
    if (text.length <= 300) {
      setReviewText(text);
    }
  };

  const charCount = reviewText.length;

  // Submit review to Firestore
  const handleSubmit = async () => {
    setLoading(true);
    setSubmitError("");
    try {
      await addDoc(collection(db, "reviews"), {
        userId: auth.currentUser.uid,
        school: schoolId,
        category,
        hallId: placeId,
        rating,
        text: reviewText,
        tags: selectedTags,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      setReviewText("");
      setSelectedTags([]);
      setCustomTagInput("");
    } catch (err) {
      console.error("Failed to submit review", err);
      setSubmitError("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="page-wrapper">
        <div className="rate-container">
          <div className="rate-card">
            <h1>Rate {displayName}</h1>
            <p className="rate-subtext">How was your experience overall?</p>

            {!submitted ? (
              <>
                <StarRating onRate={setRating} />
                {submitError && <p className="auth-error">{submitError}</p>}

                {/* Tag selector */}
                <div className="tag-selector">
                  <p className="tag-heading">Add up to 3 tags</p>
                  <div className="tag-options">
                    {predefinedTags.map((tag, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`tag-button ${
                          selectedTags.includes(tag) ? "active" : ""
                        }`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  <div className="custom-tag-input">
                    <input
                      type="text"
                      placeholder="Add your own tag (3 words max)..."
                      value={customTagInput}
                      onChange={(e) => setCustomTagInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addCustomTag()}
                    />
                    <button type="button" onClick={addCustomTag}>
                      Add
                    </button>
                  </div>
                  <div className="selected-tags">
                    {selectedTags.map((tag, i) => (
                      <span key={i} className="selected-tag">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)}>
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Review textarea */}
                <textarea
                  className="review-textarea"
                  placeholder="Leave a short review (max 300 characters)..."
                  value={reviewText}
                  onChange={handleReviewChange}
                />
                <p
                  className="char-count"
                  style={{ color: charCount >= 300 ? "red" : "black" }}
                >
                  {charCount}/300 characters
                </p>

                <button
                  className="submit-review-button"
                  onClick={handleSubmit}
                  disabled={loading || !rating || reviewText.trim() === ""}
                >
                  {loading ? "Submitting…" : "Submit"}
                </button>
              </>
            ) : (
              <p className="submitted-rating">
                ✅ You rated this {rating} star{rating > 1 ? "s" : ""} and left
                a review!
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
