import React, {useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import porto from "../../assets/portof.png"
import styles from "../../pages/EditProfileEmpoyee/editprofilee.module.css"

function Portofolio () {
const [data, setData] = useState([]);
    const token = localStorage.getItem("token");
    const user= {
      headers: {
      Authorization: `Bearer ${token}`,
    }};
    console.log("my token=", token);

//get portofolio
    const getData =() =>{
      axios
        .get(`http://localhost:3009/portofolio`, user)
        .then ((res) => {
          console.log("get data portofolio succes");
          console.log(res.data, "data dari PORTOFOLIO");
          res.data &&  setData(res.data.data);
        })
        .catch((err) => {
          console.log("get data fail");
          console.log(err);
        });
    }
    useEffect(() => {
        getData()
      }, [])

//delete data porto
    const deleteData = (e, id) => {
      axios.delete(`http://localhost:3009/portofolio/${id}`, user)
      .then((res)=>{
          console.log("delete data success")
          console.log(res)
          Swal.fire("Success", "Delete portofolio success", "success");
          getData()
        })
        .catch((err)=>{
          console.log("delete data fail")
          console.log(err)
          Swal.fire("Warning", "Delete portofolio failed", "error");
      })
    }

    //input experience
    const [photo, setPhoto] = useState(null)
    const [input, setInput] = useState({
      repo_link:"",
      repo_type:"",
      descripton:""
  })
  const handleChangeInput = (e) => {
      setInput ({
          ...input,
          [e.target.name] : e.target.value
      })
  };
  const handlePhoto=(e) =>{
    const handle = e.target.files[0]
    setPhoto(handle)
  }

  const postPortofolio = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("repo_link", input.repo_link);
      formData.append("repo_type", input.repo_type);
      formData.append("photo", photo);
      formData.append("description", input.description);
      console.log(formData, "dari input portof");
      axios
      .post(`http://localhost:3009/portofolio/add`, formData, user, {
      "content-type": "multipart/form-data",
  })
  .then ((res) => {
      console.log("Input data portofolio succes");
      console.log(res);
      window.location.reload(false);
      Swal.fire("Success", "Input data portofolio success", "success");
  })
  .catch((err) => {
      console.log("Input data portofolio failed");
      console.log(err);
      Swal.fire("Warning", "Input data portofolio failed", "error");
  });
  };

  return (
    <div className={styles.portofolio}>
    <h3> Portofolio </h3>
    <hr />
    {data.result ? (
        data.result.map((item) => (
    <div className={styles.listporto}>
        <img src={item.photo} alt="portofolio" />
        <div className={styles.descpor}>
            <h6> {item.description} </h6>
            <p> {item.repo_link} </p>
        </div>
        <div className={styles.btnn}>
            <button type="submit" className={styles.btnedit}> Edit </button>
            <button type="submit" className={styles.btnx} onClick={(e) => deleteData(e, item.id)}> X </button>
        </div>
    </div>
         ))
        ) : (
           <h1>...Loading</h1>
        )}
    <hr />
    <p> Nama aplikasi </p>
        <input type="text" placeholder="Masukkan nama aplikasi" name="description" onChange={handleChangeInput} value={input.description}/>
    <p> Link repository </p>
        <input type="text" placeholder="Masukkan link repository" name="repo_link" onChange={handleChangeInput} value={input.repo_link}/>
    <p> Type portofolio </p>
        <div className={styles.typeporto}>
            <div className={styles.mobile}>
                <input type="radio" name="repo_type" onChange={handleChangeInput} value={input.repo_type} checked />
                <label> Applikasi mobile </label>
            </div>
            <div className={styles.web}>
                <input type="radio" name="repo_type" onChange={handleChangeInput} value={input.repo_type} checked/>
                <label> Applikasi web </label>
            </div>
        </div>
    <div className={styles.uplod}>
        <p> Upload gambar </p>
        <input type="file"  id="files" name="photo" onChange={handlePhoto}/>
    </div>
    <button type="submit" onClick={(e) => postPortofolio(e)}className={styles.btn4} > Tambah Portofolio </button>
  </div>
  )
}

export default Portofolio