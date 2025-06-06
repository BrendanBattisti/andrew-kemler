import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Content from "./Content.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Layout = () => {
  //Navbar ref
  const navbarRef = useRef(null);

  // Hero refs
  const heroRef = useRef(null);
  const heroSubtextRef = useRef(null);
  const learnMoreRef = useRef(null);

  // About refs
  const contactRef = useRef(null);
  const aboutAnchorRef = useRef(null);

  // Navbar name ref
  const navbarNameRef = useRef(null);

  // Button refs
  const aboutBtnRef = useRef(null);
  const howICanHelpBtnRef = useRef(null);
  const getStartedBtnRef = useRef(null);

  // Products ref
  const productsRef = useRef(null);

  // Responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // New state for navbar background
  const [navbarWhite, setNavbarWhite] = useState(false);

  const scrollContainerRef = useRef(null);

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

    let titleSplit;
    let navbarSplit;

    if (heroRef.current && heroSubtextRef.current && learnMoreRef.current) {
      titleSplit = new SplitText(heroRef.current, {
        type: "chars",
      });

      navbarSplit = new SplitText(navbarNameRef.current, { type: "chars" });

      // Hide all characters and buttons initially
      gsap.set(titleSplit.chars, { opacity: 0 });
      gsap.set(navbarSplit.chars, { opacity: 0 });
      gsap.set(
        [
          aboutBtnRef.current,
          howICanHelpBtnRef.current,
          getStartedBtnRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      const tl = gsap.timeline();

      tl.to(
        titleSplit.chars,
        {
          opacity: 1,
          duration: 0.05,
          ease: "none",
          stagger: 0.04,
          delay: 1,
        },
        "-=0.5"
      )
        .from(
          learnMoreRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 2,
            ease: "power3.out",
          },
          "+=0.3"
        )
        .to(navbarSplit.chars, {
          opacity: 1,
          duration: 0.05,
          ease: "none",
          stagger: 0.05,
        })
        .to(
          aboutBtnRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "+=0.1"
        )
        .to(
          howICanHelpBtnRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          getStartedBtnRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }

    // Cleanup
    return () => {
      if (titleSplit) titleSplit.revert();
      if (navbarSplit) navbarSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !navbarRef.current || !scrollContainerRef.current)
        return;
      const heroBottom =
        heroRef.current.getBoundingClientRect().bottom -
        scrollContainerRef.current.getBoundingClientRect().top;
      setNavbarWhite(heroBottom <= 0);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Add smth to scroll to about on isMobile

  return (
    <div
      ref={scrollContainerRef}
      style={{
        scrollSnapType: "y proximity",
        overflowY: "auto",
        height: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      <div
        className={`navbar w-full transition-colors duration-300 ${
          navbarWhite ? "bg-white shadow text-base-content" : ""
        }`}
        ref={navbarRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          scrollSnapAlign: "start",
        }}
      >
        <div
          className={`flex-1 flex items-center text-2xl font-bold ${
            navbarWhite ? "text-black" : "text-white"
          }`}
        >
          <a
            href="https://www.newyorklife.com/agent/abkemler"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
            aria-label="New York Life - Andrew Kemler"
          >
            {/* <img
              src={process.env.PUBLIC_URL + "/imgs/nyl-logo.svg"}
              alt="NYL Logo"
              className="h-8 w-8 mr-2"
              style={{ borderRadius: "4px" }}
            /> */}
          </a>
          {!isMobile && (
            <div
              ref={navbarNameRef}
              className={`hidden md:inline fancy_underline ${
                navbarWhite ? "text-black" : "text-white"
              }`}
              initial={false}
              animate={false}
              exit={false}
            >
              Andrew Kemler
            </div>
          )}
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-2">
              <button
                ref={aboutBtnRef}
                onClick={() =>
                  aboutAnchorRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className={`btn btn-ghost hover:bg-white/10 ${
                  navbarWhite
                    ? "text-black hover:text-black"
                    : "text-white hover:text-white"
                }`}
                aria-label="Scroll to About section"
              >
                About
              </button>
            </li>
            <li className="mx-2">
              <button
                ref={howICanHelpBtnRef}
                onClick={() =>
                  productsRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className={`btn btn-ghost hover:bg-white/10 ${
                  navbarWhite
                    ? "text-black hover:text-black"
                    : "text-white hover:text-white"
                }`}
                aria-label="Scroll to How I Can Help section"
              >
                How I Can Help
              </button>
            </li>
            <li className="mx-2 mr-4">
              <button
                ref={getStartedBtnRef}
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
            style={{ backgroundColor: "rgba(30,41,59,0.3)" }}
          ></div>
          <div
            className="hero-content text-center w-4/5"
            style={{ marginTop: "-37vh" }}
          >
            <div className="w-full">
              <div ref={heroRef}>
                <h1
                  className="text-3xl md:text-5xl font-bold text-white w-full text-shadow-lg"
                  style={{ marginBottom: "2rem" }}
                >
                  {Content.title_text}
                </h1>
              </div>
              <div ref={heroSubtextRef}>
                <p className="text-lg text-white text-shadow-lg">
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
                alt="Andrew Kemler, Financial Advisor at New York Life, with his corgi, Forrest"
                className="rounded-full object-cover h-[20vh] mb-4"
                loading="lazy"
              />
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
                {Content.about_title}
              </h2>
              <p className="text-xl mb-4 text-center">{Content.about_text}</p>
              <p className="text-xl mb-4 text-center">{Content.about_text_2}</p>
              {Content.about_text_3 && (
                <p className="text-xl mb-4 text-center">
                  {Content.about_text_3}
                </p>
              )}
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
                    <div className="flex flex-col w-1/2 text-base-content mb-4 h-full min-h-[70vh] pl-10 justify-center">
                      <h2 className="text-3xl font-bold indent-6 mb-4">
                        {Content.about_title}
                      </h2>
                      <div className="flex flex-col justify-evenly h-4/5">
                        <p className="text-lg indent-6 mb-4">
                          {Content.about_text}
                        </p>
                        <p className="text-lg mb-4">{Content.about_text_2}</p>
                        <p className="text-lg mb-4">{Content.about_text_3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Products Section */}
      <div
        id="products"
        ref={productsRef}
        aria-label="Products section"
        style={{
          scrollSnapAlign: "start",
        }}
      >
        <div
          className="
            w-full
            md:flex md:flex-col md:items-center md:justify-center md:min-h-[60vh] 
            md:p-8
            md:bg-[linear-gradient(90deg,_#f8fafc_0%,_#e2e8f0_100%)]
            p-0
            bg-none
          "
        >
          <div className="w-full md:max-w-4xl md:m-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-base-content">
              How I Can Help
            </h2>
            <div className=" border border-base-200 bg-base-100">
              {/* Support Area 1: Budgeting */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center p-4 border-b border-base-200 first:rounded-t-lg">
                <div className="order-2 md:order-1 h-full flex flex-col justify-between p-4">
                  <h3 className="card-title text-lg md:text-2xl font-semibold mb-2">
                    Personalized Budgeting Guidance
                  </h3>
                  <p className="text-base md:text-lg text-base-content">
                    Understanding where your money goes is the first step toward{" "}
                    <b>financial wellness</b>. Together, we'll create a strategy
                    that supports your lifestyle — now and in the future.
                  </p>
                  <div></div>
                </div>
                <div className="flex justify-center order-1 md:order-2 mb-4 md:mb-0">
                  <img
                    src={process.env.PUBLIC_URL + "/imgs/budgeting.webp"}
                    alt="Budgeting illustration"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Support Area 2: Retirement Planning */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center p-4 border-b border-base-200 md:[&>*:first-child]:order-2">
                <div className="order-2 md:order-2 h-full flex flex-col justify-between p-4">
                  <h3 className="card-title text-lg md:text-2xl font-semibold mb-2">
                    Retirement Planning for Your Future
                  </h3>
                  <p className="text-base md:text-lg text-base-content">
                    A fulfilling retirement doesn't happen by accident. Let's
                    put a plan in place today that gives you the <b>freedom</b>{" "}
                    and <b>peace of mind</b> you deserve later.
                  </p>
                  <div></div>
                </div>
                <div className="flex justify-center order-1 md:order-1 mb-4 md:mb-0">
                  <img
                    src={process.env.PUBLIC_URL + "/imgs/retirement.webp"}
                    alt="Retirement planning illustration"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Support Area 3: Life Insurance */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center p-4 last:rounded-b-lg">
                <div className="order-2 md:order-1 h-full flex flex-col justify-between p-4">
                  <h3 className="card-title text-lg md:text-2xl font-semibold mb-2">
                    Protecting What Matters Most
                  </h3>
                  <p className="text-base md:text-lg text-base-content">
                    Protect your loved ones while <b>growing your wealth</b>. A
                    custom whole life policy from New York Life helps you invest{" "}
                    <b>confidently</b> without sacrificing <b>security</b>.
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="https://www.newyorklife.com/products/life-insurance"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-primary mt-4">
                        Learn More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center order-1 md:order-2 mb-4 md:mb-0">
                  <img
                    src={process.env.PUBLIC_URL + "/imgs/life-insurance.webp"}
                    alt="Life insurance illustration"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial & Contact Section (shared background) */}
      <div
        style={{
          scrollSnapAlign: "start",
          background:
            "linear-gradient(30deg, #f8fafc 0%, rgb(162, 168, 176) 100%)",
        }}
        className="flex flex-col items-center justify-center p-8"
      >
        {/* Testimonials */}
        <div
          id="testimonials"
          aria-label="Testimonials section"
          className="w-full max-w-4xl mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-base-content">
            What My Clients Say
          </h2>
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3500}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
              },
              {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
              },
            ]}
          >
            {Content.testimonials &&
              Content.testimonials.map((testimonial, idx) => (
                <div className="px-2" key={idx}>
                  <div className="bg-base-100 border border-base-200 rounded-lg shadow p-4 h-full flex flex-col justify-between">
                    <p className="text-base italic mb-2">
                      "{testimonial.text}"
                    </p>
                    <div className="text-right font-semibold text-sm">
                      – {testimonial.author}
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
        {/* Contact */}
        <div
          id="contact"
          ref={contactRef}
          aria-label="Contact section"
          className="flex flex-col items-center justify-center min-h-[100vh] w-full"
        >
          <div
            className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200"
            aria-label="Contact information card"
          >
            <div className="card-body">
              <h1 className="card-title text-xl font-bold text-base-content mb-4">
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
          This website was independently commissioned and approved by New York
          Life. Andrew Kemler is a financial advisor with New York Life
          Insurance Company
       
        </span>
      </footer>
    </div>
  );
};

export default Layout;
