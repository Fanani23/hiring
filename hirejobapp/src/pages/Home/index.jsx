import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";
import assets from "../../assets";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={style.containerHome}>
      <div className={style.containerHomeNavBasis}>
        <div className={style.containerHomeNav}>
          <div className={style.containerHNLogo}>
            <img src={assets.logoweb} alt="" />
          </div>
          <div className={style.containerHNButton}>
            <button type="button" className={style.HNButtonLeft}>
              <img src={assets.logobell} alt="" />
            </button>
            <button type="button" className={style.HNButtonCenter}>
              <img src={assets.logomail} alt="" />
            </button>
            <button type="button" className={style.HNButtonRight}>
              <img src={assets.navprofiledef} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.containerHomeNav2}>
        <div className={style.HN2Basis}>
          <div className={style.HN2Text}>Top Jobs</div>
        </div>
      </div>
      <div className={style.containerHomeBody}>
        <div className={style.HBTop}>
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className={style.HBTopSearch}
          />
          <div className={style.HBTopSelect}>
            <select className={style.HBTopSelectValue} name="sort" id="sort">
              <option value="nama">Nama</option>
              <option value="lokasi">Lokasi</option>
            </select>
          </div>
          <div className={style.HBTopButton}>
            <button type="button" className={style.HBTopButtonValue}>
              Select
            </button>
          </div>
        </div>
        <div className={style.HBBottom}>
          <div className={style.HBBottomBody}>
            <div>
              <img
                className={style.HBBBImg}
                src={assets.navprofiledef}
                alt=""
              />
            </div>
            <div className={style.HBBBInfo}>
              <div>
                <p className={style.HBBBInfoName}>Louis Tomlison</p>
              </div>
              <div>
                <p className={style.HBBBInfoPos}>Web Developer</p>
              </div>
              <div className={style.HBBBInfoMap}>
                <img
                  className={style.HBBBInfoMapImg}
                  src={assets.mappin}
                  alt=""
                />
                <p className={style.HBBBInfoMapText}>Lorem ipsum</p>
              </div>
              <div className={style.HBBBInfoSkill}>
                <div className={style.HBBBInfoSkillValue}>PHP</div>
                <div className={style.HBBBInfoSkillValue}>Javascript</div>
                <div className={style.HBBBInfoSkillValue}>HTML</div>
              </div>
            </div>
            <div className={style.HBBBButton}>
              <button type="button" className={style.HBBBButtonValue}>
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerHomeFooter}>
        <div className={style.containerHFBasis}>
          <div className={style.HFTop}>
            <img src={assets.logofooter} alt="" />
          </div>
          <div className={style.HFCenter}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <div>
            <img src={assets.linefooter} alt="" />
          </div>
          <div className={style.HFBottom}>
            <div className={style.HFBLeft}>
              <p>2020 Pewworld. All right reserved</p>
            </div>
            <div className={style.HFBRight}>
              <p>Telepon</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
