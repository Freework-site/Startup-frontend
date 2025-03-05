// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/src/firebase/firebaseClient";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import logoImage from "@/src/assets/images/logo.png";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<"entrepreneur" | "investor">("investor");
  const router = useRouter();

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Logged in as:", result.user.displayName);
      // Optionally, call your backend API (e.g., /api/auth/register) here with result.user.getIdToken().
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <nav className="py-4 fixed top-0 w-full z-50 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Image src={logoImage} alt="Logo" width={120} height={40} />
        </Link>
        <div className="flex items-center space-x-4">
          {/* Always-visible links */}
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          {/* Conditional tabs based on role */}
          {role === "investor" && <Link href="/dashboard">Dashboard</Link>}
          {role === "entrepreneur" && <Link href="/create-post">Create Post</Link>}
          {/* Role toggle button */}
          <button
            onClick={() =>
              setRole(role === "investor" ? "entrepreneur" : "investor")
            }
            className="px-3 py-1 border rounded hover:bg-gray-100 transition"
          >
            Switch to {role === "investor" ? "Entrepreneur" : "Investor"}
          </button>
          {/* Authentication buttons */}
          {!user ? (
            <button
              onClick={handleGoogleLogin}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Sign In with Google
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

