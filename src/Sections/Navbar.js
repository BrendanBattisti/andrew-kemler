import CTAButton from "../Components/CTAButton";

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
        <CTAButton text="Get started" />
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
