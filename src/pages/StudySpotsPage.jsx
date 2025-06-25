// src/pages/StudySpotsPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function StudySpotsPage() {
  const { school } = useParams();
  const { user } = useAuth();

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // 1) Subscribe to posts for this school
  useEffect(() => {
    const postsCol = collection(db, "studySpots", school, "posts");
    const q = query(postsCol, orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setPosts(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
  }, [school]);

  // 2) Handler to create a new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !title.trim()) return;
    await addDoc(collection(db, "studySpots", school, "posts"), {
      title,
      description,
      authorUid: user.uid,
      authorName: user.displayName || "Anonymous",
      likes: [],
      createdAt: serverTimestamp(),
    });
    setTitle("");
    setDescription("");
  };

  // 3) Handler to like/unlike a post
  const toggleLike = async (post) => {
    if (!user) return;
    const postRef = doc(db, "studySpots", school, "posts", post.id);
    const hasLiked = post.likes?.includes(user.uid);
    const newLikes = hasLiked
      ? post.likes.filter((uid) => uid !== user.uid)
      : [...(post.likes || []), user.uid];

    await updateDoc(postRef, { likes: newLikes });
  };

  return (
    <div className="study-spots-page">
      <h1>Study Spots @ {school.toUpperCase()}</h1>

      {user ? (
        <form onSubmit={handleSubmit} className="new-post-form">
          <input
            type="text"
            placeholder="Spot title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Why do you love this spot?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit">Share Spot</button>
        </form>
      ) : (
        <p>
          <Link to="/login">Log in</Link> to share or like spots.
        </p>
      )}

      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p className="meta">
              — {post.authorName}{" "}
              {post.createdAt?.toDate &&
                `on ${post.createdAt.toDate().toLocaleDateString()}`}
            </p>
            <button onClick={() => toggleLike(post)} disabled={!user}>
              {post.likes?.length || 0}{" "}
              {post.likes?.includes(user?.uid) ? "Unlike" : "Like"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
