import React from 'react'
import styles from './Login.module.css'
import Peworld from '../../../assets/Group 978.png';

export default function LoginEmployee() {

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
            <div class="pl-24 py-12">
                <h1 class="font-semibold text-3xl">Halo, PewPeople</h1>
                <p class="py-2 mb-4" text-base>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus enim, dignissim nec mauris nec
                </p>
                <form className={styles.form}>
                    <p class="text-sm text-slate-400">Email</p>
                        <input type="email" className=" form-control mb-3 py-2 w-full " name="email"  placeholder="Masukan alamat email"/>
                    <p class="text-sm text-slate-400">Kata Sandi</p>
                        <input type="password" className="form-control mb-3 py-2 w-full" name="password" placeholder="Masukkan kata sandi"/>
                    <p class="text-right text-sm my-3">
                        <a class="text-yellow-500 text-slate-700 text-base" href="/ResetPassword">Lupa Kata Sandi?</a>
                    </p>
                    <button type='submit' class="text-center bg-yellow-500 text-white w-full py-2 my-2 rounded font-bold text-base ">Masuk</button>
                </form>
                <p class="text-center text-sm text-slate-700">
                    Anda belum punya akun?
                    <a class="text-yellow-500" href="/register"> Daftar disini</a>
                </p>
            </div>
        </div>
  )
}
