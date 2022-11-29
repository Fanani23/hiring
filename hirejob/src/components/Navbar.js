import Assets from "../assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded light:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src={Assets.HomeLogo}
            className="h-6 mr-3 sm:h-9 fill-violet-600"
            alt="HireJob Logo"
          />
        </a>
        <div className="flex md:order-2 gap-3">
          <button
            type="button"
            className="text-violet-600 bg-white hover:bg-violet-600 hover:text-white border-2 border-violet-600 focus:ring-1 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            onClick={() => navigate("/login-company")}
          >
            Masuk
          </button>
          <button
            type="button"
            className="text-violet-600 bg-white hover:bg-violet-600 hover:text-white border-2 border-violet-600 focus:ring-1 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
            onClick={() => navigate("/register-company")}
          >
            Daftar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
