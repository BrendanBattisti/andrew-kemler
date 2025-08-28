const Services = () => {
  const services = [
    {
      title: "Personalized Budgeting Guidance",
      text: (
        <p>
          Understanding where your money goes is the first step toward{" "}
          <b>financial wellness</b>. Together, we'll create a strategy that
          supports your lifestyle — now and in the future.
        </p>
      ),
      image: process.env.PUBLIC_URL + "/imgs/budgeting.webp",
    },
    {
      title: "Retirement Planning for Your Future",
      text: (
        <p>
          A fulfilling retirement doesn't happen by accident. Let's put a plan
          in place today that gives you the <b>freedom</b> and{" "}
          <b>peace of mind</b> you deserve later.
        </p>
      ),
      image: process.env.PUBLIC_URL + "/imgs/retirement.webp",
    },
    {
      title: "Protecting What Matters Most",
      text: (
        <p>
          Protect your loved ones while <b>growing your wealth.</b> A custom
          whole life policy from New York Life helps you invest{" "}
          <b>confidently</b> without sacrificing <b>security.</b>
        </p>
      ),
      image: process.env.PUBLIC_URL + "/imgs/life-insurance2.webp",
    },
  ];

  const Service = ({ title, text, image, isReversed }) => (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center gap-6 bg-white-bg rounded-lg`}
    >
      <div className="md:w-1/2">
        <h3 className="pb-4">{title}</h3>
        {text}
      </div>
      <img src={image} className="md:w-1/2 rounded-xl" alt={title} />
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-whitebg-100 py-16">
      <div className="w-full md:w-3/5 mx-auto px-8 md:px-0">
        <h4 id="services">Services</h4>
        <h2 className="mt-6 mb-8">How I Can Help.</h2>

        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              text={service.text}
              image={service.image}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
