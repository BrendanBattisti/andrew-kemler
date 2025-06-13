import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ navbarWhite, navbarButtons, navbarRef, navbarNameRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavbarButton = ({ buttonRef, onClick, text, ariaLabel, isPrimary }) => (
    <li className="mx-2">
      <button
        ref={buttonRef}
        onClick={onClick}
        className={`px-4 py-2 text-xl rounded-full transition-colors duration-200 ${
          isPrimary 
            ? "bg-blue-600 text-white hover:bg-blue-700" 
            : "hover:bg-white/10"
        } ${
          navbarWhite
            ? "text-black hover:text-black"
            : "text-white hover:text-white"
        }`}
        aria-label={ariaLabel}
      >
        {text} {isPrimary && <FaArrowRight className="ml-2 inline" />}
      </button>
    </li>
  );

  return (
    <div
      className={`w-full transition-colors duration-300 flex-1 flex items-center font-bold text-2xl p-4 ${
        navbarWhite
          ? "bg-white shadow text-[#2C3E50]"
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
        >
          Andrew Kemler
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-none">
        <ul className="flex items-center px-1">
          {navbarButtons.map((button, index) => (
            <NavbarButton 
              key={index} 
              buttonRef={button.ref}
              onClick={button.onClick}
              text={button.text}
              ariaLabel={button.ariaLabel}
              isPrimary={button.isPrimary}
            />
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex-none">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 ${
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
              className={`p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 ${
                navbarWhite ? "text-black" : "text-white"
              }`}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            {navbarButtons.map((button, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => {
                    button.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-2xl text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                    button.isPrimary && !isMobileMenuOpen
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "hover:bg-white/10"
                  }`}
                  aria-label={button.ariaLabel}
                >
                  {button.text}
                  {button.isPrimary && !isMobileMenuOpen && (
                    <FaArrowRight className="ml-2 inline" />
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
