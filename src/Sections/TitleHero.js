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
          <div ref={heroRef} className="mb-10 transition-all duration-500">
            <h1 className="font-bold text-white text-center w-full text-4xl md:text-7xl font-sans break-words">
              Money Made Simple.
            </h1>
          </div>
          <div ref={heroSubtextRef}>
            <p className="text-2xl text-white font-sans font-content text-center break-words">
              Personalized financial guidance for your 20s, 30s, and beyond.
            </p>
          </div>
        </div>
        <button
          ref={learnMoreRef}
          onClick={() =>
            aboutAnchorRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="btn btn-primary text-2xl rounded-full"
          style={{ marginTop: "2rem" }}
        >
          {Content.button_text} <FaArrowRight className="ml-2" />
        </button>
      </div>
    </h2>
  </div>
);

export default TitleHero;
