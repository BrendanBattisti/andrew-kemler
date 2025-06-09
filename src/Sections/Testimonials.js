import Content from "../Content";
import Slider from "react-slick";

const Testimonials = ({ testimonialsRef, isMobile }) => (
  <div
    style={{
      scrollSnapAlign: "start",
      background: "#f8fafc",
    }}
    className="flex flex-col items-center justify-center p-8"
  >
    {/* Testimonials */}
    <div
      id="testimonials"
      ref={testimonialsRef}
      aria-label="Testimonials section"
      className="w-full max-w-4xl mb-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-base-content">
        Testimonials
      </h2>
      {isMobile ? (
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3500}
        >
          {Content.testimonials &&
            Content.testimonials.map((testimonial, idx) => (
              <div className="px-2" key={idx}>
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex items-center mb-4">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-12">
                          <span className="text-xl">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold">{testimonial.author}</h3>
                      </div>
                    </div>
                    <p className="text-base italic">"{testimonial.text}"</p>
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
                  <div className="card-body">
                    <div className="flex items-center mb-4">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-12">
                          <span className="text-xl">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold">{testimonial.author}</h3>
                      </div>
                    </div>
                    <p className="text-base italic">"{testimonial.text}"</p>
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
