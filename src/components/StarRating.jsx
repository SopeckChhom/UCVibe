// src/components/StarRating.jsx
import React, { useState } from "react";
import "../styles/StarRating.css"; // we'll style the stars here

function StarRating({ onRate }) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleClick = (rating) => {
    setSelected(rating);
    if (onRate) onRate(rating); // callback to parent
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${
            hovered >= star || selected >= star ? "filled" : ""
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
