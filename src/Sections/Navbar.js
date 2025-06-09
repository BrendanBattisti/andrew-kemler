import { FaArrowRight } from "react-icons/fa";

const Navbar = ({ navbarWhite, navbarButtons, navbarRef, navbarNameRef }) => {
    
  const NavbarButton = ({ ref, onClick, text, ariaLabel, isPrimary }) => (
    <li className="mx-2">
      <button
        ref={ref}
        onClick={onClick}
        className={`btn ${
          isPrimary
            ? "btn-primary text-white text-lg bold"
            : "btn-ghost text-lg bold"
        } rounded-full hover:bg-white/10 ${
          !isPrimary &&
          (navbarWhite
            ? "text-black hover:text-black"
            : "text-white hover:text-white")
        }`}
        aria-label={ariaLabel}
      >
        {text} {isPrimary && <FaArrowRight className="ml-2" />}
      </button>
    </li>
  );

  return (
    <div
      className={`navbar w-full transition-colors duration-300 flex-1 flex items-center text-2xl font-bold ${
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
        className={`flex-1 flex items-center text-2xl font-bold ${
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
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navbarButtons.map((button, index) => (
            <NavbarButton key={index} {...button} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
