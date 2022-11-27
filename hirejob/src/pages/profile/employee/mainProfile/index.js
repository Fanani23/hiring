import React from 'react'
import iconUser from '../../../../assets/profile image.jpg'
import location from '../../../../assets/location.png'
import contactMail from '../../../../assets/kontak/mail.png'
import contactInstagram from '../../../../assets/kontak/instagram.png'
import contactGithub from '../../../../assets/kontak/github.png'
import contactGitlab from '../../../../assets/kontak/gitlab.png'
// import banner from '../../../../assets/banner.jpg'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import Footer from '../../../../components/footer'
import NavbarAfterLogin from '../../../../components/navbar/navbarAfterLogin'
// import Portofolio from '../../../../components/portofolio'
import PengalamanKerja from '../../../../components/pengalamanKerja'

const ProfilePekerja = () => {
  return (
    <div className={styles.body}>
        <header>
          <NavbarAfterLogin />
        </header>

        <section>
          <div className="mainContent">
            <div className={"container my-20 rounded-xl overflow-hidden shadow-xl mx-auto "+styles.bodycontainer}>
              <div className={"banner overflow-hidden "+styles.banner}>
                {/* <img src={banner} className='w-full' alt="" /> */}
              </div>
              <div className="content-user">
                <div className={"profileimg overflow-hidden rounded-full mb-6 mx-auto "+styles.wrapperProfilepict}>
                  <img src={iconUser} className={styles.profilePict} alt="" />
                </div>
                <div className="content pt-6">
                  <p className='text-4xl mb-3'>Irfan Julian</p>
                  <p className='text-lg my-6'>Web Developer</p>
                  <div className="location my-6 flex justify-center">
                    <img src={location} className={styles.img} alt="pin" />
                    <p className='text-lg text-neutral-400 ml-3'>Bandung Jawa Barat, Indonesia</p>
                  </div>
                  <p className='text-lg text-neutral-400'>Freelancer</p>
                  <div className="descipt w-1/2 mx-auto">
                    <p className='text-lg text-neutral-400 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis earum assumenda libero tempore 
                    eum perferendis nesciunt ut harum corporis hic nihil neque voluptatibus aliquid, fugit dolorum nobis fuga asperiores.</p>
                  </div>
                  <button className={'border-2 w-64 h-12 rounded-lg '+styles.btn}>Hire</button>
                  <div className="content-skill my-6">
                    <p className='text-2xl'>Skill</p>
                    <div className="wrapperbtnskill grid grid-cols-3 gap-4 mt-6 w-1/5 mx-auto">
                      <button className={'h-12 rounded-lg '+styles.btnskill}>skill 1</button>
                      <button className={'h-12 rounded-lg '+styles.btnskill}>skill 2</button>
                      <button className={'h-12 rounded-lg '+styles.btnskill}>skill 3</button>
                      <button className={'h-12 rounded-lg '+styles.btnskill}>skill 1</button>
                      <button className={'h-12 rounded-lg '+styles.btnskill}>skill 2</button>
                      <button className={'h-12 rounded-lg '+styles.btnskill}>skill 3</button>
                    </div>
                  </div>
                  <div className="content-contact my-10 w-72 grid justify-start mx-auto">
                    <Link className='flex'><img src={contactMail} alt="contact" className={'mr-8 '+styles.imgContact} /><p className='text-lg text-neutral-400'>irfan@gmail.com</p></Link>
                    <Link className='flex mt-8'><img src={contactInstagram} alt="contact" className={'mr-8 '+styles.imgContact} /><p className='text-lg text-neutral-400'>irfan</p></Link>
                    <Link className='flex mt-8'><img src={contactGithub} alt="contact" className={'mr-8 '+styles.imgContact} /><p className='text-lg text-neutral-400'>irfanss</p></Link>
                    <Link className='flex mt-8'><img src={contactGitlab} alt="contact" className={'mr-8 '+styles.imgContact} /><p className='text-lg text-neutral-400'>irfansss</p></Link>
                  </div>
                  <div className="wrapper-portofolio flex my-20">
                    <Link><p className='text-2xl ml-20'>Portofolio</p></Link>
                    <Link><p className='text-2xl ml-20'>Pengalaman Kerja</p></Link>
                  </div>
                  {/* <Portofolio /> */}
                  <PengalamanKerja />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default ProfilePekerja