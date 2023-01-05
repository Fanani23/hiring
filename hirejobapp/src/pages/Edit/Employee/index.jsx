import React from "react";
import style from "./editemployee.module.css";
import assets from "../../../assets";

const EditEmployee = () => {
  return (
    <div className={style.containerEEmployee}>
      <div className={style.containerEEmployeeNavBasis}>
        <div className={style.containerEEmployeeNav}>
          <div className={style.containerEENLogo}>
            <img src={assets.logoweb} alt="" />
          </div>
          <div className={style.containerEENButton}>
            <div className={style.EENButtonLeft}>
              <img src={assets.logobell} alt="" />
            </div>
            <div className={style.EENButtonCenter}>
              <img src={assets.logomail} alt="" />
            </div>
            <div className={style.EENButtonRight}>
              <img src={assets.navprofiledef} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerECBodyBasis}>
        <div className={style.EEBFieldTop}>
          <div className={style.EEBFieldLeft}>
            <div className={style.EEBFieldLeftValue}>
              <div>
                <img
                  className={style.EEBFLVImg}
                  src={assets.navprofiledef}
                  alt=""
                />
              </div>
              <div>
                <p className={style.EEBFLVName}>Louis Tomlison</p>
              </div>
              <div>
                <p className={style.EEBFLVPos}>Web Developer</p>
              </div>
              <div className={style.EEBFLVLocation}>
                <img
                  className={style.EEBFLVLocationImg}
                  src={assets.mappin}
                  alt=""
                />
                <p className={style.EEBFLVLocationText}>Mojokerto</p>
              </div>
            </div>
            <button type="submit" className={style.EEBFieldLeftButton}>
              Save
            </button>
            <button type="button" className={style.EEBFieldLeftButton2}>
              Cancel
            </button>
          </div>
          <div className={style.EEBFieldRight}>
            <div className={style.EEBFieldRightValue}>
              <div className="pt-5">
                <p className={style.EEBFRVData}>Data Diri</p>
              </div>
              <form className={style.EEBFRVForm} action="">
                <div>
                  <label className={style.EEBFRVFormLabel} htmlFor="name">
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
                  <label className={style.EEBFRVFormLabel} htmlFor="jobdesk">
                    Jobdesk
                  </label>
                  <input
                    type="text"
                    id="jobdesk"
                    name="jobdesk"
                    placeholder="Jobdesk"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className={style.EEBFRVFormLabel} htmlFor="place">
                    Tempat kerja
                  </label>
                  <input
                    type="text"
                    id="place"
                    name="place"
                    placeholder="Tempat kerja"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className={style.EEBFRVFormLabel} htmlFor="domisili">
                    Domisili
                  </label>
                  <input
                    type="text"
                    id="domisili"
                    name="domisili"
                    placeholder="Domisili"
                    className="form-control"
                  />
                </div>
                <div className="mb-5">
                  <label className={style.EEBFRVFormLabel} htmlFor="desc">
                    Deskripsi
                  </label>
                  <textarea
                    type="text"
                    id="desc"
                    name="desc"
                    row={6}
                    placeholder="Deskripsi"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
            <div className={style.EEBFieldRightValue2}>
              <div className="pt-5">
                <p className={style.EEBFRVData}>Skill</p>
                <div className="pb-4">
                  <form className={style.EEBFRV2Form} action="">
                    <input
                      type="text"
                      id="skill"
                      name="skill"
                      className="form-control"
                    />
                    <button type="submit" className={style.EEBFRV2FormButton}>
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className={style.EEBFieldRightValue3}>
              <div className="pt-5">
                <p className={style.EEBFRVData}>Pengalaman Kerja</p>
              </div>
              <div className={style.containerBSFRVExp}>
                <div className={style.BSVRFExpBasis}>
                  <div className={style.BSFRVExpValue}>
                    <img
                      className={style.BSFRVExpValueImg}
                      src={assets.profileexp}
                      alt=""
                    />
                    <div className={style.BSFRVExpValueInfo}>
                      <div className="d-flex flex-row justify-content-between">
                        <p className={style.BSFRVEVIJob}>Engineer</p>
                        <div className="d-flex flex-row gap-3">
                          <button type="submit" className={style.PKButtonLeft}>
                            Edit
                          </button>
                          <button type="submit" className={style.PKButtonRight}>
                            Del
                          </button>
                        </div>
                      </div>
                      <p className={style.BSFRVEVIPlace}>Tokopedia</p>
                      <div className={style.BSFRVEVIDate}>
                        <p className={style.BSFRVEVIDateLeft}>2018</p>
                        <p className={style.BSFRVEVIDateCenter}>-</p>
                        <p className={style.BSFRVEVIDateRight}>2019</p>
                      </div>
                      <p className={style.BSFRVEVIDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum erat orci, mollis nec gravida sed, ornare
                        quis urna. Curabitur eu lacus fringilla, vestibulum
                        risus at.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <form className={style.EEBFRV3Form} action="">
                  <div>
                    <label className={style.EEBFRV3FormLabel} htmlFor="posisi">
                      Posisi
                    </label>
                    <input
                      type="text"
                      id="posisi"
                      name="posisi"
                      placeholder="Posisi"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-between gap-3">
                    <div>
                      <label
                        className={style.EEBFRV3FormLabel}
                        htmlFor="perusahaan"
                      >
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        id="perusahaan"
                        name="perusahaan"
                        placeholder="Nama perusahaan"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label className={style.EEBFRV3FormLabel} htmlFor="dari">
                        Dari
                      </label>
                      <input
                        type="text"
                        id="dari"
                        name="dari"
                        placeholder="Dari"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label
                        className={style.EEBFRV3FormLabel}
                        htmlFor="sampai"
                      >
                        Sampai
                      </label>
                      <input
                        type="text"
                        id="sampai"
                        name="sampai"
                        placeholder="Sampai"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={style.EEBFRV3FormLabel} htmlFor="desc">
                      Deskripsi singkat
                    </label>
                    <textarea
                      type="text"
                      id="desc"
                      name="desc"
                      row={6}
                      placeholder="Deskripsi"
                      className="form-control"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-warning mt-4"
                  >
                    Tambah Pengalaman Kerja
                  </button>
                </form>
              </div>
            </div>
            <div className={style.EEBFieldRightValue4}>
              <div className="pt-5">
                <p className={style.EEBFRVData}>Portofolio</p>
              </div>
              <div className="pb-4">
                <form className={style.EEBFRV4Form} action="">
                  <div>
                    <label
                      className={style.EEBFRV4FormLabel}
                      htmlFor="nama-aplikasi"
                    >
                      Nama aplikasi
                    </label>
                    <input
                      type="text"
                      id="nama-aplikasi"
                      name="nama-aplikasi"
                      placeholder="Nama aplikasi"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label
                      className={style.EEBFRV4FormLabel}
                      htmlFor="repositori"
                    >
                      Link repositori
                    </label>
                    <input
                      type="text"
                      id="repositori"
                      name="repositori"
                      placeholder="Link repositori"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex flex-row gap-4 mt-3">
                    <div className="d-flex flex-row gap-2">
                      <input
                        type="radio"
                        name="radio"
                        id="mobile"
                        className="form-check-input"
                      />
                      <label htmlFor="mobile">Aplikasi mobile</label>
                    </div>
                    <div className="d-flex flex-row gap-2">
                      <input
                        type="radio"
                        name="radio"
                        id="web"
                        className="form-check-input"
                      />
                      <label htmlFor="web">Aplikasi web</label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <input type="file" />
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-warning mt-4"
                  >
                    Tambah Portofolio
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerEEmployeeFooter}>
        <div className={style.containerEEFBasis}>
          <div className={style.EEFTop}>
            <img src={assets.logofooter} alt="" />
          </div>
          <div className={style.EEFCenter}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <div>
            <img src={assets.linefooter} alt="" />
          </div>
          <div className={style.EEFBottom}>
            <div className={style.EEFBLeft}>
              <p>2020 Pewworld. All right reserved</p>
            </div>
            <div className={style.EEFBRight}>
              <p>Telepon</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
