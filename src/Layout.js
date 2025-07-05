import "@fontsource/urbanist";
import Navbar from "./Hero/Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
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

      <div className="absolute z-10 h-screen w-screen bg-black bg-opacity-25 md:bg-opacity-25"></div>
      <div className="absolute z-20 w-screen">
        <div className="w-screen h-screen">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
      </div>
    </div>
  );
};

export default Layout;
