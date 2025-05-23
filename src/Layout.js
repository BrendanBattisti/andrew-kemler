import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Content from "./Content.json";

const Layout = () => {
  //Navbar ref
  const navbarRef = useRef(null);
  const [navbarPosition, setNavbarPosition] = useState("absolute");
  const [navbarHidden, setNavbarHidden] = useState(true);

  // Hero refs
  const heroRef = useRef(null);
  const heroSubtextRef = useRef(null);
  const learnMoreRef = useRef(null);

  // About refs

  const contactRef = useRef(null);
  const aboutAnchorRef = useRef(null);

  // Responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Responsive handler
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Initial check (in case of SSR or hydration)
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let split;

    if (
      heroRef.current &&
      heroSubtextRef.current &&
      learnMoreRef.current &&
      navbarRef.current
    ) {
      split = new SplitText(heroSubtextRef.current, {
        type: "words",
      });

      // Remove the hidden class just before animation starts
      setNavbarHidden(false);

      gsap.set(navbarRef.current, { y: -50, opacity: 0 });

      const tl = gsap.timeline();

      tl.from(heroRef.current, {
        delay: 0.5,
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power3.out",
      })
        .from(
          split.words,
          {
            y: -75,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.3)",
            stagger: 0.15,
          },
          "-=0.5"
        )
        .from(learnMoreRef.current, {
          opacity: 0,
          y: 50,
          duration: 2,
          ease: "power3.out",
        })
        .to(navbarRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          onComplete: () => setNavbarPosition("fixed"),
        });
    }

    // No need for aboutTarget anymore
  }, []);

  // Add smth to scroll to about on isMobile

  return (
    <div
      style={{
        scrollSnapType: "y proximity",
        overflowY: "auto",
        height: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      <div
        className={`navbar bg-base-100 shadow-md w-full transition-opacity transition-transform duration-200
          ${navbarHidden ? "opacity-0 -translate-y-12" : ""}
        `}
        ref={navbarRef}
        style={{
          position: navbarPosition,
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          background:
            "linear-gradient(30deg, #f8fafc 0%,rgb(214, 221, 230) 100%)",
          scrollSnapAlign: "start",
        }}
      >
        <div className="flex-1 flex items-center text-2xl font-bold">
          <a
            href="https://www.newyorklife.com/agent/abkemler"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
            aria-label="New York Life - Andrew Kemler"
          >
            <img
              src={process.env.PUBLIC_URL + "/imgs/nyl-logo.svg"}
              alt="NYL Logo"
              className="h-8 w-8 mr-2"
              style={{ borderRadius: "4px" }}
            />
          </a>
          <AnimatePresence mode="wait">
            {!isMobile && (
              <motion.span
                className="hidden md:inline"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                Andrew Kemler
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-2">
              <button
                onClick={() =>
                  aboutAnchorRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-ghost"
                aria-label="Scroll to About section"
              >
                About
              </button>
            </li>
            <li className="mx-2 mr-4">
              <button
                onClick={() =>
                  contactRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary text-white"
                aria-label="Scroll to Get Started contact section"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
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
          }}
          aria-label="Hero section with introduction"
        >
          <div
            className="hero-overlay"
            style={{ backgroundColor: "rgba(30,41,59,0.7)" }}
          ></div>
          <div className="hero-content text-center w-4/5">
            <div className="w-full">
              <div ref={heroRef}>
                <h1
                  className="text-5xl font-bold text-white w-full"
                  style={{ marginBottom: "2rem" }}
                >
                  {Content.title_text}
                </h1>
              </div>
              <div ref={heroSubtextRef}>
                <p className="text-lg text-gray-300">
                  {Content.title_description}
                </p>
              </div>
              <button
                ref={learnMoreRef}
                onClick={() =>
                  aboutAnchorRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary"
                style={{ marginTop: "2rem" }}
              >
                {Content.button_text}
              </button>
            </div>
          </div>
        </h2>
      </div>
      <div ref={aboutAnchorRef} style={{ height: 0 }}></div>
      {isMobile ? (
        <div
          className="hero min-h-[100vh] bg-base-100"
          style={{
            scrollSnapAlign: "start",
          }}
          aria-label="About Andrew Kemler section"
        >
          <div className="mx-auto w-4/5">
            <div className="hero-content min-h-full w-full flex flex-col justify-evenly px-2 sm:px-4">
              <img
                src={process.env.PUBLIC_URL + "/imgs/andrew.webp"}
                alt="Andrew Kemler, Financial Advisor at New York Life, with his dog Forest"
                className="rounded-full object-cover h-[20vh] mb-4"
                loading="lazy"
              />
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
                {Content.about_title}
              </h2>
              <p className="text-xl mb-3 text-center">{Content.about_text}</p>
              <p className="text-xl text-center">{Content.about_text_2}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="hero min-h-[100vh]"
          style={{
            background:
              "linear-gradient(30deg, #f8fafc 0%,rgb(162, 168, 176) 100%)",
            scrollSnapAlign: "start",
          }}
          aria-label="About Andrew Kemler section"
        >
          <div className="hero-content min-h-full w-full">
            <div className="card shadow-xl bg-base-100 border border-base-200">
              <div className="card-body">
                <div className="h-4/5 m-auto">
                  <div className="flex flex-row">
                    <div className="w-1/2 flex items-center border-r border-gray-200">
                      <img
                        src={process.env.PUBLIC_URL + "/imgs/andrew.webp"}
                        alt="Andrew Kemler, Financial Advisor at New York Life, with his dog Forest"
                        className="m-10 rounded-box m-auto"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col w-1/2 text-base-content mb-4 justify-evenly h-full min-h-[70vh] pl-10">
                      <div>
                        <h2 className="text-3xl font-bold mb-4 indent-6">
                          {Content.about_title}
                        </h2>
                      </div>
                      <div>
                        <p className="text-lg indent-6">{Content.about_text}</p>
                      </div>
                      <div>
                        <p className="text-lg">{Content.about_text_2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        id="contact"
        ref={contactRef}
        aria-label="Contact section"
        style={{
          scrollSnapAlign: "start",
        }}
      >
        <div
          className="flex flex-col items-center justify-center min-h-[100vh] p-8"
          style={{
            background:
              "linear-gradient(30deg, #f8fafc 0%, rgb(162, 168, 176) 100%)",
          }}
        >
          <div
            className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200"
            aria-label="Contact information card"
          >
            <div className="card-body">
              <h1 className="card-title text-3xl font-bold text-base-content mb-4">
                {Content.contact_title}
              </h1>
              <div className="flex flex-col">
                <div className="flex flex-row items-center mb-2">
                  <div className="h-full flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                  </div>
                  <div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=209+HIGH+POINT+DRIVE+VICTOR+NY+14564"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                      aria-label="View office location on Google Maps"
                    >
                      {Content.contact_address.split(",")[0]}
                      <br />
                      NEW YORK LIFE INSURANCE, VICTOR, NEW YORK 14564
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <div className="h-full flex items-center">
                    <FaPhoneAlt className="mr-2" />
                  </div>
                  <div>
                    <a
                      href={`tel:${Content.contact_phone.replace(
                        /[^\d]/g,
                        ""
                      )}`}
                      className="text-primary hover:underline"
                      aria-label={`Call ${Content.contact_phone}`}
                    >
                      {Content.contact_phone}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <div className="h-full flex items-center">
                    <FaEnvelope className="mr-2" />
                  </div>
                  <div>
                    <a
                      href={`mailto:${Content.contact_email}`}
                      className="text-primary hover:underline"
                      aria-label={`Send email to ${Content.contact_email}`}
                    >
                      {Content.contact_email}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="alert alert-info text-sm mt-4"
                aria-label="Contact instructions"
              >
                Please reach out by phone or email for all inquiries.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer
        className="w-full bg-base-200 text-base-content text-center py-4 border-t border-base-300 text-sm"
        aria-label="Site disclaimer and copyright"
        style={{
          scrollSnapAlign: "start",
        }}
      >
        <span>
          While Andrew Kemler is affiliated with New York Life, this website was
          independently commissioned and is not an official New York Life
          website.
          <br />
          All products, trademarks, and branding referenced are the property of
          New York Life Insurance Company.
        </span>
      </footer>
    </div>
  );
};

export default Layout;
