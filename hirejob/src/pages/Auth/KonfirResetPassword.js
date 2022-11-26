import React from 'react'
import styles from './KonResPass.module.css'
import Peworld from '../../assets/Group 978.png';

export default function KonfirmasiResetPassword() {

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
            <div class="pl-24 py-16 w-2/3">
                <h1 class="font-semibold text-3xl">Reset Password</h1>
                    <p class="py-2 mb-4 text-base">
                    You need to change your password to active your account
                    </p>
                    <form class={styles.form}>
                        <p class="text-sm text-slate-400 mb-1">Kata sandi</p>
                            <input type="kataSandi" class="form-control mb-3 py-2 w-full" name="kataSandi"  placeholder="Masukkan kata sandi"/>
                        <p class="text-sm text-slate-400 mb-1">Confirmation new password</p>
                            <input type="email" class="form-control mb-3 py-2 w-full" name="kataSandi"  placeholder="Masukkan konfirmasi kata sandi"/>
                        <button type='submit' class="bg-yellow-400 text-white text-center w-full my-4 py-2 rounded font-bold text-base ">Send password reset email</button>
                    </form>
            </div>
        </div>
    )
}