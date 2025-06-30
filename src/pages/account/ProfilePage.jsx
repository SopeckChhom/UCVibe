import React, { useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

export default function ProfilePage() {
  const user = auth.currentUser;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user?.displayName) {
      const [first, ...rest] = user.displayName.split(" ");
      setFirstName(first || "");
      setLastName(rest.join(" ") || "");
    }
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`.trim(),
      });
      setMessage("Name updated!");
    } catch (error) {
      console.error("Name update failed", error);
      setMessage("Error updating name.");
    }
  };

  return (
    <div>
      <h2>Edit Your Name</h2>
      <form onSubmit={handleSave}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
