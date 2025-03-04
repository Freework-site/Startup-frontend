import Image from "next/image";

// Image Imports
import Testimonial3 from "../assets/images/avatar4.png";
import Testimonial5 from "../assets/images/avatar3.png";
import AshwinSantiago from "../assets/images/avatar5.png";
import Testimonial7 from "../assets/images/avatar2.png";
import Testimonial8 from "../assets/images/avatar.png";

export default function TestimonialSection() {
  const testimonialImages = [
    AshwinSantiago,
    Testimonial5,
    Testimonial7,
    Testimonial3,
    Testimonial8
  ];

  return (
    <div className="relative bg-white py-16 px-4 overflow-hidden">
      {/* Floating Image Grid for Desktop */}
      <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="max-w-7xl mx-auto relative h-full">
          {testimonialImages.map((img, index) => {
            // Custom positioning to create the floating effect
            const positions = [
              "top-0 left-0", "top-10 left-20", "top-5 right-0", 
              "top-20 left-10", "top-15 right-20", "bottom-10 left-0", 
              "bottom-0 right-0", "top-25 left-30", "bottom-15 left-20",
              "top-10 right-10", "bottom-20 right-15", "top-0 right-30",
              "bottom-5 left-25", "top-15 left-15", "bottom-10 right-25",
              "top-25 right-15"
            ];

            return (
              <div 
                key={index} 
                className={`absolute w-32 h-32 rounded-lg overflow-hidden shadow-lg transform-gpu transition-transform duration-300 hover:scale-105 ${positions[index]}`}
                style={{
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 10 + 2)}deg)`,
                }}
              >
                <Image 
                  src={img} 
                  alt={`Testimonial ${index + 1}`} 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-gray-600 text-lg mb-4">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Trusted by leaders 
          <br />
          from various industries
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Learn why professionals trust our solutions to complete their customer journeys.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
          Read Success Stories →
        </button>
      </div>

      {/* Mobile Image Layout */}
      <div className="md:hidden flex flex-wrap justify-center items-center mt-8 opacity-50">
        {testimonialImages.slice(0, 8).map((img, index) => (
          <div 
            key={index} 
            className="w-16 h-16 m-1 rounded-lg overflow-hidden relative"
          >
            <Image 
              src={img} 
              alt={`Testimonial ${index + 1}`} 
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}