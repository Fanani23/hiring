import React, { useState } from "react";
import Assets from "../../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CompanyRegister from "../../../config/redux/Actions/CompanyAction";

const RegisterCompany = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [nama_perusahaan, setNama_Perusahaan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(nama_perusahaan);
    console.log(jabatan);
    console.log(telepon);
    console.log(password);
    let data = {
      fullname,
      email,
      nama_perusahaan,
      jabatan,
      telepon,
      password,
    };
    console.log(data);
    dispatch(CompanyRegister(data, navigate));
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
            className="grid w-[20rem] mx-auto grid-cols-2 space-x-2 rounded-xl bg-slate-200 px-2 py-2"
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
                onClick={() => navigate("/register-employee")}
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
            onSubmit={handleRegister}
            id="form-register"
            className="mt-16 mr-14 flex flex-col gap-5"
          >
            <input
              type="text"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="fullname"
              placeholder="Masukkan nama panjang"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              type="email"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              placeholder="Masukan alamat email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="nama_perusahaan"
              placeholder="Masukkan nama perusahaan"
              value={nama_perusahaan}
              onChange={(e) => setNama_Perusahaan(e.target.value)}
            />
            <input
              type="text"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="jabatan"
              placeholder="Posisi di perusahaan Anda"
              value={jabatan}
              onChange={(e) => setJabatan(e.target.value)}
            />
            <input
              type="number"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="telepon"
              placeholder="Masukan No handphone"
              value={telepon}
              onChange={(e) => setTelepon(e.target.value)}
            />
            <input
              type="password"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              placeholder="Masukan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <a
            href="#"
            className="font-sans text-sm font-normal text-black w-28 h-5 text-end"
          >
            <p className="mt-6 mr-28">Lupa kata sandi?</p>
          </a>
          <button
            onClick={handleRegister}
            type="submit"
            id="form-register"
            className="shadow bg-amber-400 rounded w-9/12 py-2 px-3 mt-6  mr-14 text-white leading-tight"
          >
            Daftar
          </button>
          <p className="font-sans mx-auto mt-8 text-sm font-normal text-blaxk w-max h-5 text-center">
            Anda belum punya akun?
            <a className="text-amber-400" href="#">
              Daftar disini!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
