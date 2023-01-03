import React from 'react';
import styles from './ResetPass.module.css';
import Peworld from '../../assets/Group 978.png';
// import axios from "axios";

export default function ResetPassword() {
    return (
        <div className={styles.container}>
             <div className={styles.bgImg}>
                 <img src={Peworld} className="pl-10 pt-8" alt=''/>
                 <h1 className="font-bold font-44px tracking-wider leading-10 text-white pt-32 px-12 text-4xl">
                     Temukan developer 
                     berbakat & terbaik 
                     di berbagai bidang
                     keahlian
                 </h1>
             </div>
            <div className="pl-24 py-16">
                <h1 className="font-semibold text-3xl">Reset Password</h1>
                    <p className="py-2 mb-4 text-base">
                        Enter your user account'a verified email address and we will send you a password reset link
                    </p>

            <form onSubmit={this.handleSubmit} className={styles.form}>
                <p className="text-sm text-slate-400 mb-2">Email</p>
                    <input type="email" className="form-control mb-3 py-2 w-full" value="" name="email" onChange={(e)=>this.Email=(e.target.value)}  placeholder="Masukkan alamat email"/>
                <button type='submit' className="bg-yellow-400 text-white text-center w-full my-4 py-2 rounded font-bold text-base ">Send password reset email</button>
            </form>
        </div>
    </div>
  )
}