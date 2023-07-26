import { Link } from 'react-router-dom';

const AllstateNavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-blue-900 p-4">
            <Link to="/" className="flex-shrink-0">
                <img src="/path-to-your-logo.png" alt="Allstate Logo" className="h-10" />
            </Link>
            <ul className="flex gap-8 text-white">
                <li>
                    <Link to="/" className="text-lg font-semibold hover:text-yellow-400">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-lg font-semibold hover:text-yellow-400">About Us</Link>
                </li>
                <li>
                    <Link to="/services" className="text-lg font-semibold hover:text-yellow-400">Services</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-lg font-semibold hover:text-yellow-400">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AllstateNavBar;