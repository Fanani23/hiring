import React from "react";
import NavbarAfterLogin from "../../components/NavbarAfterLogin";
import styles from "./index.module.css";
import imgProfile from "../../assets/profile image.jpg";
import location from "../../assets/location.png";
import Footer from "../../components/Footer";

const HirePage = () => {
  return (
    <div>
      <header>
        <NavbarAfterLogin />
      </header>

      <section>
        <div className="container flex mx-auto my-10">
          {/* left  */}
          <div className="card w-1/4 rounded-xl p-6">
            <div className="card border-2 bg-white rounded-xl py-10 px-10">
              <div
                className={
                  "wrapperimg rounded-full mx-auto overflow-hidden mb-5 " +
                  styles.wrapperimg
                }
              >
                <img src={imgProfile} className={styles.imgProfile} alt="" />
              </div>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus facere veritatis dignissimos. Sapiente voluptate
                  veritatis porro labore accusamus, et qui quis harum facilis
                  iusto, mollitia cupiditate fugiat
                </p>
                <p className="text-xl font-semibold text-start mt-5 mb-3">
                  Skill
                </p>
                <div className="wrapperbtnskill grid grid-cols-3 gap-4 mt-6 mx-auto">
                  <button className={"h-12 rounded-lg " + styles.btnskill}>
                    skill 1
                  </button>
                  <button className={"h-12 rounded-lg " + styles.btnskill}>
                    skill 2
                  </button>
                  <button className={"h-12 rounded-lg " + styles.btnskill}>
                    skill 3
                  </button>
                  <button className={"h-12 rounded-lg " + styles.btnskill}>
                    skill 1
                  </button>
                  <button className={"h-12 rounded-lg " + styles.btnskill}>
                    skill 2
                  </button>
                  <button className={"h-12 rounded-lg " + styles.btnskill}>
                    skill 3
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* left  */}

          {/* right  */}
          <div className="content w-3/4 p-6">
            <p className="text-4xl font-semibold text-start mb-8">
              Hubungi Irfan Julian
            </p>
            <p className="text-2xl text-start mb-9">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo placeat soluta atque quia quidem repudiandae reiciendis
              ipsum sint beatae quibusdam, tenetur cumque maxime sed suscipit
              expedita illum, error voluptas blanditiis.
            </p>
            <form action="">
              <p className="mt-10 mb-3 text-start text-slate-400">
                Tujuan pesan ini
              </p>
              <div className="relative w-full">
                <select className="w-full text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-600 px-4 py-2">
                  <option>Project</option>
                  <option>Interview</option>
                  <option>Psikotest</option>
                  <option>Techical Test</option>
                </select>
              </div>

              <p className="mt-10 mb-3 text-start text-slate-400">
                Nama Lengkap
              </p>
              <input
                type="text"
                name="name"
                placeholder="Masukan Nama Lengkap"
                className="px-4 text-start border py-2 w-full rounded-lg"
              />

              <p className="mt-10 mb-3 text-start text-slate-400">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email anda"
                className="px-4 text-start border py-2 w-full rounded-lg"
              />

              <p className="mt-10 mb-3 text-start text-slate-400">
                No. Handphone
              </p>
              <input
                type="number"
                name="handphoe"
                placeholder="Masukan No. Handphone anda"
                className="px-4 text-start border py-2 w-full rounded-lg"
              />

              <p className="mt-10 mb-3 text-start text-slate-400">Deskripsi</p>
              <input
                type="text"
                name="deskripsi"
                placeholder="Deskripsi atau Jelaskan Lebih Detail"
                className="px-4 text-start border py-32 w-full rounded-lg"
              />

              <button className="w-full my-20 py-5 bg-yellow-500 rounded-lg text-white font-semibold">
                Hire
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HirePage;
