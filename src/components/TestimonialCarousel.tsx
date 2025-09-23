import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  backgroundImage: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentTestimonial = testimonials[currentSlide];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
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
          opacity: 1,
          zIndex: 10,
        }}
      >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: `url('${currentTestimonial?.backgroundImage || 'forest-image.jpg'}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-15" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex-1 flex items-center">
          <div
            key={currentTestimonial?.id}
            style={{
              width: "742px",
              height: "269px",
              position: "absolute",
              top: "85px",
              left: "71px",
              animation: "fadeIn 0.6s ease-in-out",
            }}
          >
            <blockquote
              className="text-white font-semibold mb-6 leading-tight"
              style={{
                fontFamily: "Inter",
                fontSize: "33px",
              }}
            >
              "{currentTestimonial?.quote}"
            </blockquote>
            <div
              className="text-white"
              style={{
                fontFamily: "Inter",
              }}
            >
              <div
                className="text-sm font-light"
                style={{ fontFamily: "IBM Plex Mono" }}
              >
                {currentTestimonial?.author}
              </div>
              <div
                className="text-sm font-light"
                style={{ fontFamily: "IBM Plex Mono" }}
              >
                {currentTestimonial?.company}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div
          style={{
            position: "absolute",
            top: "507px",
            left: "60px",
            display: "flex",
            gap: "10px",
            zIndex: 20,
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: "21px",
                height: "21px",
                borderRadius: "50%",
                border: "3px solid transparent",
                backgroundColor: currentSlide === index ? "#FFFFFF" : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#007BFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
              }}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
