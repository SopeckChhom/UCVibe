// src/pages/account/RatingsPage.jsx
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

export default function RatingsPage() {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchRatings = async () => {
      if (!user) return;

      const q = query(
        collection(db, "reviews"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRatings(data);
      setLoading(false);
    };

    fetchRatings();
  }, [user]);

  if (loading) return <p>Loading your ratings...</p>;

  if (ratings.length === 0) {
    return <p>You haven't rated anything yet.</p>;
  }

  return (
    <div>
      <h2>My Ratings</h2>
      <ul>
        {ratings.map((review) => (
          <li key={review.id} style={{ marginBottom: "1.5rem" }}>
            <strong>{review.itemId}</strong> ({review.category}) at{" "}
            {review.school.toUpperCase()}
            <br />⭐ {review.rating} — {review.text}
            <br />
            <small>Tags: {review.tags?.join(", ")}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
