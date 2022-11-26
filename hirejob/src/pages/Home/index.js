import NavbarAfterLogin from "../../components/NavbarAfterLogin";
import Assets from "../../assets";

const Home = () => {
  return (
    <div className="container-xl mx-auto bg-slate-100">
      <div className="container-xl mx-auto">
        <NavbarAfterLogin />
      </div>
      <div className="container mt-8 mx-auto">
        <form action="">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
              placeholder="Search..."
              required
            />
            <div className="absolute inset-y-1 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <select
              for="default-search"
              name="default-filter"
              id="default-filter"
              className="bg-white absolute right-24 bottom-4 text-gray-900 text-sm rounded-md focus:ring-violet-500"
            >
              <option value="name">Name</option>
              <option value="skill">Skill</option>
              <option value="location">Location</option>
              <option value="freelance">Freelance</option>
              <option value="fulltime">Fulltime</option>
            </select>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-violet-700 focus:ring-2 focus:outline-none focus:ring-violet-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="w-full mt-10 bg-amber-200">
          <div className="max-w-2xl bg-white rounded-md shadow-md">
            <div className="flex flex-row">
              <img src={Assets.P} className="rounded-t-md" alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl text-start font-bold tracking-tight text-gray-900 light:text-black">
                  Louis Tomlinson
                </h5>
                <p className="mb-3 font-normal text-start text-gray-400 light:text-gray-400">
                  Web Developer
                </p>
                <p className="mb-3 font-normal text-start text-gray-400 light:text-gray-400">
                  Location
                </p>
                <p className="w-20 h-8 pt-1 rounded-md bg-amber-200 text-center text-white">
                  PHP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
