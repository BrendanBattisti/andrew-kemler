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
      className="hero min-h-[100vh]"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/imgs/background.webp"
        })`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      aria-label="Hero section with introduction"
    >
      <div
        className="hero-overlay"
        style={{ backgroundColor: "rgba(30,41,59,0.3)" }}
      ></div>
      <div className="hero-content w-1/2 ml-auto h-1/2 flex flex-col justify-between">
        <div>
          <div ref={heroRef} className="mb-10">
            <h1 className="font-bold text-white text-center w-full text-shadow-lg text-4xl md:text-5xl">
              Money Made Simple.
            </h1>
          </div>
          <div ref={heroSubtextRef}>
            <p className="text-lg text-white text-shadow-lg">
              Personalized financial guidance for your 20s, 30s, and beyond.
            </p>
          </div>
        </div>
        <button
          ref={learnMoreRef}
          onClick={() =>
            aboutAnchorRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="btn btn-primary text-lg rounded-full"
          style={{ marginTop: "2rem", padding: "1rem 2rem" }}
        >
          {Content.button_text} <FaArrowRight className="ml-2" />
        </button>
      </div>
    </h2>
  </div>
);

export default TitleHero;
