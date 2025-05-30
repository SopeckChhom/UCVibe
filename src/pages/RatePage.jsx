import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";
import "../styles/RateDiningPage.css";
import { schoolDiningData } from "../data/schoolDiningData";
import { schoolLectureData } from "../data/schoolLectureData";

function RatePage() {
  const { school: schoolId, category, hallId: placeId } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [customTagInput, setCustomTagInput] = useState("");

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
  const allPlaces = schoolData?.[categoryKey] || [];

  // Try to match within the given category first
  let matchedPlace = allPlaces.find((place) => {
    const lastSegment = place.link.split("/").pop();
    return lastSegment === placeId;
  });

  // If no match, check other categories and redirect if found
  useEffect(() => {
    if (!matchedPlace && schoolData) {
      const fallbackKeys = ["diningHalls", "cafes", "markets"];
      for (let key of fallbackKeys) {
        const places = schoolData[key] || [];
        const found = places.find(
          (place) => place.link.split("/").pop() === placeId
        );
        if (found) {
          const correctedCategory = found.link.split("/")[2]; // get 'cafe', 'market', etc.
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
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag); // deselect tag
      }
      if (prev.length >= 3) return prev; // do nothing if limit reached
      return [...prev, tag]; // add new tag
    });
  };

  const addCustomTag = () => {
    const trimmed = customTagInput.trim();
    const wordCount = trimmed.split(/\s+/).length;
    if (wordCount > 3) {
      return;
    }

    if (trimmed && !selectedTags.includes(trimmed) && selectedTags.length < 3) {
      setSelectedTags([...selectedTags, trimmed]);
      setCustomTagInput("");
    }
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
      <div className="page-wrapper">
        <div className="rate-container">
          <div className="rate-card">
            <h1>Rate {displayName}</h1>
            <p className="rate-subtext">How was your experience overall?</p>

            {!submitted ? (
              <>
                <StarRating onRate={setRating} />

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
                  disabled={!rating || reviewText.trim() === ""}
                >
                  Submit
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

export default RatePage;
