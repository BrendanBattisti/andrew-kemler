import Content from "../Content";
const About = ({ isMobile, aboutRef }) =>
  isMobile ? (
    <div
      className="hero min-h-[100vh] bg-base-100"
      style={{
        scrollSnapAlign: "start",
      }}
      aria-label="About Andrew Kemler section"
      ref={aboutRef}
    >
      <div className="mx-auto w-4/5">
        <div className="hero-content min-h-full w-full flex flex-col justify-evenly px-2 sm:px-4">
          <img
            src={process.env.PUBLIC_URL + "/imgs/andrew.webp"}
            alt="Andrew Kemler, Financial Advisor at New York Life, with his corgi, Forrest"
            className="rounded-full object-cover h-[20vh] mb-4"
            loading="lazy"
          />
          <p className="text-xl mb-4 text-center">
            "Hi, I'm Andrew, a financial advisor with New York Life, proudly
            serving the Rochester community
          </p>
          <p className="text-xl mb-4 text-center">{Content.about_text_2}</p>
          {Content.about_text_3 && (
            <p className="text-xl mb-4 text-center">{Content.about_text_3}</p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div
      className="hero"
      style={{
        background: "#f8fafc",
        scrollSnapAlign: "start",
      }}
      aria-label="About Andrew Kemler section"
      ref={aboutRef}
    >
      <div className="hero-content min-h-full w-4/5 my-10">
        <div className="card shadow-xl bg-base-100 border border-base-200">
          <div className="card-body">
            <div className="h-4/5 m-auto">
              <div className="flex flex-row">
                <div className="w-1/2 flex items-center border-r border-gray-200">
                  <img
                    src={process.env.PUBLIC_URL + "/imgs/andrew.webp"}
                    alt="Andrew Kemler, Financial Advisor at New York Life, with his dog Forest"
                    className="m-10 rounded-box m-auto"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col w-1/2 text-base-content mb-4 h-full pl-10 justify-center">
                  <h2 className="text-3xl font-bold indent-6 mb-4 font-content">
                    {Content.about_title}
                  </h2>
                  <div className="flex flex-col justify-evenly h-4/5">
                    <p className="text-lg indent-6 mb-4 font-content">
                      {Content.about_text}
                    </p>
                    <p className="text-lg mb-4 font-content">
                      {Content.about_text_2}
                    </p>
                    <p className="text-lg mb-4 font-content">
                      {Content.about_text_3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default About;
