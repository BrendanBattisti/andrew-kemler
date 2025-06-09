import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import Content from "./Content.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "./Sections/Navbar";
import TitleHero from "./Sections/TitleHero";
import About from "./Sections/About";
import Products from "./Products";
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
  const testimonialsBtnRef = useRef(null);

  // Products ref
  const productsRef = useRef(null);

  // Testimonials ref
  const testimonialsRef = useRef(null);

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
          testimonialsBtnRef.current,
          heroSubtextRef.current,
          learnMoreRef.current,
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
        "-=0.1"
      )
        .to(heroSubtextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          learnMoreRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.1"
        )
        .to(
          navbarSplit.chars,
          {
            opacity: 1,
            duration: 0.05,
            ease: "none",
            stagger: 0.05,
          },
          "<"
        )
        .to(
          aboutBtnRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
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
          testimonialsBtnRef.current,
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
  }, []);

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

  const navbarButtons = [
    {
      ref: aboutBtnRef,
      onClick: () =>
        aboutAnchorRef.current.scrollIntoView({ behavior: "smooth" }),
      text: "About",
      ariaLabel: "Scroll to About section",
    },
    {
      ref: howICanHelpBtnRef,
      onClick: () => productsRef.current.scrollIntoView({ behavior: "smooth" }),
      text: "How I Can Help",
      ariaLabel: "Scroll to How I Can Help section",
    },
    {
      ref: testimonialsBtnRef,
      onClick: () =>
        testimonialsRef.current.scrollIntoView({ behavior: "smooth" }),
      text: "Testimonials",
      ariaLabel: "Scroll to Testimonials section",
    },
    {
      ref: getStartedBtnRef,
      onClick: () => contactRef.current.scrollIntoView({ behavior: "smooth" }),
      text: "Get Started",
      ariaLabel: "Scroll to Get Started contact section",
      isPrimary: true,
    },
  ];

  const testimonials = (
    <div
      style={{
        scrollSnapAlign: "start",
        background: "#f8fafc",
      }}
      className="flex flex-col items-center justify-center p-8"
    >
      {/* Testimonials */}
      <div
        id="testimonials"
        ref={testimonialsRef}
        aria-label="Testimonials section"
        className="w-full max-w-4xl mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-base-content">
          Testimonials
        </h2>
        {isMobile ? (
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3500}
          >
            {Content.testimonials &&
              Content.testimonials.map((testimonial, idx) => (
                <div className="px-2" key={idx}>
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <div className="flex items-center mb-4">
                        <div className="avatar placeholder">
                          <div className="bg-neutral text-neutral-content rounded-full w-12">
                            <span className="text-xl">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold">{testimonial.author}</h3>
                        </div>
                      </div>
                      <p className="text-base italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {Content.testimonials &&
              Content.testimonials.map((testimonial, idx) => (
                <div key={idx}>
                  <div className="card bg-base-100 shadow-xl h-full">
                    <div className="card-body">
                      <div className="flex items-center mb-4">
                        <div className="avatar placeholder">
                          <div className="bg-neutral text-neutral-content rounded-full w-12">
                            <span className="text-xl">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold">{testimonial.author}</h3>
                        </div>
                      </div>
                      <p className="text-base italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );

  const contact = (
    <div>
      <div
        id="contact"
        ref={contactRef}
        aria-label="Contact section"
        className="flex flex-col items-center justify-center min-h-[70vh] w-full"
      >
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-4">
          <div
            className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200"
            aria-label="Contact information card"
          >
            <div className="card-body">
              <h1 className="card-title text-xl font-bold text-[#2C3E50] mb-4">
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
    </div>
  );

  const footer = (
    <footer
      className="w-full bg-base-200 text-base-content text-center py-4 border-t border-base-300 text-sm"
      aria-label="Site disclaimer and copyright"
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <span>
        This website was independently commissioned and approved by New York
        Life. Andrew Kemler is a financial advisor with New York Life Insurance
        Company
      </span>
    </footer>
  );

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
      <Navbar
        navbarWhite={navbarWhite}
        navbarButtons={navbarButtons}
        navbarRef={navbarRef}
        navbarNameRef={navbarNameRef}
      />
      <TitleHero
        heroRef={heroRef}
        heroSubtextRef={heroSubtextRef}
        learnMoreRef={learnMoreRef}
        aboutAnchorRef={aboutAnchorRef}
      />
      <About isMobile={isMobile} />
      <Products productsRef={productsRef} />
      {testimonials}
      {contact}
      {footer}
    </div>
  );
};

export default Layout;
