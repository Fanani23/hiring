import React from 'react'
import styles from './ResetPass.module.css'
import Peworld from '../../assets/Group 978.png';

export default function ResetPassword() {

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
            <div class="pl-24 py-16">
                <h1 class="font-semibold text-3xl">Reset Password</h1>
                    <p class="py-2 mb-4 text-base">
                        Enter your user account'a verified email address and we will send you a password reset link
                    </p>
            <form class={styles.form}>
                <p class="text-sm text-slate-400 mb-2">Email</p>
                    <input type="email" class="form-control mb-3 py-2 w-full" name="email"  placeholder="Masukkan alamat email"/>
                <button type='submit' class="bg-yellow-400 text-white text-center w-full my-4 py-2 rounded font-bold text-base ">Send password reset email</button>
            </form>
        </div>
    </div>
  )
}