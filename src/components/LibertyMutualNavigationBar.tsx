import { BrowserRouter as Router, Link } from 'react-router-dom';

export interface LibertyMutualNavigationBarProps {
  /** Link to the logo*/
  logoSrc: string;
  /** Navigation links to pages */
  links: { text: string; url: string }[];
  /**Object Tooltip */
  testObject?: { /** object text tooltop */ text: string; /** object otherText tooltip */ otherText: string;}
  /** Array tooltip*/
  testArray?: { /** Array text tooltip*/ text: string }[];
  fontWeight: string;
  textColor: string;
  number?: number;

}

export const initialProps: LibertyMutualNavigationBarProps = {
    logoSrc: "https://example.com/path/to/logo.png",
    links: [
      { text: "Shop insurance", url: "/Shop" },
      { text: "Claims", url: "/Claims" },
      { text: "Customer Support", url: "/CustomerSupport" },
    ],
    fontWeight: "font-normal",
    textColor: "blue-900",
    testObject: {text: "string", otherText: "string"}
  };

const LibertyMutualNavigationBar = ({
  logoSrc,
  links,
  fontWeight,
  textColor
}: LibertyMutualNavigationBarProps) => {
  return (
    <Router>
    <div className='py-4'>
        <header className="bg-slate-50 w-3/4 mx-auto rounded-lg drop-shadow-lg">
            <div className="w-3/4">
                <nav className=" rounded-lg container mx-auto flex justify-between items-center">
                        <Link to="/" className="rounded-l-lg flex items-center bg-yellow-300">
                        <img className="h-16 w-full mr-2" src={logoSrc} alt="Logo" />
                        </Link>
                        <ul className="flex space-x-6">
                        {links.map((link, index) => (
                            <li key={index} className={index === links.length - 1 ? 'pr-2' : ''}>
                            <Link
                                to={link.url}
                                className={`text-${textColor} text-base ${fontWeight} hover:text-white`}
                            >
                                {link.text}
                            </Link>
                            </li>
                        ))}
                        </ul>
                <div className="justify-end">
                    <a>Search</a>
                </div>
                </nav>

            </div>
        </header>
    </div>
  </Router>
  );
};

export default LibertyMutualNavigationBar;