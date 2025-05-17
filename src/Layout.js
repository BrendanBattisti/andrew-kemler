import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const Layout = () => {
  // Hero refs
  const heroRef = useRef(null);
  const heroSubtextRef = useRef(null);
  const learnMoreRef = useRef(null);

  // About refs
  const aboutRef = useRef(null);
  const aboutRefMobile = useRef(null);
  const contactRef = useRef(null);
  const aboutAnchorRef = useRef(null);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let split;

    if (heroRef.current && heroSubtextRef.current) {
      // Properly initialize SplitText
      split = new SplitText(heroSubtextRef.current, {
        type: "words",
      });

      // Hero title fade-in
      gsap.from(heroRef.current, {
        delay: 0.5,
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power3.out",
      });

      // Animate each word
      gsap.from(split.words, {
        delay: 2.5,
        y: -75,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.3)",
        stagger: 0.15,
      });

      gsap.from(learnMoreRef.current, {
        delay: 6,
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power3.out",
      });
    }
    // Animate about section based on layout
    const aboutTarget = isMobile ? aboutRefMobile.current : aboutRef.current;

    //   if (aboutTarget) {
    //     gsap.from(aboutTarget, {
    //       scrollTrigger: {
    //         trigger: aboutTarget,
    //         start: "top 80%",
    //       },
    //       opacity: 0,
    //       y: 50,
    //       duration: 1,
    //       ease: "power2.out",
    //     });
    //   }

    //   // Animate contact section
    //   if (contactRef.current) {
    //     gsap.from(contactRef.current, {
    //       scrollTrigger: {
    //         trigger: contactRef.current,
    //         start: "top 85%",
    //       },
    //       opacity: 0,
    //       y: 50,
    //       duration: 1,
    //       ease: "power2.out",
    //     });
    //   }

    //   // Animate fade-up elements
    //   gsap.utils.toArray(".fade-up").forEach((el) => {
    //     gsap.from(el, {
    //       scrollTrigger: {
    //         trigger: el,
    //         start: "top 90%",
    //       },
    //       opacity: 0,
    //       y: 30,
    //       duration: 0.8,
    //       ease: "power1.out",
    //     });
    //   });
    // }, [isMobile]);

    // gsap.utils.toArray(".fade-up").forEach((el) => {
    //   gsap.from(el, {
    //     scrollTrigger: {
    //       trigger: el,
    //       start: "top 90%",
    //     },
    //     opacity: 0,
    //     y: 30,
    //     duration: 0.8,
    //     ease: "power1.out",
    //   });
  });

  // Content variables
  const title_text = "Secure Your Financial Future";
  const title_description =
    "Empowering you with the knowledge and tools to achieve lasting financial security and peace of mind.";
  const button_text = "Learn More";

  const about_title = "Meet Andrew Kemler";
  const about_text =
    "Hi, I'm Andrew, a financial advisor with New York Life, proudly serving the Rochester community. Helping individuals and families build secure financial futures isn't just my profession — it's something I truly care about. I bring a personal, thoughtful approach to every client relationship, always aiming to provide guidance with integrity and clarity.";
  const about_text_2 =
    "When I'm not working with clients, I'm usually spending time with my fiancée, Kaylie, and our energetic corgi, Forest. Whether I'm at the office or at home, I try to bring the same sense of purpose and positivity to everything I do.";

  const contact_title = "Let's get started.";
  const contact_phone = "585-690-9288";
  const contact_email = "abkemler@ft.newyorklife.com";
  const contact_address =
    "209 HIGH POINT DRIVE STE 310, VICTOR, NEW YORK 14564";

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
        className="navbar bg-base-100 shadow-md w-full md:"
        style={{
          transition: "opacity 0.2s, transform 0.2s",
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
              src={process.env.PUBLIC_URL + "/imgs/nyl-logo-1.svg"}
              alt="New York Life Logo"
              className="h-8 w-8 mr-2"
              style={{ borderRadius: "4px" }}
            />
          </a>
          <span className="hidden md:inline">Andrew Kemler</span>
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
          className="hero min-h-[95vh]"
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
          <div className="hero-content text-center">
            <div className="max-w-xl mx-auto">
              <div ref={heroRef}>
                <h1
                  className="text-5xl font-bold text-white"
                  style={{ whiteSpace: "nowrap", marginBottom: "2rem" }}
                >
                  {title_text}
                </h1>
              </div>
              <div ref={heroSubtextRef}>
                <p className="mb-8 text-lg text-gray-300 fade-up">
                  {title_description}
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
                {button_text}
              </button>
            </div>
          </div>
        </h2>
      </div>
      <div ref={aboutAnchorRef} style={{ height: 0 }}></div>
      <div
        className="hero min-h-[100vh] md:hidden bg-base-100"
        ref={aboutRefMobile}
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
              {about_title}
            </h2>
            <p className="text-xl mb-3 text-center">{about_text}</p>
            <p className="text-xl text-center">{about_text_2}</p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-[100vh] hidden md:inline"
        ref={aboutRef}
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
                        {about_title}
                      </h2>
                    </div>
                    <div>
                      <p className="text-lg indent-6">{about_text}</p>
                    </div>
                    <div>
                      <p className="text-lg">{about_text_2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                {contact_title}
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
                      {contact_address.split(",")[0]}
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
                      href={`tel:${contact_phone.replace(/[^\d]/g, "")}`}
                      className="text-primary hover:underline"
                      aria-label={`Call ${contact_phone}`}
                    >
                      {contact_phone}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <div className="h-full flex items-center">
                    <FaEnvelope className="mr-2" />
                  </div>
                  <div>
                    <a
                      href={`mailto:${contact_email}`}
                      className="text-primary hover:underline"
                      aria-label={`Send email to ${contact_email}`}
                    >
                      {contact_email}
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
