import { FaArrowRight } from "react-icons/fa";
const CTAButton = ({ text }) => {
  return (
    <a
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
    flex items-center
  "
      href="#contact"
    >
      <p className="text-white">{text}</p>
      <FaArrowRight className="ml-4 my-auto text-white" />
    </a>
  );
};
export default CTAButton;
