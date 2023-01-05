import React, {useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from './editprofilee.module.css';
import Skill from "../../components/Skill"
import pen from '../../assets/pen.png';
import loc from '../../assets/loc.png';
// import phot from '../../assets/1.png';
import Portofolio from "../../components/Portofolio";
import Experience from "../../components/Experience";


function EditProfileEmployee() {

    const [data, setData] = useState([]);
    const [photo, setPhoto] = useState(null); 
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("user_id");
    const user= {
      headers: {
      Authorization: `Bearer ${token}`,
    }};
    // console.log("my token=", token);
    // console.log("my id=", id);

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

// update data diri employee
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
                        {/* <img src={phot} alt="" className={styles.photo} /> */}
                        <img src={data.photo} alt="" className={styles.photo} />
                        <div className={styles.file}>
                            <img src={pen} alt="" />
                            <label htmlFor="files" className={styles.edit}> Edit </label>
                            <input type="file" id="files" name="photo" onChange={handlePhotoChange} />
                        </div>
                        <h3> {data.name} </h3>
                        <p> {data.job} </p>
                        <div className={styles.place}>
                            <img src={loc} alt="" />
                            <span> {data.city}, {data.province} </span>
                        </div>
                        <p> {data.workplace} </p>
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
                    <div>
                        <Skill />
                    </div>
                    <div>
                        <Experience />
                    </div>
                    <div>
                        <Portofolio />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfileEmployee