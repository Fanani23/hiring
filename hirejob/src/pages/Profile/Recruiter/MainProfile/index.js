import React from "react";
import NavbarAfterLogin from "../../../../components/navbar/navbarAfterLogin";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import iconUser from "../../../../assets/profile image.jpg";
import location from "../../../../assets/location.png";
import contactMail from "../../../../assets/kontak/mail.png";
import contactInstagram from "../../../../assets/kontak/instagram.png";
import contactPhone from "../../../../assets/kontak/phone.png";
import contactLinkedin from "../../../../assets/kontak/linkedin.png";
import Footer from "../../../../components/Footer";

const ProfilePerusahaan = () => {
  return (
    <div>
      <header>
        <NavbarAfterLogin />
      </header>

      <section>
        <div className="mainContent">
          <div
            className={
              "container my-20 rounded-xl pb-52 overflow-hidden shadow-xl mx-auto " +
              styles.bodycontainer
            }
          >
            <div className={"banner overflow-hidden " + styles.banner}>
              {/* <img src={banner} className='w-full' alt="" /> */}
            </div>
            <div className="content-user">
              <div
                className={
                  "profileimg overflow-hidden rounded-full mb-6 mx-auto " +
                  styles.wrapperProfilepict
                }
              >
                <img src={iconUser} className={styles.profilePict} alt="" />
              </div>
              <div className="content pt-6">
                <p className="text-4xl mb-3">PT. Izdihar</p>
                <p className="text-lg my-6">Financial</p>
                <div className="location my-6 flex justify-center">
                  <img src={location} className={styles.img} alt="pin" />
                  <p className="text-lg text-neutral-400 ml-3">
                    Jakarta Jakarta Barat, Indonesia
                  </p>
                </div>
                <div className="descipt w-1/2 mx-auto">
                  <p className="text-lg text-neutral-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe debitis earum assumenda libero tempore eum perferendis
                    nesciunt ut harum corporis hic nihil neque voluptatibus
                    aliquid, fugit dolorum nobis fuga asperiores.
                  </p>
                </div>
                <button
                  className={"border-2 w-64 h-12 rounded-lg " + styles.btn}
                >
                  Edit Profile
                </button>
                <div className="content-contact my-10 w-72 grid justify-start mx-auto">
                  <Link className="flex">
                    <img
                      src={contactMail}
                      alt="contact"
                      className={"mr-8 " + styles.imgContact}
                    />
                    <p className="text-lg text-neutral-400">irfan@gmail.com</p>
                  </Link>
                  <Link className="flex mt-8">
                    <img
                      src={contactInstagram}
                      alt="contact"
                      className={"mr-8 " + styles.imgContact}
                    />
                    <p className="text-lg text-neutral-400">irfan</p>
                  </Link>
                  <Link className="flex mt-8">
                    <img
                      src={contactPhone}
                      alt="contact"
                      className={"mr-8 " + styles.imgContact}
                    />
                    <p className="text-lg text-neutral-400">08123456789</p>
                  </Link>
                  <Link className="flex mt-8">
                    <img
                      src={contactLinkedin}
                      alt="contact"
                      className={"mr-8 " + styles.imgContact}
                    />
                    <p className="text-lg text-neutral-400">irfansss</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProfilePerusahaan;
