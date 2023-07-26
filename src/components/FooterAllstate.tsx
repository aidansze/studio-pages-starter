import React from "react";

export interface FooterAllstateProps {
  companyName: string;
  slogan: string;
  links: {
    name: string;
    url: string;
  }[];
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
}

export const initialProps: FooterAllstateProps = {
  companyName: "Allstate",
  slogan: "Providing quality insurance since 1931",
  links: [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Terms of Service", url: "/terms" },
  ],
  fontSize: "text-base",
  fontWeight: "font-normal",
  textColor: "text-white",
};

const FooterAllstate = ({
  companyName,
  slogan,
  links,
  fontSize = "text-base",
  fontWeight = "font-normal",
  textColor = "text-white",
}: FooterAllstateProps) => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className={`${fontSize} ${fontWeight} ${textColor} mb-4 md:mb-0`}>
            <div className="text-xl font-semibold">{companyName}</div>
            <p className="text-sm text-gray-400">{slogan}</p>
          </div>
          <div className="flex mt-4 md:mt-0">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`text-sm text-gray-400 hover:text-white transition duration-300 ${fontSize} ${fontWeight} ${textColor} mr-4`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAllstate;