import "@fontsource/urbanist";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Footer from "./Sections/Footer";
import Services from "./Sections/Services";
import Contact from "./Sections/Contact";
import { useState, useEffect } from "react";

const Layout = () => {
  const backgroundUrlDesktop = process.env.PUBLIC_URL + "/imgs/background2.jpg";
  const backgroundUrlMobile =
    process.env.PUBLIC_URL + "/imgs/background2Mobile.jpg";
  const breakpoint = 768;

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

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
        className="bg-cover h-screen w-full z-0 fixed"
        style={{
          backgroundImage: `url(${
            isMobile ? backgroundUrlMobile : backgroundUrlDesktop
          })`,
        }}
      />
      <div className="fixed z-10 h-screen w-full bg-black bg-opacity-25 md:bg-opacity-25"></div>
      <div className="absolute z-20 w-full">
        <div className="w-full h-screen">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
