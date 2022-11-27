import React from 'react'
import styles from './Register.module.css'
import Peworld from '../../../img/Group 980 2.png';

export default function RegisterRecruiter() {
  return (
        <div class={styles.container}>
             <div class="bg-[url('src/img/Mask Group.png')]  bg-blue-400 w-full pr-4 px-10 mr-4">
                 <img src={Peworld} class="" alt=''/>
                 <h1 class="font-extrabold text-white py-24 pr-2 text-4xl tracking-wide">
                    Temukan developer 
                    berbakat & terbaik 
                    di berbagai bidang
                    keahlian
                 </h1>
             </div>
                 <div class="pl-4 ml-4 container">
                    <h1 class="font-semibold text-3xl">Halo, PewPeople</h1>
                    <p class=" mb-2" text-base>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus enim, dignissim nec mauris nec
                    </p>
                    <form class={styles.form}>
                    <p class="text-sm text-grey">Nama</p>
                        <input type="nama" class="form-control mb-2 py-1 w-full " name="name"  placeholder="Masukkan nama panjang"/>
                    <p class="text-sm text-grey">Email</p>
                        <input type="email" class="form-control mb-2 py-1 w-full " name="email"  placeholder="Masukan alamat email"/>
                    <p class="text-sm text-grey">Perusahaan</p>
                        <input type="nama" class="form-control mb-2 py-1 w-full " name="name"  placeholder="Masukkan nama perusahaan"/>
                    <p class="text-sm text-grey">Jabatan</p>
                        <input type="jabatan" class="form-control mb-2 py-1 w-full " name="jabatan"  placeholder="Posisi di perusahaan Anda"/>
                    <p class="text-sm text-grey">No handphone</p>
                        <input type="NoHandphone" class="form-control mb-2 py-1 w-full" name="NoHandphone"  placeholder="Masukan No handphone"/>
                    <p class="text-sm text-grey">Kata Sandi</p>
                        <input type="KataSandi" class="form-control mb-2 py-1 w-full " name="KataSandi" placeholder="Masukan kata sandi"/>
                    <p class="text-sm text-grey">Konfirmasi kata sandi</p>
                        <input type="konfirKataSandi" class="form-control mb-2 py-1 w-full" name="konfirKataSandi" placeholder="Masukan konfirmasi kata sandi"/>
                <button type='submit' class="text-center bg-yellow-500 text-white w-full py-1 mt-1 rounded font-bold">Daftar</button>
            </form>
            <p class="text-right text-sm">Anda sudah punya akun? <a class="text-yellow-500" href="/loginn">Masuk disini</a></p>
        </div>
    </div>
  )
}