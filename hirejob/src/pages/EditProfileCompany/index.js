import React, {useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from './editprofile.module.css';
import pen from '../../assets/pen.png';
import loc from '../../assets/loc.png';
// import phot from '../../assets/1.png';

function EditProfileCompany() {

    const [data, setData] = useState([]);
    const [photo, setPhoto] = useState(null); 
    const token = localStorage.getItem("token");
    const user= {
      headers: {
      Authorization: `Bearer ${token}`,
    }};
    console.log("ini tokennyaaaa=", token);

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

    const [updateData, setUpdateData] = useState({
        company_name: data.company_name,
        position: data.position,
        province: data.province,
        city: data.city,
        description: data.description,
        company_email: data.company_email,
        email: data.email,
        company_phone: data.company_phone,
        linkedin: data.linkedin
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
        formData.append("company_name", updateData.company_name);
        formData.append("company_email", updateData.company_email);
        formData.append("company_phone", updateData.company_phone);
        formData.append("position", updateData.position);
        formData.append("city", updateData.city);
        formData.append("email", updateData.email);
        formData.append("province", updateData.province);
        formData.append("description", updateData.description);
        formData.append("linkedin", updateData.linkedin);
        formData.append("photo", photo);
        console.log(formData)
    axios
    .put(`http://localhost:3009/auth/profile`, formData, user, {
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

  return (
    <div className={styles.page}>
        <div className={styles.bg}>
            <div className={styles.content}>
                <div className={styles.box1}>
                    <div className={styles.box}>
                        <div className={styles.file}>
                            <img src={pen} alt="" />
                            <label htmlFor="files" className={styles.edit}> Edit </label>
                            <input type="file" id="files" name="photo" onChange={handlePhotoChange} />
                        </div>
                        {/* <img src={phot} alt="" className={styles.photo} /> */}
                        <img src={data.photo} alt="" className={styles.photo} />
                        <h3> {data.company_name} </h3>
                        <p>{data.position}</p>
                        <div className={styles.place}>
                            <img src={loc} alt="" />
                            <span> {data.city}, {data.province} </span>
                        </div>
                    </div>
                        <div className={styles.btn}>
                            <button type="submit" className={styles.btn1} onClick={(e) => handleData(e)} > Simpan </button><br/>
                            <button type="submit" className={styles.btn2} > Batal </button>
                        </div>
                </div>
                <div className={styles.box2}>
                    <h3> Data diri </h3>
                    <hr />
                    <p> Nama Perusahaan </p>
                        <input type="text" placeholder="Masukkan nama perusahaan" name="company_name" value={updateData.company_name} onChange={(e) => handleChange(e)} />
                    <p> position </p>
                        <input type="text" placeholder="Masukkan position" name="position" value={updateData.position} onChange={(e) => handleChange(e)} />
                    <p> Provinsi </p>
                        <input type="text" placeholder="Masukkan Provinsi" name="province" value={updateData.province} onChange={(e) => handleChange(e)}/>
                    <p> Kota </p>
                        <input type="text" placeholder="Masukkan Kota" name="city" value={updateData.city} onChange={(e) => handleChange(e)} />
                    <p> Deskripsi singkat </p>
                        <textarea type="text" placeholder="Tuliskan deskripsi singkat" name="description" value={updateData.description} onChange={(e) => handleChange(e)} />
                    <p> Email </p>
                        <input type="text" placeholder="Masukkan email " name="email" value={updateData.email} onChange={(e) => handleChange(e)} />
                    <p> Email Perusahaan </p>
                        <input type="text" placeholder="Masukkan email perusahaan" name="company_email" value={updateData.company_email} onChange={(e) => handleChange(e)} />
                    <p> Nomor Telepon </p>
                        <input type="number" placeholder="Masukkan nomor telepon" name="company_phone" value={updateData.company_phone} onChange={(e) => handleChange(e)} />
                    <p> Linkedin </p>
                        <input type="text" placeholder="Masukkan linkedin" name="linkedin" value={updateData.linkedin} onChange={(e) => handleChange(e)} />
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default EditProfileCompany