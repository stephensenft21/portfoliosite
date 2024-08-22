// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
  const loginWithFacebook = () => signInWithPopup(auth, facebookProvider);

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loginWithGoogle,
    loginWithFacebook,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
