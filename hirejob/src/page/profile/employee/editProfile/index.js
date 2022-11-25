import React from 'react'
import NavbarAfterLogin from '../../../../components/navbar/navbarAfterLogin'
import styles from './index.module.css'
import imgProfile from '../../../../assets/profile image.jpg'
import location from '../../../../assets/location.png'
import edit from '../../../../assets/edit.png'
import {Link} from 'react-router-dom'
import NavbarBeforeLogin from '../../../../components/navbar/navbarBeforeLogin'


const EditProfilePekerja = () => {
  return (
    <div>
        <header>
            {/* <NavbarAfterLogin /> */}
            <NavbarBeforeLogin />
        </header>

        <section>
            <div className={'py-20 '+styles.body}>
                <div className="container flex mx-auto">
                    {/* left  */}
                    <div className="content w-1/4 pr-4">
                        <div className="content-child">
                            <div className="card border bg-white rounded-xl py-10 px-10">
                                <div className={"wrapperimg rounded-full mx-auto overflow-hidden mb-5 "+styles.wrapperimg}>
                                    <img src={imgProfile} className={styles.imgProfile} alt="" />
                                </div>
                                <Link className='flex justify-center mb-10'>
                                    <img src={edit} className={'mr-4 mt-1 '+styles.imgedit} alt="edit" />
                                    <p className='text-xl text-gray-500'>Edit</p>
                                </Link>
                                <div className="content">
                                    <p className='text-xl font-semibold text-start mb-3'>Irfan Julian</p>
                                    <p className='text-md text-start mb-3'>Web Developer</p>
                                    <div className="location mb-3 flex justify-start">
                                        <img src={location} className={'mt-1 '+styles.imgedit} alt="pin" />
                                        <p className='text-md text-neutral-400 ml-3'>Bandung Jawa Barat, Indonesia</p>
                                    </div>
                                    <p className='text-md text-start text-neutral-400'>Freelancer</p>
                                </div>
                            </div>
                            <div className="wrapperButton grid">
                                <button className={'my-3 py-4 text-white font-semibold rounded-lg '+styles.button}>Simpan</button>
                                <button className={'py-4 rounded-lg '+styles.button2}>Batal</button>
                            </div>
                        </div>
                    </div>
                    {/* left  */}

                    {/* right */}
                    <div className="content w-3/4 pl-4">
                        <div className="card rounded-lg drop-shadow-xl bg-white border py-10 px-6">
                            <p className='text-2xl font-semibold text-start'>Data Diri</p>
                            <hr className='border-1 border-gray-400 my-6' />
                            <form className="form">
                                <p className='text-md text-start text-gray-400 mb-3'>Nama Lengkap</p>
                                <input type="text" name='fullName' placeholder='Masukan nama anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                                <p className='text-md text-start text-gray-400 mb-3'>Job Desk</p>
                                <input type="text" name='fullName' placeholder='Masukan job desk anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                                <p className='text-md text-start text-gray-400 mb-3'>Domisili</p>
                                <input type="text" name='fullName' placeholder='Masukan domisili anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                                <p className='text-md text-start text-gray-400 mb-3'>Tempat Kerja</p>
                                <input type="text" name='fullName' placeholder='Masukan tempat kerja anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                                <p className='text-md text-start text-gray-400 mb-3'>Deskripsi Singkat</p>
                                <input type="text" name='fullName' placeholder='Masukan deskripsi singkat tentang anda...' className='w-full rounded-lg py-20 px-2 border mb-8' />
                            </form>
                        </div>

                        <div className="card rounded-lg drop-shadow-xl bg-white mt-10 border py-10 px-6">
                            <p className='text-2xl font-semibold text-start'>Skill</p>
                            <hr className='border-1 border-gray-400 my-6' />
                            <form className="form flex">
                                <input type="text" name='fullName' placeholder='Masukan keahlian anda...' className='rounded-lg w-10/12 py-2 px-2 border' />
                                <button className={'border ml-4 rounded-lg text-white font-semibold '+styles.btnSkill}>Simpan</button>
                            </form>
                        </div>

                        <div className="card rounded-lg drop-shadow-xl bg-white mt-10 border py-10 px-6">
                            <p className='text-2xl font-semibold text-start'>Pengalaman Kerja</p>
                            <hr className='border-1 border-gray-400 my-6' />
                            <form action="">
                                <p className='text-md text-start text-gray-400 mb-3'>Posisi</p>
                                <input type="text" name='fullName' placeholder='Masukan posisi anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                                <div className="wrapper w-full flex">
                                    <div className="wrapper w-1/2 pr-5">
                                        <p className='text-md text-start text-gray-400 mb-3'>Nama Perusahaab</p>
                                        <input type="text" name='fullName' placeholder='Masukan nama perusahaan anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                                    </div>
                                    <div className="wrapper w-1/2 pr-5">
                                        <p className='text-md text-start text-gray-400 mb-3'>Bulan / Tahun</p>
                                        <input type="number" name='fullName' placeholder='Masukan lama pengalaman anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                                    </div>
                                </div>
                                <p className='text-md text-start text-gray-400 mb-3'>Deskripsi Singkat</p>
                                <input type="text" name='fullName' placeholder='Masukan deskripsi anda...' className='w-full rounded-lg py-32 px-2 border mb-8' />
                                <hr className='border-1 border-gray-400 my-6' />
                                <button className={'w-full py-4 text-lg font-semibold rounded-lg '+styles.btnPengalaman}>Tambah Pengalaman Kerja</button>
                            </form>
                        </div>

                        <div className="card rounded-lg drop-shadow-xl bg-white mt-10 mb-20 border py-10 px-6">
                            <p className='text-2xl font-semibold text-start'>Portofolio</p>
                            <hr className='border-1 border-gray-400 my-6' />
                            <p className='text-md text-start text-gray-400 mb-3'>Nama aplikasi</p>
                            <input type="text" name='fullName' placeholder='Masukan aplikasi anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                            <p className='text-md text-start text-gray-400 mb-3'>Link repository</p>
                            <input type="text" name='fullName' placeholder='Masukan link repository anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                            <p className='text-md text-start text-gray-400 mb-3'>Type Portofolio</p>
                            <input type="text" name='fullName' placeholder='Masukan tipe portofolio anda...' className='w-full rounded-lg py-2 px-2 border mb-8' />
                            <p className='text-md text-start text-gray-400 mb-3'>Upload Gambar</p>
                            <input type="file" />
                            <hr className='border-1 border-gray-400 my-6' />
                            <button className={'w-full py-4 text-lg font-semibold rounded-lg '+styles.btnPengalaman}>Tambah Portofolio</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default EditProfilePekerja