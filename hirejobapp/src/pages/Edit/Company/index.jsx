import React from "react";
import style from "./editcompany.module.css";
import assets from "../../../assets";

const EditCompany = () => {
  return (
    <div className={style.containerECompany}>
      <div className={style.containerECompanyNavBasis}>
        <div className={style.containerECompanyNav}>
          <div className={style.containerECNLogo}>
            <img src={assets.logoweb} alt="" />
          </div>
          <div className={style.containerECNButton}>
            <div className={style.ECNButtonLeft}>
              <img src={assets.logobell} alt="" />
            </div>
            <div className={style.ECNButtonCenter}>
              <img src={assets.logomail} alt="" />
            </div>
            <div className={style.ECNButtonRight}>
              <img src={assets.navprofiledef} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerECBodyBasis}>
        <div className={style.ECBFieldTop}>
          <div className={style.ECBFieldLeft}>
            <div className={style.ECBFieldLeftValue}>
              <div>
                <img
                  className={style.ECBFLVImg}
                  src={assets.navprofiledef}
                  alt=""
                />
              </div>
              <div>
                <p className={style.ECBFLVName}>Louis Tomlison</p>
              </div>
              <div>
                <p className={style.ECBFLVPos}>Web Developer</p>
              </div>
              <div className={style.ECBFLVLocation}>
                <img
                  className={style.ECBFLVLocationImg}
                  src={assets.mappin}
                  alt=""
                />
                <p className={style.ECBFLVLocationText}>Mojokerto</p>
              </div>
            </div>
            <button type="submit" className={style.ECBFieldLeftButton}>
              Save
            </button>
            <button type="button" className={style.ECBFieldLeftButton2}>
              Cancel
            </button>
          </div>
          <div className={style.ECBFieldRight}>
            <div className={style.ECBFieldRightValue}>
              <div className="pt-5">
                <p className={style.ECBFRVData}>Data Diri</p>
              </div>
              <form className={style.ECBFRVForm} action="">
                <div>
                  <label className={style.ECBFRVFormLabel} htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nama"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className={style.ECBFRVFormLabel} htmlFor="bidang">
                    Bidang
                  </label>
                  <input
                    type="text"
                    id="bidang"
                    name="bidang"
                    placeholder="Bidang"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className={style.ECBFRVFormLabel} htmlFor="provinsi">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    id="provinsi"
                    name="provinsi"
                    placeholder="Provinsi"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className={style.ECBFRVFormLabel} htmlFor="kota">
                    Kota
                  </label>
                  <input
                    type="text"
                    id="kota"
                    name="kota"
                    placeholder="Kota"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className={style.ECBFRVFormLabel} htmlFor="desc">
                    Deskripsi
                  </label>
                  <textarea
                    type="text"
                    id="desc"
                    name="desc"
                    row={5}
                    placeholder="Deskripsi"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className={style.ECBFRVFormLabel} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="mb-5">
                  <label className={style.ECBFRVFormLabel} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerECompanyFooter}>
        <div className={style.containerECFBasis}>
          <div className={style.ECFTop}>
            <img src={assets.logofooter} alt="" />
          </div>
          <div className={style.ECFCenter}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <div>
            <img src={assets.linefooter} alt="" />
          </div>
          <div className={style.ECFBottom}>
            <div className={style.ECFBLeft}>
              <p>2020 Pewworld. All right reserved</p>
            </div>
            <div className={style.ECFBRight}>
              <p>Telepon</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCompany;
