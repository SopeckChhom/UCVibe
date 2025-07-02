// src/pages/account/RatingsPage.jsx
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function RatingsPage() {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const fetchRatings = async () => {
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

  const handleDelete = async (reviewId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "reviews", reviewId));
      setRatings((prev) => prev.filter((r) => r.id !== reviewId));
    } catch (err) {
      console.error("Error deleting review:", err);
      alert("Failed to delete review.");
    }
  };

  if (loading) return <p>Loading your ratings...</p>;

  if (ratings.length === 0) {
    return <p>You haven't rated anything yet.</p>;
  }

  return (
    <div>
      <h2>My Ratings</h2>
      <ul>
        {ratings.map((review) => {
          const createdAtDate = review.createdAt?.toDate?.();
          const formattedDate = createdAtDate
            ? createdAtDate.toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : "Unknown date";

          return (
            <li key={review.id} style={{ marginBottom: "1.5rem" }}>
              <strong>{review.itemId}</strong> ({review.category}) at{" "}
              {review.school.toUpperCase()}
              <br />⭐ {review.rating} — {review.text}
              <br />
              <small>Tags: {review.tags?.join(", ")}</small>
              <br />
              <small>Posted on: {formattedDate}</small>
              <br />
              <button onClick={() => handleDelete(review.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
