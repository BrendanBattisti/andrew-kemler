const Footer = () => (
  <footer
    className="w-full bg-whitebg-100 py-4 border-t border-base-300"
    aria-label="Site disclaimer and copyright"
    style={{
      scrollSnapAlign: "start",
    }}
  >
    <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-evenly mx-auto my-10 gap-4 p-6">
      <p className="w-full md:w-2/5 text-fontsecondary">
        This website was independently commissioned and approved by New York
        Life. Andrew Kemler is a financial advisor with New York Life Insurance
        Company
      </p>
      <div className="flex flex-col">
        <p>Links</p>
        <a className="text-fontsecondary" href="#about">
          About
        </a>
        <a className="text-fontsecondary" href="#services">
          Services
        </a>
        <a className="text-fontsecondary" href="#contact">
          Contact
        </a>
      </div>
      <div className="flex flex-col">
        <p>Get in touch</p>
        <a href="tel:5856909288" className="text-fontsecondary">
          585-690-9288
        </a>
        <a
          className="text-fontsecondary"
          href="mailto:abkemler@ft.newyorklife.com"
        >
          abkemler@ft.newyorklife.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
