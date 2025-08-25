import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

const Profile = () => {
  const [user, setUser] = useState(null);     // Auth user
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="max-w-md mx-auto mt-12">Loading...</div>;

  if (!user) return <div className="max-w-md mx-auto mt-12">Please log in.</div>;

  return (
    <div className="max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="bg-white shadow-md rounded p-6">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="Profile"
            className="h-20 w-20 rounded-full mb-4 mx-auto"
          />
        )}
        <p className="mb-2"><b>Name:</b> {user.displayName || "No name set"}</p>
        <p className="mb-2"><b>Email:</b> {user.email}</p>
        <p className="mb-2"><b>User ID:</b> {user.uid}</p>
        {/* Add more fields as needed (user.phoneNumber, etc.) */}
      </div>
    </div>
  );
};

export default Profile;
