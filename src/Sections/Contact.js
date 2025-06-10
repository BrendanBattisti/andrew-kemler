import Content from "../Content";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = ({ contactRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        id="contact"
        ref={contactRef}
        aria-label="Contact section"
        className="flex flex-col items-center justify-center min-h-[70vh] w-full"
      >
        <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-6xl px-4">
          <div
            className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200"
            aria-label="Contact information card"
          >
            <div className="card-body">
              <h1 className="card-title text-xl font-bold text-[#2C3E50] mb-4">
                {Content.contact_title}
              </h1>
              <div className="flex flex-col">
                <div className="flex flex-row items-center mb-2">
                  <div className="h-full flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                  </div>
                  <div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=209+HIGH+POINT+DRIVE+VICTOR+NY+14564"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-content"
                      aria-label="View office location on Google Maps"
                    >
                      {Content.contact_address.split(",")[0]}
                      <br />
                      NEW YORK LIFE INSURANCE, VICTOR, NEW YORK 14564
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <div className="h-full flex items-center">
                    <FaPhoneAlt className="mr-2" />
                  </div>
                  <div>
                    <a
                      href={`tel:${Content.contact_phone.replace(
                        /[^\d]/g,
                        ""
                      )}`}
                      className="text-primary hover:underline font-content"
                      aria-label={`Call ${Content.contact_phone}`}
                    >
                      {Content.contact_phone}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <div className="h-full flex items-center">
                    <FaEnvelope className="mr-2" />
                  </div>
                  <div>
                    <a
                      href={`mailto:${Content.contact_email}`}
                      className="text-primary hover:underline font-content"
                      aria-label={`Send email to ${Content.contact_email}`}
                    >
                      {Content.contact_email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card w-full md:w-1/2 max-w-md shadow-xl bg-base-100 border border-base-200 p-6 flex flex-col gap-4"
            aria-label="Contact form"
          >
            <h2 className="text-xl font-bold text-[#2C3E50] mb-2">
              Send a message
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              rows={4}
              required
            />
            <button type="submit" className="btn btn-primary mt-2 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
