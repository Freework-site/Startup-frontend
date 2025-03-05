// app/create-post/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fundingGoal, setFundingGoal] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/pitches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include Authorization header with Firebase ID token
        Authorization: "Bearer YOUR_FIREBASE_ID_TOKEN",
      },
      body: JSON.stringify({ title, description, fundingGoal }),
    });
    if (res.ok) {
      router.push("/explore");
    } else {
      console.error("Error creating pitch");
    }
  };

  return (
    <div className="container mx-auto pt-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Create a New Pitch</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Funding Goal"
          className="border p-2 w-full"
          value={fundingGoal}
          onChange={(e) => setFundingGoal(Number(e.target.value))}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Pitch
        </button>
      </form>
    </div>
  );
}

