import Content from "../Content";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = ({ contactRef }) => (
  <div>
    <div
      id="contact"
      ref={contactRef}
      aria-label="Contact section"
      className="flex flex-col items-center justify-center min-h-[70vh] w-full"
    >
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-4">
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
                    href={`tel:${Content.contact_phone.replace(/[^\d]/g, "")}`}
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
            <div
              className="alert alert-info text-sm mt-4 font-content"
              aria-label="Contact instructions"
            >
              Please reach out by phone or email for all inquiries.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
