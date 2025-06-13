import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef } from "react";

const TitleHero = ({
  heroRef,
  heroSubtextRef,
  learnMoreRef,
  aboutAnchorRef,
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrollY = window.scrollY;
      const translateY = scrollY * 0.5; // Adjust this value to control parallax intensity
      contentRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <h2
        className="min-h-[100vh] relative flex items-end md:items-center overflow-hidden"
        aria-label="Hero section with introduction"
      >
        {/* Background image container */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/imgs/background2.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            transform: "scaleX(-1)",
          }}
        />

        {/* Base overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(30,41,59,0.3)" }}
        ></div>

        {/* Mobile-specific darker overlay */}
        <div className="absolute inset-0 bg-black/25 md:hidden"></div>
        
        <div className="flex h-full w-full flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col p-8 md:p-0 relative z-10 md:ml-8 gap-4 sm:gap-8">
            <div ref={heroRef} className="md:mb-10 w-full">
              <h1 className="font-bold text-white text-left w-full text-5xl md:text-8xl font-sans">
                <span className="inline-block w-full">Money Made Simple.</span>
              </h1>
            </div>
            <div ref={heroSubtextRef}>
              <p className="text-2xl text-white font-content">
                <span className="inline-block w-full">
                  Personalized financial guidance for your 20s, 30s, and beyond.
                </span>
              </p>
            </div>
            <button
              ref={learnMoreRef}
              onClick={() =>
                aboutAnchorRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white text-2xl rounded-full px-6 py-3 transition-colors duration-200 md:mt-8 flex items-center w-fit self-start"
            >
              Learn More <FaArrowRight className="ml-2 inline" />
            </button>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default TitleHero;
