import React, { useState }  from 'react'
import styles from './Register.module.css'
import Peworld from '../../../assets/Group 978.png';
import { registerEmployee } from '../../../config/redux/actions/registerEmployee'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function RegisterEmployee() {

    const [fullname,setName] = useState("")
    const [email,setEmail] = useState("")
    const [telepon,setNoHp] = useState("")
    const [password,setPassword] = useState("")
    const [konfpassword,setKonfPassword] = useState("")
    const [ErrorKonfPassword, setErrorKonfPassword] = useState("")
  
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const postData = (e) =>{
        e.preventDefault()
        console.log(fullname)
        console.log(password)
        console.log(email)
        console.log(telepon)
        console.log(konfpassword)
        
        let data = {
          fullname,email,password,telepon,konfpassword,
        }
        dispatch(registerEmployee(data,navigate))
      }

      const matchpass=(e)=>{
        const value = e.target.value
        setKonfPassword(value)
        if(password !== value){
            setErrorKonfPassword("Password don't match")
        }else{
            setErrorKonfPassword("")
        }
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
             <div className="pl-24">
                <h1 className="font-semibold text-3xl">Halo, PewPeople</h1>
                <p className="py-2 mb-4" text-base>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus enim, dignissim nec mauris nec
                </p>
                    <form onSubmit={postData} className={styles.form}>
                        <p className="text-sm text-slate-400">Nama</p>
                        <input type="text" className="form-control mb-3 py-2 w-full " name="name" value={fullname} onChange={(e)=>setName(e.target.value)} placeholder="Masukkan nama panjang"/>
                    <p className="text-sm text-slate-400">Email</p>
                        <input type="text" className="form-control mb-3 py-2 w-full " name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Masukan alamat email"/>
                    <p className="text-sm text-slate-400">No handphone</p>
                        <input type="Number" className="form-control mb-3 py-2 w-full" name="NoHandphone" value={telepon} onChange={(e)=>setNoHp(e.target.value)} placeholder="Masukan No handphone"/>
                    <p className="text-sm text-slate-400">Kata Sandi</p>
                        <input type="password" className="form-control mb-3 py-2 w-full " name="KataSandi" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Masukan kata sandi"/>
                    <p className="text-sm text-slate-400">Konfirmasi kata sandi</p>
                        <input type="password" className="form-control mb-3 py-2 w-full" name="konfirKataSandi" value={konfpassword} onChange={matchpass} placeholder="Masukan konfirmasi kata sandi"/>
                        {
                            ErrorKonfPassword && (
                                <p className="text-red-600">{ErrorKonfPassword}</p>
                            )
                        }
                <button type='submit' className="text-center bg-yellow-500 text-white w-full py-2 my-2 rounded font-bold text-base">Daftar</button>
            </form>
            <p className="text-center text-sm text-slate-700">Anda sudah punya akun? <a className="text-yellow-500" href="/login">Masuk disini</a></p>
        </div>
    </div>
  )
}