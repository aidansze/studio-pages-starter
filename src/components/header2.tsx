import React from "react";

export interface Header2Props {
  logo: string;
  title: string;
  links: { title: string; url: string }[];
}

export const initialProps: Header2Props = {
  logo: "https://example.com/logo.png",
  title: "Website Title",
  links: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Contact", url: "/contact" },
  ],
};

const Header2 = ({ logo, title, links }: Header2Props) => {
  return (
    <header className="py-4">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500">
        <div className="container mx-auto flex items-center justify-between pr-4">
          <div>
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </div>
          <div className="text-center">
            <h1 className="text-white text-2xl font-bold font-poppins">{title}</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-white text-base font-medium font-poppins hover:text-blue-300 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header2;