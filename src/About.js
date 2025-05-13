import Base from "./Base";

const About = () => {
  return (
    <Base>
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-base-100 p-8">
        <div className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold text-base-content mb-4">
              Contact Andrew Kemler
            </h1>
            <div className="mb-4">
              <p className="font-semibold text-base-content">Address:</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=209+HIGH+POINT+DRIVE+VICTOR+NY+14564"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-base-content hover:text-base-content"
              >
                209 HIGH POINT DRIVE STE 310
                <br />
                NEW YORK LIFE INSURANCE, VICTOR, NEW YORK 14564
              </a>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold text-base-content">Phone:</span>{" "}
                <a
                  href="tel:5856909288"
                  className="underline text-base-content hover:text-base-content"
                >
                  585-690-9288
                </a>
              </p>
              <p>
                <span className="font-semibold text-base-content">Email:</span>{" "}
                <a
                  href="mailto:abkemler@ft.newyorklife.com"
                  className="underline text-base-content hover:text-base-content"
                >
                  abkemler@ft.newyorklife.com
                </a>
              </p>
            </div>
            <div className="alert bg-base-200 text-base-content border-0 mt-4">
              Please reach out by phone or email for all inquiries.
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default About;
