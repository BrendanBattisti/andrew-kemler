import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Feather icons from react-icons
import CTAButton from "../Components/CTAButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function Link(text, url) {
    return (
      <a
        className="bg-transparent hover:bg-white/10 duration-300 ease-in-out rounded-full px-4 py-2"
        href={url}
        onClick={() => setIsOpen(false)} // close menu on click
      >
        <p className="text-white">{text}</p>
      </a>
    );
  }

  function Links({ mobile = false }) {
    if (mobile) {
      return (
        <div className="flex flex-col gap-4 mt-4">
          {Link("About", "#about")}
          {Link("Services", "#services")}
          <CTAButton text="Get started" />
        </div>
      );
    }

    return (
      <div className="hidden md:flex flex-row justify-end w-3/4 gap-6">
        {Link("About", "#about")}
        {Link("Services", "#services")}
        <CTAButton text="Get started" />
      </div>
    );
  }

  function Logo() {
    return <h3 className="py-2 text-white font-semibold">Andrew Kemler</h3>;
  }

  return (
    <nav className="flex flex-row justify-between w-full md:w-3/5 md:mx-auto pt-6 md:p0 p-6 h-fit">
      <Logo />

      {/* Desktop links */}
      <Links />

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 rounded-md focus:outline-none bg-transparent"
        >
          {/* Hamburger */}
          <FiMenu
            size={28}
            className={` transition-all duration-300 ${
              isOpen
                ? "opacity-0 scale-50 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
          />
          {/* Close */}
          <FiX
            size={28}
            className={`absolute transition-all duration-300 ${
              isOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 -rotate-90"
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/70 px-6 py-4 md:hidden rounded-lg shadow-lg">
          <Links mobile />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
