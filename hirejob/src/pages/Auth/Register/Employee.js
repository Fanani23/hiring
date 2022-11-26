import React from 'react'
import styles from './Register.module.css'
import Peworld from '../../../img/Group 978.png';

export default function RegisterEmployee() {
    return (
        <div class={styles.container}>
             <div class={styles.bgImg}>
                 <img src={Peworld} class="pl-10 pt-8" alt=''/>
                 <h1 class="font-bold font-44px tracking-wider leading-10 text-white pt-32 px-12 text-4xl">
                     Temukan developer 
                     berbakat & terbaik 
                     di berbagai bidang
                     keahlian
                 </h1>
             </div>
             <div class="pl-24">
                <h1 class="font-semibold text-3xl">Halo, PewPeople</h1>
                <p class="py-2 mb-4" text-base>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus enim, dignissim nec mauris nec
                </p>
                    <form class={styles.form}>
                        <p class="text-sm text-slate-400">Nama</p>
                        <input type="nama" class="form-control mb-3 py-2 w-full " name="name"  placeholder="Masukkan nama panjang"/>
                    <p class="text-sm text-slate-400">Email</p>
                        <input type="email" class="form-control mb-3 py-2 w-full " name="email"  placeholder="Masukan alamat email"/>
                    <p class="text-sm text-slate-400">No handphone</p>
                        <input type="NoHandphone" class="form-control mb-3 py-2 w-full" name="NoHandphone"  placeholder="Masukan No handphone"/>
                    <p class="text-sm text-slate-400">Kata Sandi</p>
                        <input type="KataSandi" class="form-control mb-3 py-2 w-full " name="KataSandi" placeholder="Masukan kata sandi"/>
                    <p class="text-sm text-slate-400">Konfirmasi kata sandi</p>
                        <input type="konfirKataSandi" class="form-control mb-3 py-2 w-full" name="konfirKataSandi" placeholder="Masukan konfirmasi kata sandi"/>
                <button type='submit' class="text-center bg-yellow-500 text-white w-full py-2 my-2 rounded font-bold text-base">Daftar</button>
            </form>
            <p class="text-center text-sm text-slate-700">Anda sudah punya akun? <a class="text-yellow-500" href="/login">Masuk disini</a></p>
        </div>
    </div>
  )
}