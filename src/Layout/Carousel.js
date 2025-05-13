import React, { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    caption: "Financial peace of mind, made simple.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    caption: "Guidance for every step of your journey.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=800&q=80",
    caption: "Your goals, our expertise.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 900,
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: 12,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={slides[current].image}
        alt={slides[current].caption}
        style={{
          width: "100%",
          height: 400,
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0,0,0,0.4)",
          color: "#fff",
          padding: "1rem",
          fontSize: "1.25rem",
          textAlign: "center",
        }}
      >
        {slides[current].caption}
      </div>
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: 12,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 36,
          height: 36,
          fontSize: 20,
          cursor: "pointer",
        }}
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: 12,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 36,
          height: 36,
          fontSize: 20,
          cursor: "pointer",
        }}
        aria-label="Next slide"
      >
        &#8594;
      </button>
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: idx === current ? "#fff" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
