import { useRef } from "react";
import logo from "./nyl-logo-1.svg";
import background from "./imgs/background.webp";
import andrew from "./imgs/andrew.webp";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Layout = () => {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <div
        className="navbar bg-base-100 shadow-md z-50 w-full"
        style={{
          transition: "opacity 0.2s, transform 0.2s",
          background:
            "linear-gradient(30deg, #f8fafc 0%,rgb(162, 168, 176) 100%)",
        }}
      >
        <div className="flex-1 flex items-center text-2xl font-bold">
          <a
            href="https://www.newyorklife.com/agent/abkemler"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
            aria-label="New York Life - Andrew Kemler"
          >
            <img
              src={logo}
              alt="New York Life Logo"
              className="h-8 w-8 mr-2"
              style={{ borderRadius: "4px" }}
            />
          </a>
          <span className="hidden md:inline">Andrew Kemler</span>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-2">
              <button
                onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-ghost"
              >
                About
              </button>
            </li>
            {/* <li className="mx-2">
              <button
                onClick={() =>
                  productsRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-ghost"
              >
                Our Products
              </button>
            </li> */}
            <li className="mx-2">
              <button
                onClick={() =>
                  contactRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary text-white"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <section
          className="hero min-h-[95vh]"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div
            className="hero-overlay"
            style={{ backgroundColor: "rgba(30,41,59,0.7)" }}
          ></div>
          <div className="hero-content text-center">
            <div className="max-w-xl mx-auto">
              <h1 className="mb-5 text-5xl font-bold text-gray-100">
                Secure Your Financial Future
              </h1>
              <p className="mb-5 text-lg text-gray-300">
                Empowering you with the knowledge and tools to achieve lasting
                financial security and peace of mind.
              </p>
              <button
                onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      <div
        className="hero  min-h-[95vh]"
        ref={aboutRef}
        style={{
          background:
            "linear-gradient(30deg, #f8fafc 0%,rgb(162, 168, 176) 100%)",
        }}
      >
        <div className="hero-content min-h-full">
          <div className="card shadow-xl bg-base-100 border border-base-200 min-h-[80vh]">
            <div className="card-body">
              <div className="flex flex-row">
                <div className="w-1/2 flex flex-col items-center justify-center h-full">
                  <img
                    src={andrew}
                    alt="Andrew and his dog Forest"
                    className="w-1/2 rounded-full"
                  />
                </div>
                <div className="flex flex-col w-1/2 text-base-content mb-4 justify-between h-full">
                  <h2 className="text-3xl font-bold">Who am I?</h2>

                  <p className="text-lg indent-6">
                    Hi, I'm Andrew Kemler, a financial advisor with New York
                    Life, proudly serving the Rochester, New York community.
                    Helping individuals and families build secure financial
                    futures isn't just my profession — it's something I truly
                    care about. I bring a personal, thoughtful approach to every
                    client relationship, always aiming to provide guidance with
                    integrity and clarity.
                  </p>
                  <p className="text-lg">
                    When I'm not working with clients, I'm usually spending time
                    with my fiancée, Kaylie, and our energetic corgi, Forest.
                    Whether I'm at the office or at home, I try to bring the
                    same sense of purpose and positivity to everything I do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" ref={contactRef}>
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-base-100 p-8">
          <div className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200">
            <div className="card-body">
              <h1 className="card-title text-3xl font-bold text-base-content mb-4">
                Let's get started.
              </h1>

              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <div className="h-full flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                  </div>
                  <div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=209+HIGH+POINT+DRIVE+VICTOR+NY+14564"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      209 HIGH POINT DRIVE STE 310
                      <br />
                      NEW YORK LIFE INSURANCE, VICTOR, NEW YORK 14564
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="h-full flex items-center">
                    <FaPhoneAlt className="mr-2" />
                  </div>
                  <div>
                    <a
                      href="tel:5856909288"
                      className="text-primary hover:underline"
                    >
                      585-690-9288
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="h-full flex items-center">
                    <FaEnvelope className="mr-2" />
                  </div>
                  <div>
                    <a
                      href="mailto:abkemler@ft.newyorklife.com"
                      className="text-primary hover:underline"
                    >
                      abkemler@ft.newyorklife.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="alert alert-info text-sm mt-">
                Please reach out by phone or email for all inquiries.
              </div>

              {/* <div className="mb-4">
                <p className="text-base-content flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=209+HIGH+POINT+DRIVE+VICTOR+NY+14564"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    209 HIGH POINT DRIVE STE 310
                    <br />
                    NEW YORK LIFE INSURANCE, VICTOR, NEW YORK 14564
                  </a>
                </p>

                <p className="flex items-center">
                  <FaPhoneAlt className="mr-2" />
                  <a
                    href="tel:5856909288"
                    className="text-primary hover:underline"
                  >
                    585-690-9288
                  </a>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <a
                    href="mailto:abkemler@ft.newyorklife.com"
                    className="text-primary hover:underline"
                  >
                    abkemler@ft.newyorklife.com
                  </a>
                </p>
              </div>
              <div className="alert alert-info text-sm mt-">
                Please reach out by phone or email for all inquiries.
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-base-200 text-base-content text-center py-4 mt-8 border-t border-base-300 text-sm">
        <span>
          While Andrew Kemler is affiliated with New York Life, this website was
          independently commissioned and is not an official New York Life
          website.
          <br />
          All products, trademarks, and branding referenced are the property of
          New York Life Insurance Company.
        </span>
      </footer>
    </div>
  );
};

export default Layout;
