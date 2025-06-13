import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Sections/Navbar";
import TitleHero from "./Sections/TitleHero";
import About from "./Sections/About";
import Products from "./Sections/Products";
import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const Layout = () => {
  //Navbar ref
  const navbarRef = useRef(null);

  // Hero refs
  const heroRef = useRef(null);
  const heroSubtextRef = useRef(null);
  const learnMoreRef = useRef(null);

  // About refs
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

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
    gsap.registerPlugin(ScrollTrigger);

    if (heroRef.current && heroSubtextRef.current && learnMoreRef.current) {
      // Hide all elements initially
      gsap.set(heroRef.current, { opacity: 0, y: 20 });
      gsap.set(navbarNameRef.current, { opacity: 0, y: 20 });
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

      tl.to(heroRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 1,
      })
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
          }
         
        )
        .to(navbarNameRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.3")
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

  const navbarButtons = [
    {
      ref: aboutBtnRef,
      onClick: () => aboutRef.current.scrollIntoView({ behavior: "smooth" }),
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
        aboutAnchorRef={aboutRef}
      />
      <About isMobile={isMobile} aboutRef={aboutRef} />
      <Products productsRef={productsRef} />
      <Testimonials testimonialsRef={testimonialsRef} isMobile={isMobile} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
};

export default Layout;
