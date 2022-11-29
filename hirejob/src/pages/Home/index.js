import NavbarAfterLogin from "../../components/NavbarAfterLogin";
import Assets from "../../assets";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FooterHome from "../../components/FooterHome";

const Home = () => {
  // Handler data
  const [data, setData] = useState([]);
  // Handler filter
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("fullname");
  const [sortOrder, setSortOrder] = useState("asc");
  const [limit, setLimit] = useState("6");
  const [page, setPage] = useState("1");
  const [pagination, setPagination] = useState({});
  // Handler navigate
  const navigate = useNavigate();

  const getData = async (url) => {
    let token = localStorage.getItem("token");
    console.log("My token", token);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let url = `https://2ddc-182-1-66-90.ap.ngrok.io/company`;
    if (sortBy !== "fullname") {
      url = `${url}?sortBy=${sortBy}`;
    } else {
      url = `${url}?sortBy=fullname`;
    }
    if (limit !== "6") {
      url = `${url}&limit=${limit}`;
    } else {
      url = `${url}&limit=6`;
    }
    if (search !== "") {
      url = `${url}&search=${search}`;
    }
    if (page !== "1") {
      url = `${url}&page=${page}`;
    }
    url = `${url}&sortOrder=asc`;
    getData(url);
  }, [search, sortBy, sortOrder, limit, page]);
  useEffect(() => {
    getData();
  }, []);

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
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
              name="sortBy"
              id="sortBy"
              className="bg-white absolute right-24 bottom-4 text-gray-900 text-sm rounded-md focus:ring-violet-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="fullname">Nama</option>
              <option value="skill">Skill</option>
              <option value="domisili">Domisili</option>
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
        <section>
          <div className="w-full mt-10 mb-10 flex flex-wrap gap-20 bg-amber-200">
            {data ? (
              data.map((item) => (
                <div className="w-5/12 mx-auto bg-white rounded-md shadow-md">
                  <div className="flex flex-row">
                    <img src={Assets.P} className="rounded-t-md" alt="" />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl text-start font-bold tracking-tight text-gray-900 light:text-black">
                        {item.fullname}
                      </h5>
                      <p className="mb-3 font-normal text-start text-gray-400 light:text-gray-400">
                        {item.jobdesk}
                      </p>
                      <p className="mb-3 font-normal text-start text-gray-400 light:text-gray-400">
                        {item.domisili}
                      </p>
                      <p className="w-20 h-8 pt-1 rounded-md bg-amber-200 text-center text-white">
                        PHP
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-gray-200 text-gray-500 p-2 flex items-center justify-center animate-pulse flex-auto">
                Loading ges... jangan brutal. Kasian server konsumsi energi
                listrik hasil batu bara. #SaveEarth #GoGreen
              </div>
            )}
          </div>
        </section>
        <div className="flex mt-10 mb-10 flex-row gap-10">
          <select
            for="default-limit"
            name="limit"
            id="limit"
            className="bg-white mx-auto text-gray-900 text-sm rounded-md focus:ring-violet-500"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="6">Limit by 6</option>
            <option value="4">Limit by 4</option>
            <option value="2">Limit by 2</option>
            <option value="8">Limit by 8</option>
            <option value="10">Limit by 10</option>
          </select>
          <select
            for="default-page"
            name="page"
            id="page"
            className="bg-white mx-auto text-gray-900 text-sm rounded-md focus:ring-violet-500"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          >
            <option value="1">Page 1</option>
            <option value="2">Page 2</option>
            <option value="3">Page 3</option>
            <option value="4">Page 4</option>
            <option value="5">Page 5</option>
          </select>
        </div>
      </div>
      <div>
        <FooterHome />
      </div>
    </div>
  );
};

export default Home;
