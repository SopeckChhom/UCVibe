import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/StudySpotsPage.css";

export default function StudySpotsPage() {
  const [spots, setSpots] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const fetchSpots = async () => {
    const q = query(collection(db, "studySpots"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setSpots(data);
  };

  useEffect(() => {
    fetchSpots();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert("You must be logged in to share a spot.");
      return;
    }
    try {
      await addDoc(collection(db, "studySpots"), {
        name,
        description: desc,
        userId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });
      setName("");
      setDesc("");
      fetchSpots();
    } catch (error) {
      console.error("Error adding spot:", error);
      alert("Failed to share spot.");
    }
  };

  return (
    <>
      <NavBar />

      <div className="study-spots-page">
        <h2>Favorite Study Spots</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Spot name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="What makes this place great?"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <button type="submit">Share Spot</button>
        </form>

        <ul>
          {spots.map((spot) => (
            <li key={spot.id}>
              <strong>{spot.name}</strong>
              <p>{spot.description}</p>
              <small>
                Posted{" "}
                {spot.createdAt?.toDate?.().toLocaleDateString() || "Unknown"}
              </small>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
}
