// src/pages/RatePage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";
import "../styles/RateDiningPage.css";
import { schoolDiningData } from "../data/schoolDiningData";
import { schoolLectureData } from "../data/schoolLectureData";
import { schoolRecData } from "../data/schoolRecData";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const categoryMap = {
  dining: "diningHalls",
  cafe: "cafes",
  market: "markets",
  lecture: "lectureHalls",
  rec: "recCenters",
};

export default function RatePage() {
  const { school: schoolId, category, id: placeId } = useParams();
  const navigate = useNavigate();

  // Form state
  const [rating, setRating] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [customTagInput, setCustomTagInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Lookup place data
  const dataSourceMap = {
    dining: schoolDiningData,
    cafe: schoolDiningData,
    market: schoolDiningData,
    lecture: schoolLectureData,
    rec: schoolRecData,
  };
  const schoolData = dataSourceMap[category]?.[schoolId] || {};
  const places = schoolData[categoryMap[category]] || [];
  const matched = places.find((p) => p.id === placeId);

  // If wrong category, redirect to correct one
  useEffect(() => {
    if (!matched && schoolData) {
      Object.entries(categoryMap).forEach(([cat, key]) => {
        const found = (schoolData[key] || []).find((p) => p.id === placeId);
        if (found) {
          navigate(`/${schoolId}/${cat}/rate/${placeId}`, { replace: true });
        }
      });
    }
  }, [matched, schoolData, schoolId, placeId, navigate]);

  const displayName = matched?.name || "Campus Spot";

  // Tag logic
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
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : prev.length < 3
        ? [...prev, tag]
        : prev
    );
  };
  const addCustomTag = () => {
    const t = customTagInput.trim();
    const words = t.split(/\s+/);
    if (!t || words.length > 3 || selectedTags.length >= 3) return;
    setSelectedTags([...selectedTags, t]);
    setCustomTagInput("");
  };
  const removeTag = (tag) =>
    setSelectedTags(selectedTags.filter((t) => t !== tag));

  // Review text logic
  const handleReviewChange = (e) => {
    if (e.target.value.length <= 300) {
      setReviewText(e.target.value);
    }
  };
  const charCount = reviewText.length;

  // Submit to Firestore
  const handleSubmit = async () => {
    setLoading(true);
    setSubmitError("");
    try {
      await addDoc(collection(db, "reviews"), {
        userId: auth.currentUser.uid,
        school: schoolId,
        category,
        itemId: placeId,
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
      console.error(err);
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
                      placeholder="Add your own tag (3 words max)"
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
                        <button
                          type="button"
                          className="remove-tag"
                          onClick={() => removeTag(tag)}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Review textarea */}
                <textarea
                  className="review-textarea"
                  placeholder="Leave a short review (max 300 chars)…"
                  value={reviewText}
                  onChange={handleReviewChange}
                />
                <p
                  className="char-count"
                  style={{ color: charCount >= 300 ? "red" : "black" }}
                >
                  {charCount}/300
                </p>

                <button
                  className="submit-review-button"
                  onClick={handleSubmit}
                  disabled={loading || !rating || reviewText.trim() === ""}
                >
                  {loading ? "Submitting…" : "Submit Review"}
                </button>
              </>
            ) : (
              <p className="submitted-rating">
                ✅ You rated this {rating} star
                {rating > 1 ? "s" : ""} and left a review!
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
