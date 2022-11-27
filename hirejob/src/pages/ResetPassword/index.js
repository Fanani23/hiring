import React from "react";
import Assets from "../../assets";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
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
          <p className="font-sans text-black text-3xl font-semibold leading-snug non-italic text-start w-64 h-10 mt-10 ml-14">
            Reset password
          </p>
          <p className="font-sans text-slate-800 text-lg font-normal leading-snug non-italic text-start w-4/5 h-10 mt-6 ml-14">
            You need to change your password to activate your account
          </p>
          <form id="form-login" className="mt-16 mr-14 flex flex-col gap-5">
            <input
              type="password"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <input
              type="password"
              className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirmation Password"
            />
          </form>
          <button className="shadow bg-amber-400 rounded w-9/12 py-2 px-3 mt-6  mr-14 text-white leading-tight ">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
