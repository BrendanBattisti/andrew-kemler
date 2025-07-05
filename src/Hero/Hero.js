import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col justify-startw-full h-full md:w-3/5 mx-auto p-6 md:p-6 pb-32 md:pb-0">
      <h1 className="mb-4 md:mt-10 w-4/5">Money Made Simple.</h1>
      <p className="text-white md:mt-10 mb-4 md:w-2/5 w-3/5">
        Personalized financial guidance for your 20s, 30s, and beyond.
      </p>
      <button className="w-fit md:mb-32 mb-4 mt-4">
        Learn More
        <FaArrowRight className="ml-4 my-auto" />
      </button>
    </div>
  );
};

export default Hero;
