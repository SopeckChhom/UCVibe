// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase"; // ← import the auth instance you already export

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Subscribe to auth state on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);

  // Sign up with email/password + set displayName to firstName
  function signup(email, password, firstName, lastName) {
    return createUserWithEmailAndPassword(auth, email, password).then((cred) =>
      updateProfile(cred.user, {
        displayName: firstName, // you could also do `${firstName} ${lastName}`
      })
    );
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  const value = {
    user,
    isAuthenticated: !!user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
