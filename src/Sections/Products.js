const Products = ({ productsRef }) => (
  <div
    id="products"
    ref={productsRef}
    aria-label="Products section"
    style={{
      scrollSnapAlign: "start",
      background: "#e2e8f0",
    }}
  >
    <div
      className="
            sm:w-full
            md:flex md:flex-col md:items-center md:justify-center md:min-h-[60vh] 
            md:p-8
            md:bg-[linear-gradient(90deg,_#f8fafc_0%,_#e2e8f0_100%)]
            p-0
            bg-none
            
          "
    >
      <div className="sm:w-full md:w-4/5 md:m-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-base-content">
          How I Can Help
        </h2>
        <div className=" border border-base-200 bg-base-100">
          {/* Support Area 1: Budgeting */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b border-base-200 first:rounded-t-lg">
            <div className="order-2 md:order-1 h-full flex flex-col justify-between p-8">
              <h3 className="card-title text-lg md:text-4xl font-semibold mb-2">
                Personalized Budgeting Guidance
              </h3>
              <p className="text-base md:text-lg text-base-content font-content">
                Understanding where your money goes is the first step toward{" "}
                <b>financial wellness</b>. Together, we'll create a strategy
                that supports your lifestyle — now and in the future.
              </p>
              <div></div>
            </div>
            <div className="flex justify-center order-1 md:order-2 mb-4 md:mb-0 h-[40vh] md:h-auto">
              <img
                src={process.env.PUBLIC_URL + "/imgs/budgeting.webp"}
                alt="Budgeting illustration"
                className="object-cover md:object-contain h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
          {/* Support Area 2: Retirement Planning */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b border-base-200 md:[&>*:first-child]:order-2">
            <div className="order-2 md:order-2 h-full flex flex-col justify-between p-8">
              <h3 className="card-title text-lg md:text-4xl font-semibold mb-2">
                Retirement Planning for Your Future
              </h3>
              <p className="text-base md:text-lg text-base-content font-content">
                A fulfilling retirement doesn't happen by accident. Let's put a
                plan in place today that gives you the <b>freedom</b> and{" "}
                <b>peace of mind</b> you deserve later.
              </p>
              <div></div>
            </div>
            <div className="flex justify-center order-1 md:order-1 mb-4 md:mb-0 h-[40vh] md:h-auto">
              <img
                src={process.env.PUBLIC_URL + "/imgs/retirement.webp"}
                alt="Retirement planning illustration"
                className="object-cover md:object-contain h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
          {/* Support Area 3: Life Insurance */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center last:rounded-b-lg">
            <div className="order-2 md:order-1 h-full flex flex-col justify-between p-8">
              <h3 className="card-title text-lg md:text-4xl font-semibold mb-2">
                Protecting What Matters Most
              </h3>
              <p className="text-base md:text-lg text-base-content font-content">
                Protect your loved ones while <b>growing your wealth</b>. A
                custom whole life policy from New York Life helps you invest{" "}
                <b>confidently</b> without sacrificing <b>security</b>.
              </p>
              <div className="flex justify-end">
                <a
                  href="https://www.newyorklife.com/products/life-insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary mt-4">Learn More</button>
                </a>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2 mb-4 md:mb-0 h-[40vh] md:h-auto">
              <img
                src={process.env.PUBLIC_URL + "/imgs/life-insurance.webp"}
                alt="Life insurance illustration"
                className="object-cover md:object-contain h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Products;
