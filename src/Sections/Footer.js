const Footer = () => (
  <footer
    className="w-full bg-white py-4 border-t border-base-300"
    aria-label="Site disclaimer and copyright"
    style={{
      scrollSnapAlign: "start",
    }}
  >
    <div className="w-3/5 flex flex-row justify-evenly mx-auto my-10 gap-4">
      <p className="w-2/5">
        This website was independently commissioned and approved by New York
        Life. Andrew Kemler is a financial advisor with New York Life Insurance
        Company
      </p>
      <div className="flex flex-col">
        <p>Links</p>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex flex-col">
        <p>Get in touch</p>
        <a>585-690-9288</a>
        <a>abkemler@ft.newyorklife.com</a>
      </div>
    </div>
  </footer>
);

export default Footer;
