import React, { useState } from "react";
import Assets from "../../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CompanyLogin from "../../../config/redux/Actions/Login/Company";

const LoginCompany = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlerLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(CompanyLogin(data, navigate));
  };

  return (
    <div className="container-xl mx-auto bg-slate-200 pt-10 pb-10">
      <div className="container flex flex-row mx-auto">
        <div className="basis-2/4">
          <div
            className="w-full h-screen bg-auto bg-no-repeat "
            style={{
              backgroundImage: `url(${Assets.LoginBg})`,
            }}
          ></div>
        </div>
        <div className="basis-2/4">
          <div
            className="grid w-[20rem] mx-auto mt-20 grid-cols-2 space-x-2 rounded-xl bg-slate-200 px-2 py-2"
            x-data="app"
          >
            <div>
              <input
                type="radio"
                name="option"
                id="company"
                className="peer hidden"
                checked
              />
              <label
                for="company"
                className="block cursor-pointer select-none rounded-xl px-2 py-2 text-center peer-checked:bg-amber-300 peer-checked:font-bold peer-checked:text-white"
              >
                Company
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="option"
                id="employee"
                className="peer hidden"
                onClick={() => navigate("/login-employee")}
              />
              <label
                for="employee"
                className="block cursor-pointer select-none rounded-xl px-2 py-2 text-center peer-checked:bg-amber-300 peer-checked:font-bold peer-checked:text-white"
              >
                Employee
              </label>
            </div>
          </div>
          <p className="font-sans text-black text-3xl font-semibold leading-snug non-italic text-start w-64 h-10 mt-10 ml-14">
            Halo, Pewpeople
          </p>
          <p className="font-sans text-slate-800 text-lg font-normal leading-snug non-italic text-start w-4/5 h-10 mt-6 ml-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <form
            onSubmit={handlerLogin}
            id="form-login"
            className="mt-16 mr-14 flex flex-col gap-5"
          >
            <input
              type="email"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <a
            href="/request-reset"
            className="font-sans text-sm font-normal text-black w-28 h-5 text-end"
          >
            <p className="mt-6 mr-28">Lupa kata sandi?</p>
          </a>
          <button
            onClick={handlerLogin}
            type="submit"
            form="form-login"
            className="shadow bg-amber-400 rounded w-9/12 py-2 px-3 mt-6  mr-14 text-white leading-tight "
          >
            Masuk
          </button>
          <p className="font-sans mx-auto mt-8 text-sm font-normal text-blaxk w-max h-5 text-center">
            Anda belum punya akun?
            <a href="/register-company" className="text-amber-400">
              Daftar disini!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCompany;
