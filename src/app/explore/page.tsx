// app/explore/page.tsx
"use client";
import { useEffect, useState } from "react";

interface Pitch {
  _id: string;
  title: string;
  description: string;
  fundingGoal: number;
  currentCollection: number;
  entrepreneur: { name: string; email: string };
}

export default function ExplorePage() {
  const [pitches, setPitches] = useState<Pitch[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pitches") // adjust URL if needed
      .then((res) => res.json())
      .then((data) => setPitches(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto pt-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Explore Pitches</h1>
      <ul>
        {pitches.map((pitch) => (
          <li key={pitch._id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-medium">{pitch.title}</h2>
            <p>{pitch.description}</p>
            <p>
              Funding: ${pitch.currentCollection} / ${pitch.fundingGoal}
            </p>
            <p>By: {pitch.entrepreneur.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

