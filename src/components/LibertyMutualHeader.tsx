export interface LibertyMutualHeaderProps {
  logoSrc: string;
  logoAlt: string;
  aboutLink: string;
  servicesLink: string;
  contactLink: string;
  quoteButtonText: string;
  quoteButtonColor: string;
  quoteButtonBgColor: string;
  fontSize: string;
  fontWeight: string;
  textColor: string;
}

export const initialProps: LibertyMutualHeaderProps = {
    logoSrc: "path/to/logo.png",
    logoAlt: "Liberty Mutual Logo",
    aboutLink: "#about",
    servicesLink: "#services",
    contactLink: "#contact",
    quoteButtonText: "Get a Quote",
    quoteButtonColor: "white",
    quoteButtonBgColor: "blue-500",
    fontSize: "text-base",
    fontWeight: "font-normal",
    textColor: "white"
};  

const LibertyMutualHeader = ({
  logoSrc,
  logoAlt,
  aboutLink,
  servicesLink,
  contactLink,
  quoteButtonText,
  quoteButtonColor,
  quoteButtonBgColor,
  fontSize,
  fontWeight,
  textColor
}: LibertyMutualHeaderProps) => {
  return (
    <header className={`bg-${quoteButtonBgColor} py-4 text-${textColor}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href={aboutLink} className="mr-4">
            <img src={logoSrc} alt={logoAlt} className={`w-16 ${fontSize} ${fontWeight}`} />
          </a>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href={aboutLink} className={`hover:text-gray-200 ${fontSize} ${fontWeight}`}>
                  About
                </a>
              </li>
              <li>
                <a href={servicesLink} className={`hover:text-gray-200 ${fontSize} ${fontWeight}`}>
                  Services
                </a>
              </li>
              <li>
                <a href={contactLink} className={`hover:text-gray-200 ${fontSize} ${fontWeight}`}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button
            className={`bg-${quoteButtonColor} text-${quoteButtonBgColor} py-2 px-4 rounded-full ${fontSize} ${fontWeight}`}
          >
            {quoteButtonText}
          </button>
        </div>
      </div>
    </header>
  );
};

export default LibertyMutualHeader;
