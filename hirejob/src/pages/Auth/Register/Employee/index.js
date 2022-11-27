import React, { useState } from "react";
import styles from "./Register.module.css";
import Peworld from "../../../../img/Group 978.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import EmployeeRegister from "../../../../config/redux/Actions/EmployeeAction";

const RegisterEmployee = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(telepon);
    console.log(password);
    let data = {
      fullname,
      email,
      telepon,
      password,
    };
    console.log(data);
    dispatch(EmployeeRegister(data, navigate));
  };

  return (
    <div className={styles.container}>
      <div className={styles.bgImg}>
        <img src={Peworld} className="pl-10 pt-8" alt="" />
        <h1 className="font-bold font-44px tracking-wider leading-10 text-white pt-32 px-12 text-4xl">
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </h1>
      </div>
      <div className="pl-24">
        <h1 className="font-semibold text-3xl">Halo, PewPeople</h1>
        <p className="py-2 mb-4" text-base>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus
          enim, dignissim nec mauris nec
        </p>
        <form
          onSubmit={handleRegister}
          id="register-employee"
          className={styles.form}
        >
          <p className="text-sm text-slate-400">Nama</p>
          <input
            type="text"
            className="form-control mb-3 py-2 w-full "
            name="fullname"
            placeholder="Masukkan nama panjang"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <p className="text-sm text-slate-400">Email</p>
          <input
            type="email"
            className="form-control mb-3 py-2 w-full "
            name="email"
            placeholder="Masukan alamat email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-sm text-slate-400">No handphone</p>
          <input
            type="number"
            className="form-control mb-3 py-2 w-full"
            name="telepon"
            placeholder="Masukan No handphone"
            value={telepon}
            onChange={(e) => setTelepon(e.target.value)}
          />
          <p className="text-sm text-slate-400">Kata Sandi</p>
          <input
            type="password"
            className="form-control mb-3 py-2 w-full "
            name="password"
            placeholder="Masukan kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="text-center bg-yellow-500 text-white w-full py-2 my-2 rounded font-bold text-base"
            form="register-employee"
          >
            Daftar
          </button>
        </form>
        <p className="text-center text-sm text-slate-700">
          Anda sudah punya akun?{" "}
          <a className="text-yellow-500" href="/login">
            Masuk disini
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterEmployee;
