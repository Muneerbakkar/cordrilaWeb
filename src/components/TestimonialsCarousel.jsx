// src/TestimonialsCarousel.js
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I've been using CORDRILA Service for a while now, and I'm extremely satisfied with their prompt and efficient deliveries. Whether it's a small package or a large shipment, they always handle it with care and deliver on time. Highly recommended!",
    author: "THOMAS B",
  },
  {
    text: "I've been using CORDRILA Service for a while now, and I'm extremely satisfied with their prompt and efficient deliveries. Whether it's a small package or a large shipment, they always handle it with care and deliver on time. Highly recommended!",
    author: "KEERTHY UNNI",
  },
  {
    text: "I can't thank CORDRILA Delivery enough for their exceptional service. They go above and beyond to ensure that my packages are delivered safely and on schedule. Their friendly staff and reliable tracking system make the whole process a breeze.",
    author: "SHIHAB K MUSTHAFA",
  },
  {
    text: "CORDRILA Delivery Service has simplified my life in so many ways. Their same-day delivery option has been a game-changer for my business, and their professionalism is unmatched. I can't imagine working with anyone else.",
    author: "MAHADEV",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="flex flex-col gap-5 mx-5 lg:mx-40">
      <h1 className="text-2xl">Testimonials</h1>
      <p className="text-lg font-light">{currentTestimonial.text}</p>
      <h1 className="text-lg font-bold">{currentTestimonial.author}</h1>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`h-3 w-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-zinc-500" : "bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
