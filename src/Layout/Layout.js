import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

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
              src="/nyl-logo-1.svg"
              alt="New York Life Logo"
              className="h-8 w-8 mr-2"
              style={{ borderRadius: "4px" }}
            />
          </a>
          Andrew Kemler
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
            <li className="mx-2">
              <button
                onClick={() =>
                  productsRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-ghost"
              >
                Our Products
              </button>
            </li>
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
          className="hero min-h-[75vh]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
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
                Learn More About Us
              </button>
            </div>
          </div>
        </section>
      </div>
      <div id="about" ref={aboutRef}>
        About
      </div>
      <div id="products" ref={productsRef}>
        <h1>Products</h1>
        <p>
          Learn more about{" "}
          <a
            href="https://www.newyorklife.com/products/insurance/term-life"
            target="_blank"
            rel="noopener noreferrer"
          >
            Term Life Insurance from New York Life
          </a>
          .
        </p>
      </div>{" "}
      <div id="contact" ref={contactRef}>
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-base-100 p-8">
          <div className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200">
            <div className="card-body">
              <h1 className="card-title text-3xl font-bold text-base-content mb-4">
                Lets get started
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
                  <span className="font-semibold text-base-content">
                    Phone:
                  </span>{" "}
                  <a
                    href="tel:5856909288"
                    className="underline text-base-content hover:text-base-content"
                  >
                    585-690-9288
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-base-content">
                    Email:
                  </span>{" "}
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
      </div>
      {/* Footer */}
      <footer className="w-full bg-base-200 text-base-content text-center py-4 mt-8 border-t border-base-300 text-sm">
        <span>
          While Andrew Kemler is affiliated with New York Life, this website was
          independently commissioned and is not an official New York Life
          website.
        </span>
      </footer>
    </div>
  );
};

export default Layout;
