import React, { useState } from 'react'
import styles from './Login.module.css'
import Peworld from '../../../assets/Group 978.png';
import { loginRecruiter } from '../../../config/redux/actions/loginRecruiter'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function LoginRecruiter() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const postData = (e) =>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        let data = {
          email,password
        }
        dispatch(loginRecruiter(data,navigate))
      }

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
            <div className="pl-24 py-12">
                <h1 className="font-semibold text-3xl">Halo, PewPeople</h1>
                <p className="py-2 mb-4" text-base>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus enim, dignissim nec mauris nec
                </p>
                <form onSubmit={postData} className={styles.form}>
                    <p className="text-sm text-slate-400">Email</p>
                    <input type="email" className=" form-control mb-3 py-2 w-full " name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Masukan alamat email"/>
                    <p className="text-sm text-slate-400">Kata Sandi</p>
                    <input type="password" className="form-control mb-3 py-2 w-full" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Masukkan kata sandi"/>
                    <p className="text-right text-sm my-3">
                        <a className="text-yellow-500 text-slate-700 text-base" href="/ResetPassword">Lupa Kata Sandi?</a>
                    </p>
                    <button type='submit' className="text-center bg-yellow-500 text-white w-full py-2 my-2 rounded font-bold text-base ">Masuk</button>
                </form>
                <p className="text-center text-sm text-slate-700">
                    Anda belum punya akun?
                    <a className="text-yellow-500" href="/register"> Daftar disini</a>
                </p>
            </div>
        </div>
  )
}
