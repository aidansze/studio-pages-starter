export interface HeaderAllstateProps {
  companyName: string;
  links: {
    name: string;
    url: string;
  }[];
  fontSize?: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl";
  fontWeight?: "font-thin" | "font-normal" | "font-semibold" | "font-bold";
  textColor?: "text-gray-400" | "text-gray-600" | "text-gray-800";
}

export const initialProps: HeaderAllstateProps = {
  companyName: "Allstate",
  links: [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Services", url: "/services" },
  ],
  fontSize: "text-base",
  fontWeight: "font-normal",
  textColor: "text-gray-800",
};

const HeaderAllstate = ({
  companyName,
  links,
  fontSize = "text-base",
  fontWeight = "font-normal",
  textColor = "text-gray-800",
}: HeaderAllstateProps) => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <a href="/" className={`text-xl ${fontWeight} ${textColor}`}>
            {companyName}
          </a>
          <div className="flex">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`${fontSize} ${fontWeight} ${textColor} mr-4 hover:text-gray-900 transition duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderAllstate;