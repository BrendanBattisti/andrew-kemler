import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ navbarWhite, navbarButtons, navbarRef, navbarNameRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavbarButton = ({ ref, onClick, text, ariaLabel, isPrimary }) => (
    <li className="mx-2">
      <button
        ref={ref}
        onClick={onClick}
        className={`btn text-xl ${
          isPrimary ? "btn-primary text-white bold" : "btn-ghost bold"
        } rounded-full hover:bg-white/10 ${
          navbarWhite
            ? "text-black hover:text-black"
            : "text-white hover:text-white"
        }`}
        aria-label={ariaLabel}
      >
        {text} {isPrimary && <FaArrowRight className="ml-2" />}
      </button>
    </li>
  );

  return (
    <div
      className={`navbar w-full transition-colors duration-300 flex-1 flex items-center font-bold text-2xl ${
        navbarWhite
          ? "bg-white shadow text-base-content text-[#2C3E50]"
          : "text-white"
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
        className={`flex-1 flex items-center font-bold ${
          navbarWhite ? "text-[#2C3E50]" : "text-white"
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

        <div
          ref={navbarNameRef}
          className={`fancy_underline ${
            navbarWhite ? "text-[#2C3E50]" : "text-white"
          }`}
          initial={false}
          animate={false}
          exit={false}
        >
          Andrew Kemler
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1">
          {navbarButtons.map((button, index) => (
            <NavbarButton key={index} {...button} />
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex-none">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`btn btn-ghost ${
            navbarWhite ? "text-black" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <HiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-transparent z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed right-0 top-0 h-full w-64 ${
            navbarWhite ? "bg-white" : "bg-[#2C3E50]"
          } p-4 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`btn btn-ghost ${
                navbarWhite ? "text-black" : "text-white"
              }`}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <ul className="menu menu-vertical gap-4">
            {navbarButtons.map((button, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => {
                    button.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`btn w-full text-2xl text-left ${
                    button.isPrimary && !isMobileMenuOpen
                      ? "btn-primary"
                      : "btn-ghost"
                  }`}
                  aria-label={button.ariaLabel}
                >
                  {button.text}
                  {button.isPrimary && !isMobileMenuOpen && (
                    <FaArrowRight className="ml-2" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
