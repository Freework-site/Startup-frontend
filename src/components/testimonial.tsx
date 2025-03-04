"use client";
import Image from "next/image";
import { useMemo } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Because this team is incredibly smart and driven, and just amazing people.",
    name: "Shareil Nariman",
    invested: "Invested in Arrived",
    investors: "alongside 1,778 investors",
    image: "/api/placeholder/64/64",
  },
  {
    id: 2,
    quote: "I am a huge Mercury stan! All my companies use it. It is the bank built for human intuition, and y'all are just scratching the surface.",
    name: "Garret McCurrach",
    invested: "Invested in Mercury",
    investors: "alongside 2,453 investors",
    image: "/api/placeholder/64/64",
  },
  {
    id: 3,
    quote: "Been using Replit for years, love the company, love the team, love the mission. LETS GOOOOO!!",
    name: "Stefan Opsal",
    invested: "Invested in Replit",
    investors: "alongside 2,589 investors",
    image: "/api/placeholder/64/64",
  },
  {
    id: 4,
    quote: "I love wine, entrepreneurship, and the great state of Tennessee!",
    name: "Chuck Morris",
    invested: "Invested in Bad Idea",
    investors: "alongside 159 investors",
    image: "/api/placeholder/64/64",
  },
  {
    id: 5,
    quote: "My WOW factor when I started writing on Substack surpassed my expectations. I believe in the mission and model of the company. Let's get it!",
    name: "Corey Lowe",
    invested: "Invested in Substack",
    investors: "alongside 6,688 investors",
    image: "/api/placeholder/64/64",
  },
];

export default function SmoothTestimonials() {
  // Duplicate testimonials to create an infinite scrolling effect
  const duplicatedTestimonials = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <div className="overflow-hidden py-10 bg-gray-50">
      <div className="flex gap-6 animate-scroll">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-80 p-6 bg-white shadow-lg rounded-lg">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={64}
              height={64}
              className="rounded-full mb-3"
            />
            <p className="italic text-gray-700">"{testimonial.quote}"</p>
            <h3 className="font-semibold mt-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.invested}</p>
            <p className="text-xs text-gray-400">{testimonial.investors}</p>
          </div>
        ))}
      </div>

      {/* Smooth Scrolling Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
