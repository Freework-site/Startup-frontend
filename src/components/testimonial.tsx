// components/SmoothTestimonials.jsx
"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        quote: "Because this team is incredibly smart and driven, and just amazing people.",
        name: "Shareil Nariman",
        invested: "Invested in Arrived",
        investors: "alongside 1,778 investors",
        image: "/api/placeholder/64/64"
    },
    {
        id: 2,
        quote: "I am a huge Mercury stan! All my companies use it. It is the bank built for human intuition, and y'all are just scratching the surface",
        name: "Garret McCurrach",
        invested: "Invested in Mercury",
        investors: "alongside 2,453 investors",
        image: "/api/placeholder/64/64"
    },
    {
        id: 3,
        quote: "Been using Replit for years, love the company, love the team, love the mission. LETS GOOOOO!!",
        name: "Stefan Opsal",
        invested: "Invested in Replit",
        investors: "alongside 2,589 investors",
        image: "/api/placeholder/64/64"
    },
    {
        id: 4,
        quote: "I love wine, entrepreneurship, and the great state of Tennessee!",
        name: "Chuck Morris",
        invested: "Invested in Bad Idea",
        investors: "alongside 159 investors",
        image: "/api/placeholder/64/64"
    },
    {
        id: 5,
        quote: "My WOW factor when I started writing on Substack surpassed my expectations. I believe in the mission and model of the company. Let's get it!",
        name: "Corey Lowe",
        invested: "Invested in Substack",
        investors: "alongside 6,688 investors",
        image: "/api/placeholder/64/64"
    }
];

const SmoothTestimonials = () => {
    const [duplicatedTestimonials, setDuplicatedTestimonials] = useState([]);

    useEffect(() => {
        // Duplicate the testimonials array to create continuous scrolling effect
        setDuplicatedTestimonials([...testimonials, ...testimonials]);
    }, []);

    return (
        <div className="w-full overflow-hidden my-12 relative">
            {/* Gradient fade on left edge */}
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10"></div>

            {/* Gradient fade on right edge */}
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="testimonial-slider-container">
                <div className="testimonial-slider">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="testimonial-card"
                        >
                            <p className="text-gray-800 mb-6 text-sm overflow-hidden">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center">
                                <div className="h-16 w-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-700">{testimonial.invested}</p>
                                    <p className="text-xs text-gray-500">{testimonial.investors}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for the animation */}
            <style jsx>{`
        .testimonial-slider-container {
          overflow: hidden;
          width: 100%;
          padding: 1rem 0;
        }

        .testimonial-slider {
          display: flex;
          animation: scroll 60s linear infinite;
        }

        .testimonial-card {
          flex-shrink: 0;
          width: 380px;
          padding: 1.5rem;
          margin-right: 1.5rem;
          border: 1px solid lime;
          border-radius: 0.5rem;
          background-color: white;
          height: 240px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * ${testimonials.length} - ${testimonials.length * 1.5}rem));
          }
        }

        /* Pause animation on hover */
        .testimonial-slider:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default SmoothTestimonials;