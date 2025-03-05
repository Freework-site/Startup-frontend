// app/dashboard/page.tsx
"use client";
import { useEffect, useState } from "react";

interface Investment {
  _id: string;
  amount: number;
  pitch: {
    title: string;
    description: string;
    fundingGoal: number;
    currentCollection: number;
  };
}

export default function DashboardPage() {
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/investments/dashboard", {
      headers: {
        // Include Authorization header with Firebase ID token after sign-in
        Authorization: "Bearer YOUR_FIREBASE_ID_TOKEN",
      },
    })
      .then((res) => res.json())
      .then((data) => setInvestments(data.investments))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto pt-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Investment Dashboard</h1>
      <ul>
        {investments.map((inv) => (
          <li key={inv._id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-medium">{inv.pitch.title}</h2>
            <p>Invested Amount: ${inv.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

