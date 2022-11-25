import Assets from "../assets";

const NavbarLogin = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded light:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/home" className="flex items-center">
          <img
            src={Assets.HomeLogo}
            className="h-6 mr-3 sm:h-9 fill-violet-600"
            alt="HireJob Logo"
          />
        </a>
        <div className="flex md:order-2 gap-3">
          <button
            type="button"
            className="text-white bg-violet-600 hover:bg-violet-800 border-2 border-violet-600 focus:ring-1 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;