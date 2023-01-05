import React from "react";
import style from "./hire.module.css";
import assets from "../../assets";

const Hire = () => {
  return (
    <div className={style.containerHire}>
      <div className={style.containerHireNavBasis}>
        <div className={style.containerHireNav}>
          <div className={style.containerHireNLogo}>
            <img src={assets.logoweb} alt="" />
          </div>
          <div className={style.containerHireNButton}>
            <div className={style.HireNButtonLeft}>
              <img src={assets.logobell} alt="" />
            </div>
            <div className={style.HireNButtonCenter}>
              <img src={assets.logomail} alt="" />
            </div>
            <div className={style.HireNButtonRight}>
              <img src={assets.navprofiledef} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerHireBody}>
        <div className={style.HireBLeft}>
          <div className={style.HireBLeftValue}>
            <div>
              <img
                className={style.HireBLVImg}
                src={assets.navprofiledef}
                alt=""
              />
            </div>
            <div>
              <p className={style.HireBLVName}>Louis Tomlison</p>
            </div>
            <div>
              <p className={style.HireBLVPos}>Web Developer</p>
            </div>
            <div className={style.HireBLVLocation}>
              <img
                className={style.HireBLVLocationImg}
                src={assets.mappin}
                alt=""
              />
              <p className={style.HireBLVLocationText}>Mojokerto</p>
            </div>
            <div>
              <p className={style.HireBLVJob}>Freelancer</p>
            </div>
            <div className={style.HireBLVDesc}>
              <p className={style.HireBLVDescValue}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
            </div>
            <div>
              <p className={style.HireBLVSkill}>Skill</p>
            </div>
            <div className={style.HireBLVSkillBasis}>
              <div className={style.HireBLVSkillValue}>PHP</div>
              <div className={style.HireBLVSkillValue}>Java</div>
              <div className={style.HireBLVSkillValue}>HTML</div>
              <div className={style.HireBLVSkillValue}>ReactJS</div>
              <div className={style.HireBLVSkillValue}>ExpressJS</div>
              <div className={style.HireBLVSkillValue}>Kotlin</div>
            </div>
          </div>
        </div>
        <div className={style.HireBRight}>
          <div className={style.HireBRightValue}>
            <p className={style.HireBRVName}>Hubungi Louis Tomlison</p>
            <p className={style.HireBRVDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <form className={style.HireBRVForm} action="">
              <div>
                <label className={style.HireBRVFormLabel} htmlFor="position">
                  Untuk Posisi
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Position"
                  className="form-control"
                />
              </div>
              <div>
                <label
                  className={style.HireBRVFormLabel}
                  htmlFor="desccription"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  rows={6}
                  placeholder="Description"
                  className="form-control"
                />
              </div>
              <button type="submit" className={style.HireBRVFormButton}>
                Hire
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={style.containerHireFooter}>
        <div className={style.containerHireFBasis}>
          <div className={style.HireFTop}>
            <img src={assets.logofooter} alt="" />
          </div>
          <div className={style.HireFCenter}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <div>
            <img src={assets.linefooter} alt="" />
          </div>
          <div className={style.HireFBottom}>
            <div className={style.HireFBLeft}>
              <p>2020 Pewworld. All right reserved</p>
            </div>
            <div className={style.HireFBRight}>
              <p>Telepon</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
