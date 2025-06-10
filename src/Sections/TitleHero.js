import { FaArrowRight } from "react-icons/fa";
import Content from "../Content";

const TitleHero = ({
  heroRef,
  heroSubtextRef,
  learnMoreRef,
  aboutAnchorRef,
}) => (
  <div
    style={{
      scrollSnapAlign: "start",
    }}
  >
    <h2
      className="hero min-h-[100vh] relative"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/imgs/background.webp"
        })`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      aria-label="Hero section with introduction"
    >
      {/* Base overlay */}
      <div
        className="hero-overlay"
        style={{ backgroundColor: "rgba(30,41,59,0.3)" }}
      ></div>

      {/* Mobile-specific darker overlay */}
      <div className="absolute inset-0 bg-black/25 md:hidden"></div>

      <div className="hero-content w-full md:w-1/2 md:ml-auto h-full md:h-1/2 flex flex-col justify-end md:justify-between p-8 md:p-0 relative z-10">
        <div className="flex flex-col gap-8 w-full">
          <div ref={heroRef} className="md:mb-10 w-full">
            <h1 className="font-bold text-white text-right md:text-center w-full text-4xl md:text-7xl font-sans break-words">
              Money Made Simple.
            </h1>
          </div>
          <div ref={heroSubtextRef}>
            <p className="text-2xl text-white font-sans font-content text-right md:text-center break-words">
              Personalized financial guidance for your 20s, 30s, and beyond.
            </p>
          </div>
        </div>
        <button
          ref={learnMoreRef}
          onClick={() =>
            aboutAnchorRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="btn btn-primary text-2xl rounded-full mt-8 sm:mt-0 sm:self-end"
        >
          {Content.button_text} <FaArrowRight className="ml-2" />
        </button>
      </div>
    </h2>
  </div>
);

export default TitleHero;
