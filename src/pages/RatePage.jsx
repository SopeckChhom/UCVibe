import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";
import "../styles/RateDiningPage.css";
import { schoolDiningData } from "../data/schoolDiningData";

function RatePage() {
  const { school: schoolId, hallId: placeId } = useParams();
  const category = "dining";

  const [rating, setRating] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [customTagInput, setCustomTagInput] = useState("");

  const schoolData = schoolDiningData[schoolId];

  const categoryMap = {
    dining: "diningHalls",
    cafe: "cafes",
    market: "markets",
    lecture: "lectureHalls",
    rec: "recCenters",
  };

  const categoryKey = categoryMap[category];
  const allPlaces = schoolData?.[categoryKey] || [];
  const matchedPlace = allPlaces.find((place) => place.id === placeId);
  const displayName = matchedPlace?.name || "Campus Spot";

  const predefinedTags = [
    "🔥 Good Food",
    "🧼 Clean",
    "😎 Chill Vibe",
    "😩 Crowded",
    "💰 Worth It",
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const addCustomTag = () => {
    const trimmed = customTagInput.trim();
    if (trimmed && !selectedTags.includes(trimmed)) {
      setSelectedTags([...selectedTags, trimmed]);
    }
    setCustomTagInput("");
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const handleSubmit = () => {
    console.log("Rating:", rating);
    console.log("Review:", reviewText);
    console.log("Tags:", selectedTags);
    setSubmitted(true);
    setReviewText("");
    setSelectedTags([]);
    setCustomTagInput("");
  };

  return (
    <>
      <NavBar />
      <div className="rate-container">
        <div className="rate-card">
          <h1>Rate {displayName}</h1>
          <p className="rate-subtext">How was your experience overall?</p>

          {!submitted ? (
            <>
              <StarRating onRate={setRating} />

              <div className="tag-selector">
                <p className="tag-heading">Select or add tags:</p>

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
                    placeholder="Add your own tag..."
                    value={customTagInput}
                    onChange={(e) => setCustomTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addCustomTag()}
                  />
                  <button onClick={addCustomTag}>Add</button>
                </div>

                <div className="selected-tags">
                  {selectedTags.map((tag, i) => (
                    <span key={i} className="selected-tag">
                      {tag}
                      <button onClick={() => removeTag(tag)}>×</button>
                    </span>
                  ))}
                </div>
              </div>

              <textarea
                className="review-textarea"
                placeholder="Leave a short review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />

              <button
                className="submit-review-button"
                onClick={handleSubmit}
                disabled={!rating || reviewText.trim() === ""}
              >
                Submit
              </button>
            </>
          ) : (
            <p className="submitted-rating">
              ✅ You rated this {rating} star{rating > 1 ? "s" : ""} and left a
              review!
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RatePage;
