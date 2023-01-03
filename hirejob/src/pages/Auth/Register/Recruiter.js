import React, { useState } from 'react';
import styles from './Register.module.css';
import Peworld from '../../../assets/Group 980 2.png';
import { registerRecruiter } from '../../../config/redux/actions/registerRecruiter';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function RegisterRecruiter() {
    
    const [fullname,setName] = useState("");
    const [email,setEmail] = useState("");
    const [perusahaan,setPerusahaan] = useState("");
    const [jabatan,setJabatan] = useState("");
    const [telepon,setNoHp] = useState("");
    const [password,setPassword] = useState("");
    const [konfpassword,setKonfPassword] = useState("");
    const [ErrorKonfPassword, setErrorKonfPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const postData = (e) =>{
         e.preventDefault();
        console.log(fullname);
        console.log(email);
        console.log(perusahaan);
        console.log(jabatan);
        console.log(telepon);
        console.log(password);
        console.log(konfpassword);
        
        let data = {
          fullname,email,perusahaan,jabatan,password,telepon,konfpassword,
        }
        dispatch(registerRecruiter(data,navigate))
      };

    const matchpass=(e)=>{
        const value = e.target.value
        setKonfPassword(value)
        if(password !== value){
            setErrorKonfPassword("Password don't match")
        }else{
            setErrorKonfPassword("")
        }
    };
      
  return (
        <div className={styles.container}>
             <div className="bg-[url('src/img/Mask Group.png')]  bg-blue-400 w-full pr-4 px-10 mr-4">
                 <img src={Peworld} className="" alt=''/>
                 <h1 className="font-extrabold text-white py-24 pr-2 text-4xl tracking-wide">
                    Temukan developer 
                    berbakat & terbaik 
                    di berbagai bidang
                    keahlian
                 </h1>
             </div>
                 <div className="pl-4 ml-4 container">
                    <h1 className="font-semibold text-3xl">Halo, PewPeople</h1>
                    <p className=" mb-2" text-base>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus enim, dignissim nec mauris nec
                    </p>
                    <form onSubmit={postData} className={styles.form}>
                    <p className="text-sm text-grey">Nama</p>
                        <input type="text" className="form-control mb-2 py-1 pl-2 w-full " value={fullname} name="name" onChange={(e)=>setName(e.target.value)} placeholder="Masukkan nama panjang"/>
                    <p className="text-sm text-grey">Email</p>
                        <input type="email" className="form-control mb-2 py-1 pl-2 w-full"  value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Masukan alamat email"/>
                    <p className="text-sm text-grey">Perusahaan</p>
                        <input type="text" className="form-control mb-2 py-1 pl-2 w-full " value={perusahaan} name="perusahaan" onChange={(e)=>setPerusahaan(e.target.value)}  placeholder="Masukkan nama perusahaan"/>
                    <p className="text-sm text-grey">Jabatan</p>
                        <input type="text" className="form-control mb-2 py-1 pl-2 w-full "  value={jabatan}  name="jabatan" onChange={(e)=>setJabatan(e.target.value)} placeholder="Posisi di perusahaan Anda"/>
                    <p className="text-sm text-grey">No handphone</p>
                        <input type="number" className="form-control mb-2 py-1 pl-2 w-full"  value={telepon}  name="NoHandphone" onChange={(e)=>setNoHp(e.target.value)}placeholder="Masukan No handphone"/>
                    <p className="text-sm text-grey">Kata Sandi</p>
                        <input type="password" className="form-control mb-2 py-1 pl-2 w-full "  value={password}  name="KataSandi"  onChange={(e)=>setPassword(e.target.value)} placeholder="Masukan kata sandi"/>
                    <p className="text-sm text-grey">Konfirmasi kata sandi</p>
                        <input type="password" className="form-control mb-2 py-1 pl-2 w-full"  value={konfpassword} name="password"  onChange= {matchpass} placeholder="Masukan konfirmasi kata sandi"/>
                        {
                            ErrorKonfPassword && (
                                <p className="text-red-600">{ErrorKonfPassword}</p>
                            )
                        }
                <button type='submit' className="text-center bg-yellow-500 text-white w-full py-1 mt-1 rounded font-bold">Daftar</button>
            </form>
            <p className="text-right text-sm">Anda sudah punya akun? <a className="text-yellow-500" href="/loginn">Masuk disini</a></p>
        </div>
    </div>
  )
}