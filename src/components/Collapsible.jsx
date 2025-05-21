import React, { useState } from "react";
import "../styles/Collapsible.css"; // or styles.css if that's where .dining-halls-container is

function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => setIsOpen(!isOpen);

  return (
    <div className="dining-halls-container">
      <h2 onClick={toggleSection}>
        {title}
        <span className="toggle-symbol">{isOpen ? "−" : "+"}</span>
      </h2>
      <div className={`dining-list ${isOpen ? "active" : ""}`}>{children}</div>
    </div>
  );
}

export default Collapsible;
