import React from "react";
import NavbarAfterLogin from "../../../../components/navbar/navbarAfterLogin";
import styles from "./index.module.css";
import imgProfile from "../../../../assets/profile image.jpg";
import location from "../../../../assets/location.png";
import edit from "../../../../assets/edit.png";
import { Link } from "react-router-dom";
import Footer from "../../../../components/footer";

const EditProfilePerusahaan = () => {
  return (
    <div>
      <header>
        <NavbarAfterLogin />
      </header>

      <section>
        <div className={"py-20 " + styles.body}>
          <div className="container flex mx-auto ">
            {/* left  */}
            <div className="content w-1/4 pr-4">
              <div className="content-child">
                <div className="card border bg-white rounded-xl py-10 px-10">
                  <div
                    className={
                      "wrapperimg rounded-full mx-auto overflow-hidden mb-5 " +
                      styles.wrapperimg
                    }
                  >
                    <img
                      src={imgProfile}
                      className={styles.imgProfile}
                      alt=""
                    />
                  </div>
                  <Link className="flex justify-center mb-10">
                    <img
                      src={edit}
                      className={"mr-4 mt-1 " + styles.imgedit}
                      alt="edit"
                    />
                    <p className="text-xl text-gray-500">Edit</p>
                  </Link>
                  <div className="content">
                    <p className="text-xl font-semibold text-start mb-3">
                      Irfan Julian
                    </p>
                    <p className="text-md text-start mb-3">Web Developer</p>
                    <div className="location mb-3 flex justify-start">
                      <img
                        src={location}
                        className={"mt-1 " + styles.imgedit}
                        alt="pin"
                      />
                      <p className="text-md text-neutral-400 ml-3">
                        Bandung Jawa Barat, Indonesia
                      </p>
                    </div>
                    <p className="text-md text-start text-neutral-400">
                      Freelancer
                    </p>
                  </div>
                </div>
                <div className="wrapperButton grid">
                  <button
                    className={
                      "my-3 py-4 text-white font-semibold rounded-lg " +
                      styles.button
                    }
                  >
                    Simpan
                  </button>
                  <button className={"py-4 rounded-lg " + styles.button2}>
                    Batal
                  </button>
                </div>
              </div>
            </div>
            {/* left  */}

            {/* right */}
            <div className="content w-3/4 pl-4 mb-20">
              <div className="card rounded-lg drop-shadow-xl bg-white border py-10 px-6">
                <p className="text-2xl font-semibold text-start">
                  Data Perusahaan
                </p>
                <hr className="border-1 border-gray-400 my-6" />
                <form className="form">
                  <p className="text-md text-start text-gray-400 mb-3">
                    Nama Perusahaan
                  </p>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Masukan nama perusahaan anda..."
                    className="w-full rounded-lg py-2 px-2 border mb-8"
                  />
                  <p className="text-md text-start text-gray-400 mb-3">
                    Bidang
                  </p>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Masukan bidang perusahaan anda..."
                    className="w-full rounded-lg py-2 px-2 border mb-8"
                  />
                  <p className="text-md text-start text-gray-400 mb-3">Kota</p>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Masukan domisili anda..."
                    className="w-full rounded-lg py-2 px-2 border mb-8"
                  />
                  <p className="text-md text-start text-gray-400 mb-3">
                    Deskripsi Singkat
                  </p>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Masukan deskripsi singkat tentang anda..."
                    className="w-full rounded-lg py-20 px-2 border mb-8"
                  />
                  <p className="text-md text-start text-gray-400 mb-3">Email</p>
                  <input
                    type="email"
                    name="fullName"
                    placeholder="Masukan email anda..."
                    className="w-full rounded-lg py-2 px-2 border mb-8"
                  />
                  <p className="text-md text-start text-gray-400 mb-3">
                    Intagram
                  </p>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Masukan nama instagram anda..."
                    className="w-full rounded-lg py-2 px-2 border mb-8"
                  />
                  <p className="text-md text-start text-gray-400 mb-3">
                    Nomor Telepon
                  </p>
                  <input
                    type="number"
                    name="fullName"
                    placeholder="Masukan nomor telepon anda..."
                    className="w-full rounded-lg py-2 px-2 border mb-8"
                  />
                  <p className="text-md text-start text-gray-400 mb-3">
                    LinkedIn
                  </p>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Masukan nama linkedin anda..."
                    className="w-full rounded-lg py-2 px-2 border mb-8"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-96">
        <Footer />
      </footer>
    </div>
  );
};

export default EditProfilePerusahaan;
