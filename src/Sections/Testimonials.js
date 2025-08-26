import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check if testimonials should be shown (can be toggled in browser dev tools)
  // To show testimonials: Open dev tools (F12) and run: localStorage.setItem('showTestimonials', 'true')
  // To hide testimonials: Open dev tools (F12) and run: localStorage.setItem('showTestimonials', 'false')
  // Then refresh the page
  const showTestimonials = localStorage.getItem("showTestimonials") === "true";

  // If testimonials are disabled, don't render anything
  if (!showTestimonials) {
    return null;
  }

  // Testimonial data in JSON format
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      role: "Small Business Owner",
      company: "Johnson & Associates",
      rating: 5,
      text: "Placeholder text 1",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Small Business Owner",
      company: "Johnson & Associates",
      rating: 5,
      text: "Placeholder text 2",
    },
    {
      id: 3,
      name: "Jim Doe",
      role: "Small Business Owner",
      company: "Johnson & Associates",
      rating: 5,
      text: "Placeholder text 3",
    },
    {
      id: 4,
      name: "Jill Doe",
      role: "Small Business Owner",
      company: "Johnson & Associates",
      rating: 5,
      text: "Placeholder text 4 ",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const CustomArrow = ({ className, onClick, direction }) => (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
        direction === "prev" ? "left-4" : "right-4"
      } ${className}`}
      onClick={onClick}
    >
      {direction === "prev" ? (
        <FaChevronLeft className="text-black" />
      ) : (
        <FaChevronRight className="text-black" />
      )}
    </button>
  );

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} className="text-yellow-400 text-lg" />
    ));
  };

  return (
    <div className="w-full min-h-screen bg-whitebg pt-16 rounded-t-2xl">
      <div className="w-full md:w-3/5 mx-auto px-8 md:px-0">
        <h4 id="testimonials">Testimonials</h4>
        <h2 className="mt-6 mb-8">What My Clients Say.</h2>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Slider {...settings} className="testimonials-slider">
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white-bg rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <FaQuoteLeft className="text-4xl text-blue-500" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-4">
                      <MdOutlineAccountCircle className="w-16 h-16 text-blue-500" />
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Arrows */}
          <CustomArrow className="slick-prev" direction="prev" />
          <CustomArrow className="slick-next" direction="next" />
        </div>
      </div>

      {/* Custom CSS for slider */}
      <style jsx>{`
        .testimonials-slider .slick-dots {
          bottom: -40px;
        }
        .testimonials-slider .slick-dots li button:before {
          font-size: 12px;
          color: #d1d5db;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #3b82f6;
        }
        .testimonials-slider .slick-slide {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .testimonials-slider .slick-slide.slick-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
