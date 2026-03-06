import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

        <h1 className="text-2xl font-bold text-blue-600">
          DreamHomes
        </h1>

        <div className="flex gap-6 font-medium">

          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/" className="hover:text-blue-600">
            Properties
          </Link>

          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Navbar;