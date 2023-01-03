import React, {useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from './editprofilee.module.css';
import pen from '../../assets/pen.png';
import loc from '../../assets/loc.png';
// import phot from '../../assets/1.png'

function EditProfileEmployee() {

    const [data, setData] = useState([]);
    const [photo, setPhoto] = useState(null); 
    const token = localStorage.getItem("token");
    const user= {
      headers: {
      Authorization: `Bearer ${token}`,
    }};
    console.log("my token=", token);

// get data profile
    useEffect(() => {
        axios
        .get("http://localhost:3009/auth/profile", user)
        .then ((res) => {
          console.log("get data succes");
          console.log(res.data);
          res.data &&  setData(res.data.data[0]);
        })
        .catch((err) => {
          console.log("get data fail");
          console.log(err);
        });
      }, [])

// update data diri
    const [updateData, setUpdateData] = useState({
        // name: data.name,
        job: data.job,
        province: data.province,
        city: data.city,
        description: data.description,
        workplace: data.workplace,
    })

    const handlePhotoChange = (e) =>{
        setPhoto(e.target.files[0])
        console.log(e.target.files[0])
    };
      
    const handleChange = (e) => {
        setUpdateData({
          ...updateData,
          [e.target.name]:e.target.value
        })
        console.log(data)
    }
    
    const handleData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append("name", updateData.name);
        formData.append("job", updateData.job);
        formData.append("city", updateData.city);
        formData.append("province", updateData.province);
        formData.append("workplace", updateData.workplace);
        formData.append("linkedin", updateData.linkedin);
        formData.append("photo", photo);
        console.log(formData, "dari update data profile");
    axios
    .put(`http://localhost:3009/auth/update-employee`, formData, user, {
        "content-type": "multipart/form-data",
    })
    .then ((res) => {
        console.log("Update profile succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update profile success", "success");
    })
    .catch((err) => {
        console.log("Update data profile failed");
        console.log(err);
        Swal.fire("Warning", "Update profile failed", "error");
      });
    };
    
//Post skill
    const [input, setInput] = useState({
        name:""
    })
    const handleChangeInput = (e) => {
        setInput ({
            ...input,
            [e.target.name] : e.target.value
        })
    };
    const postSkill = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", input.name);
        console.log(formData, "dari input skill")
        axios
        .post(`http://localhost:3009/skill/add`, formData, user, {
        "content-type": "multipart/form-data",
    })
    .then ((res) => {
        console.log("Input data skill succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Input data skill success", "success");
    })
    .catch((err) => {
        console.log("Input data skill failed");
        console.log(err);
        Swal.fire("Warning", "Input data skill failed", "error");
      });
    };

  return (
    <div className={styles.page}>
        <div className={styles.bg}>
            <div className={styles.content}>
                <div className={styles.box1}>
                    <div className={styles.box}>
                        {/* <img src={phot} alt="" className={styles.photo} /> */}
                        <img src={data.photo} alt="" className={styles.photo} />

                        <div className={styles.file}>
                            <img src={pen} alt="" />
                            <label htmlFor="files" className={styles.edit}> Edit </label>
                            <input type="file" id="files" name="photo" onChange={handlePhotoChange} />
                        </div>
                        <h3> Louis Tomlinson </h3>
                        <p> Web Developer </p>
                        <div className={styles.place}>
                            <img src={loc} alt="" />
                            <span> Purwokerto, Jawa Tengah </span>
                        </div>
                        <p> Freelance </p>
                    </div>
                        <div className={styles.btn}>
                            <button type="submit" className={styles.btn1} onClick={(e) => handleData(e)} > Simpan </button><br/>
                            <button type="submit" className={styles.btn2} > Batal </button>
                        </div>
                </div>
                <div className={styles.box2}>
                    <div className={styles.datadiri}>
                        <h3> Data diri </h3>
                        <hr />
                        <p> Nama Lengkap </p>
                            <input type="text" placeholder="Masukkan nama lengkap" />
                        <p> Job desk </p>
                            <input type="text" placeholder="Masukkan job desk" name="job" value={updateData.job} onChange={(e) => handleChange(e)} />
                        <p> Province </p>
                            <input type="text" placeholder="Masukkan Province" name="province" value={updateData.province} onChange={(e) => handleChange(e)} />
                        <p> Kota </p>
                            <input type="text" placeholder="Masukkan Kota" name="city" value={updateData.city} onChange={(e) => handleChange(e)} />
                        <p> Deskripsi singkat </p>
                            <textarea type="text" placeholder="Tuliskan deskripsi singkat" name="description" value={updateData.description} onChange={(e) => handleChange(e)} />
                    </div>

                    <div className={styles.skill}>
                        <h3> Skill </h3>
                        <hr />
                        <input type="text" placeholder="Javascript, Html, css" name="name" onChange={handleChangeInput} value={input.name} />
                        <button type="submit" className={styles.btn3} onClick={(e) => postSkill(e)}  > Simpan </button>
                    </div>

                    <div className={styles.pengalaman}>
                        <h3> Pengalaman kerja </h3>
                        <hr />
                        <p> Posisi </p>
                        <input type="text" placeholder="Web developer" />
                        <div className={styles.date}>
                            <div className={styles.pt}>
                                <p> Nama perusahaan </p>
                                <input type="text" placeholder="PT. Harus bisa" />
                            </div>
                            <div className={styles.dari}>
                                <p> Dari Bulan/tahun </p>
                                <input type="text" placeholder="Januari 2018" />
                            </div>
                            <div className={styles.sampai}>
                                <p> Sampai Bulan/tahun </p>
                                <input type="text" placeholder="Januari 2019" />
                            </div>
                        </div>
                        <p> Deskripsi singkat </p>
                            <textarea type="text" placeholder=" Deskripsikan pekerjaan anda" />
                        <button type="submit" className={styles.btn3} > Tambah Pengalaman Kerja </button>
                    </div>

                    <div className={styles.portofolio}>
                        <h3> Portofolio </h3>
                        <hr />
                        <p> Nama aplikasi </p>
                            <input type="text" placeholder="Maukkan nama aplikasi" />
                        <p> Link repository </p>
                            <input type="text" placeholder="Masukkan link repository" />
                        <p> Type portofolio </p>
                            <div className={styles.typeporto}>
                                <div className={styles.mobile}>
                                    <input type="radio" />
                                    <label> Applikasi mobile </label>
                                </div>
                                <div className={styles.web}>
                                    <input type="radio" />
                                    <label> Applikasi web </label>
                                </div>
                            </div>
                        <p> Upload gambar </p>
                            <input type="file" />
                        <button type="submit" className={styles.btn3} > Tambah Portofolio </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfileEmployee