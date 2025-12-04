import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    name: "About us",
    to: "#",
  },
  {
    name: "Download apps",
    to: "#",
  },
  {
    name: "Become a guide",
    to: "#",
  },
  {
    name: "Careers",
    to: "#",
  },
  {
    name: "Contact",
    to: "#",
  },
];

function Footer() {
  return (
    <footer className="bg-[#f7f7f7] py-10 sm:py-12 md:py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-2xl md:text-[1.7rem] flex  flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 border-t-1 border-[#bbb]">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo-green.png" alt="Natours app logo" className="h-12" />
        </Link>
      </div>

      <div className="flex flex-col items-center md:items-end gap-4">
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8 text-[#777]">
          {footerLinks.map((link) => (
            <Link to={link.to} className="hover:text-[#55c57a]">
              {link.name}
            </Link>
          ))}
        </ul>

        <p className="mt-4 text-center md:text-right text-[1.7rem] text[#999]">
          &copy; 2025. By Mohamad Abi Hachem.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
