import React from "react";
import style from "./profile.module.css";
import assets from "../../assets";

const Profile = () => {
  return (
    <div className={style.containerProfile}>
      <div className={style.containerProfileNavBasis}>
        <div className={style.containerProfileNav}>
          <div className={style.containerPNLogo}>
            <img src={assets.logoweb} alt="" />
          </div>
          <div className={style.containerPNButton}>
            <div className={style.PNButtonLeft}>
              <img src={assets.logobell} alt="" />
            </div>
            <div className={style.PNButtonCenter}>
              <img src={assets.logomail} alt="" />
            </div>
            <div className={style.PNButtonRight}>
              <img src={assets.navprofiledef} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerBodyBasis}>
        <div className={style.BSFieldTop}>
          <div className={style.BSFieldLeft}>
            <div className={style.BSFieldLeftValue}>
              <div>
                <img
                  className={style.BSFLVImg}
                  src={assets.navprofiledef}
                  alt=""
                />
              </div>
              <div>
                <p className={style.BSFLVName}>Louis Tomlison</p>
              </div>
              <div>
                <p className={style.BSFLVPos}>Web Developer</p>
              </div>
              <div className={style.BSFLVLocation}>
                <img
                  className={style.BSFLVLocationImg}
                  src={assets.mappin}
                  alt=""
                />
                <p className={style.BSFLVLocationText}>Mojokerto</p>
              </div>
              <div>
                <p className={style.BSFLVJob}>Freelancer</p>
              </div>
              <div className={style.BSFLVDesc}>
                <p className={style.BSFLVDescValue}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>
              </div>
              <div>
                <p className={style.BSFLVSkill}>Skill</p>
              </div>
              <div className={style.BSFLVSkillBasis}>
                <div className={style.BSFLVSkillValue}>PHP</div>
                <div className={style.BSFLVSkillValue}>Java</div>
                <div className={style.BSFLVSkillValue}>HTML</div>
                <div className={style.BSFLVSkillValue}>ReactJS</div>
                <div className={style.BSFLVSkillValue}>ExpressJS</div>
                <div className={style.BSFLVSkillValue}>Kotlin</div>
              </div>
              <div className={style.BSFLVMail}>
                <img
                  className={style.BSFLVMailImg}
                  src={assets.logomail}
                  alt=""
                />
                <p className={style.BSFLVMailText}>pram@gmail.com</p>
              </div>
              <div className={style.BSFLVIg}>
                <img className={style.BSFLVIgImg} src={assets.logoig} alt="" />
                <p className={style.BSFLVIgText}>pramudiasf_</p>
              </div>
              <div className={style.BSFLVGithub}>
                <img
                  className={style.BSFLVGithubImg}
                  src={assets.logogithub}
                  alt=""
                />
                <p className={style.BSFLVGithubText}>pram@git.com</p>
              </div>
              <div className={style.BSFLVGitlab}>
                <img
                  className={style.BSFLVGitlabImg}
                  src={assets.logogitlab}
                  alt=""
                />
                <p className={style.BSFLVGitlabText}>pram@gitlab.com</p>
              </div>
              <div className={style.BSFLVButton}>
                <button type="button" className={style.BSFLVButtonValue}>
                  Hire
                </button>
              </div>
            </div>
          </div>
          <div className={style.BSFieldRight}>
            <div className={style.BSFieldRightValue}>
              <div className={style.containerBSFRVPorto}>
                <div className={style.BSFRVPorto}>
                  <p className={style.BSFRVPortoText}>Portofolio</p>
                  <img
                    className={style.BSFRVPortoImg}
                    src={assets.lineprofile}
                    alt=""
                  />
                </div>
                <div className={style.BSFRVPortoBasis}>
                  <div>
                    <img
                      className={style.BSFRVPortoValue}
                      src={assets.profileport}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className={style.BSFRVPortoValue}
                      src={assets.profileport}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className={style.BSFRVPortoValue}
                      src={assets.profileport}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className={style.BSFRVPortoValue}
                      src={assets.profileport}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className={style.containerBSFRVExp}>
                <div className={style.BSFRVExp}>
                  <p className={style.BSFRVExpText}>Pengalaman Kerja</p>
                  <img
                    className={style.BSFRVExpImg}
                    src={assets.lineprofile}
                    alt=""
                  />
                </div>
                <div className={style.BSVRFExpBasis}>
                  <div className={style.BSFRVExpValue}>
                    <img
                      className={style.BSFRVExpValueImg}
                      src={assets.profileexp}
                      alt=""
                    />
                    <div className={style.BSFRVExpValueInfo}>
                      <p className={style.BSFRVEVIJob}>Engineer</p>
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
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerProfileFooter}>
        <div className={style.containerPFBasis}>
          <div className={style.PFTop}>
            <img src={assets.logofooter} alt="" />
          </div>
          <div className={style.PFCenter}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <div>
            <img src={assets.linefooter} alt="" />
          </div>
          <div className={style.PFBottom}>
            <div className={style.PFBLeft}>
              <p>2020 Pewworld. All right reserved</p>
            </div>
            <div className={style.PFBRight}>
              <p>Telepon</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
