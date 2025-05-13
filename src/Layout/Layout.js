import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const Layout = () => {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  const [progress, setProgress] = useState(1);
  const [seenTop, setSeenTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const aboutTop = aboutRef.current.getBoundingClientRect().top - 25;
        const fadeDistance = 200;
        const newProgress = Math.max(0, Math.min(1, aboutTop / fadeDistance));
        setProgress(newProgress);

        if (progress == 0) {
          setSeenTop(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = progress;
  const translateY = -40 * (1 - progress);

  return (
    <div>
      <div
        className={`navbar bg-base-100 shadow-md z-50 ${
          seenTop ? "fixed top-0 left-0" : ""
        } w-full`}
        style={{
          transition: "opacity 0.2s, transform 0.2s",
          opacity,
          pointerEvents: opacity > 0.05 ? "auto" : "none",
          transform: `translateY(${translateY}px)`,
        }}
      >
        <div className="flex-1 text-2xl font-bold">Andrew Kemler</div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-2">
              <button
                onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-ghost"
              >
                About
              </button>
            </li>
            <li className="mx-2">
              <button
                onClick={() =>
                  productsRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-ghost"
              >
                Our Products
              </button>
            </li>
            <li className="mx-2">
              <button
                onClick={() =>
                  contactRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary text-white"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <section
          className="hero min-h-[75vh]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          <div
            className="hero-overlay"
            style={{ backgroundColor: "rgba(30,41,59,0.7)" }}
          ></div>
          <div className="hero-content text-center">
            <div className="max-w-xl mx-auto">
              <h1 className="mb-5 text-5xl font-bold text-gray-100">
                Secure Your Financial Future
              </h1>
              <p className="mb-5 text-lg text-gray-300">
                Empowering you with the knowledge and tools to achieve lasting
                financial security and peace of mind.
              </p>
              <button
                onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </section>
      </div>
      <div id="about" ref={aboutRef}>
        About
      </div>
      <div id="products" ref={productsRef}>
        <h1>Products</h1>
        <p>
          Learn more about{" "}
          <a
            href="https://www.newyorklife.com/products/insurance/term-life"
            target="_blank"
            rel="noopener noreferrer"
          >
            Term Life Insurance from New York Life
          </a>
          .
        </p>
      </div>{" "}
      <div id="contact" ref={contactRef}>
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-base-100 p-8">
          <div className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200">
            <div className="card-body">
              <h1 className="card-title text-3xl font-bold text-base-content mb-4">
                Lets get started
              </h1>
              <div className="mb-4">
                <p className="font-semibold text-base-content">Address:</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=209+HIGH+POINT+DRIVE+VICTOR+NY+14564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-base-content hover:text-base-content"
                >
                  209 HIGH POINT DRIVE STE 310
                  <br />
                  NEW YORK LIFE INSURANCE, VICTOR, NEW YORK 14564
                </a>
              </div>
              <div className="mb-4">
                <p>
                  <span className="font-semibold text-base-content">
                    Phone:
                  </span>{" "}
                  <a
                    href="tel:5856909288"
                    className="underline text-base-content hover:text-base-content"
                  >
                    585-690-9288
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-base-content">
                    Email:
                  </span>{" "}
                  <a
                    href="mailto:abkemler@ft.newyorklife.com"
                    className="underline text-base-content hover:text-base-content"
                  >
                    abkemler@ft.newyorklife.com
                  </a>
                </p>
              </div>
              <div className="alert bg-base-200 text-base-content border-0 mt-4">
                Please reach out by phone or email for all inquiries.
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
