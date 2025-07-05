import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  function Link(text, url) {
    return (
      <a
        className="bg-transparent hover:bg-white/10 duration-400 ease-in-out hover:transition-opacity rounded-full px-4 py-2"
        href={url}
      >
        <h3 className="text-white">{text}</h3>
      </a>
    );
  }

  function Links() {
    return (
      <div className="md:flex flex-row justify-end w-3/4 gap-6 hidden ">
        {Link("About", "#about")}
        {Link("Services", "#services")}
        <button
          className="
                    w-fit
                    px-4 py-2
                    rounded-full
                    bg-primary
                    border border-transparent

                    hover:bg-white/10
                    hover:text-primary
                    hover:border-primary
                    transition-all duration-300 ease-in-out
                    whitespace-nowrap
                    "
          href="#contact"
        >
          <h3 className="text-white">Get Started</h3>
          <FaArrowRight className="ml-4 my-auto" />
        </button>
      </div>
    );
  }

  function Logo() {
    return <h3 className="py-2 text-white">Andrew Kemler</h3>;
  }

  return (
    <div className="flex flex-row justify-between w-full md:w-3/5 md:mx-auto pt-6 md:p0 p-6 h-fit">
      <Logo />
      <Links />
    </div>
  );
};
export default Navbar;
