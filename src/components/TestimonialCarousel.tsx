import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  customerName: string;
  title: string;
  company: string;
  backgroundImage: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  autoAdvanceInterval?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Outstanding service and support. Their IT solutions transformed our business operations completely.",
    customerName: "Sarah Johnson",
    title: "IT Director",
    company: "TechCorp Solutions",
    backgroundImage: "/testimonial-bg-1.jpg",
  },
  {
    id: 2,
    quote: "Professional, reliable, and always available when we need them. Highly recommend their services.",
    customerName: "Mike Chen",
    title: "Operations Manager",
    company: "Digital Innovations Ltd",
    backgroundImage: "/testimonial-bg-2.jpg",
  },
  {
    id: 3,
    quote: "Their expertise in document management saved us countless hours and significantly improved our workflow.",
    customerName: "Emma Davis",
    title: "CEO",
    company: "Future Systems Inc",
    backgroundImage: "/testimonial-bg-3.jpg",
  },
  {
    id: 4,
    quote: "Fourth testimonial",
    customerName: "John Smith",
    title: "Manager",
    company: "Company Four",
    backgroundImage: "/testimonial-bg-4.jpg",
  },
  {
    id: 5,
    quote: "Fifth testimonial",
    customerName: "Jane Doe",
    title: "Director",
    company: "Company Five",
    backgroundImage: "/testimonial-bg-5.jpg",
  },
];

export default function TestimonialCarousel({
  testimonials = defaultTestimonials,
  autoAdvanceInterval = 5000
}: TestimonialCarouselProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [isHovered, autoAdvanceInterval]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        position: "absolute",
        width: "1247px",
        height: "596px",
        top: "2146px",
        left: "134px",
        borderRadius: "10px",
        borderWidth: "1px",
        opacity: 0.15,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${currentTestimonial.backgroundImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div></div>
          <div></div>
        </div>

        {/* Quote Section */}
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl">
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-start">
          <div className="flex space-x-2">
            {testimonials.map((_, index: number) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-opacity duration-200 ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}