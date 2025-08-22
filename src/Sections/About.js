const About = () => {
  const andrewImage = process.env.PUBLIC_URL + "/imgs/andrew.webp";

  return (
    <div className="bg-white min-h-[80vh] rounded-t-2xl">
      <div className="w-full md:w-3/5 mx-auto pt-16 px-6">
        <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
          <div className="text-black px-4 h-full flex flex-col justify-evenly">
            <h4 id="about">About</h4>
            <h2 className="text-black mb-4">Who am I?</h2>
            <p className="py-2 md:py-0">
              Hi, I'm Andrew, a financial advisor with New York Life, proudly
              serving the Rochester community.
            </p>
            <p className="py-2 md:py-0">
              My mission is to help individuals and families create lasting
              financial security through thoughtful, honest guidance.
            </p>
            <p className="py-2 md:py-0">
              Outside of work, you'll find me spending time with my fiancée,
              Kaylie, and our energetic corgi, Forrest.
            </p>
          </div>
          <img src={andrewImage} className="mx-auto rounded-xl w-full"></img>
        </div>
      </div>
    </div>
  );
};
export default About;
