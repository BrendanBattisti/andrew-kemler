import Content from "../Content";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const Testimonials = ({ testimonialsRef, isMobile }) => (
  <div
    style={{
      scrollSnapAlign: "start",
      background: "#f8fafc",
    }}
    className="flex flex-col items-center justify-center p-8 min-h-[70vh]"
  >
    {/* Testimonials */}
    <div
      id="testimonials"
      ref={testimonialsRef}
      aria-label="Testimonials section"
      className="w-full max-w-4xl mb-16"
    >
      <h2 className="text-3xl font-bold text-center  mb-8 text-base-content">
        Testimonials
      </h2>
      {isMobile ? (
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={false}
          swipeToSlide={true}
          touchThreshold={10}
        >
          {Content.testimonials &&
            Content.testimonials.map((testimonial, idx) => (
              <div key={idx}>
                <div className="card bg-base-100 shadow-xl h-full">
                  {/* Stars */}
                  <div className="flex justify-start p-4 text-yellow-500 pt-8 gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="card-body">
                    <p className="text-base italic font-content">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center mb-4 w-full justify-end">
                      <h3 className="font-bold font-content mt-4">
                        - {testimonial.author}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {Content.testimonials &&
            Content.testimonials.map((testimonial, idx) => (
              <div key={idx}>
                <div className="card bg-base-100 shadow-xl h-full">
                  {/* Stars */}
                  <div className="flex justify-start p-4 text-yellow-500 pt-8 gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="card-body">
                    <p className="text-base italic font-content">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center mb-4 w-full justify-end">
                      <h3 className="font-bold font-content mt-4">
                        - {testimonial.author}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  </div>
);

export default Testimonials;
