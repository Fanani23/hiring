import React, {useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "../../pages/EditProfileEmpoyee/editprofilee.module.css"
import tokped from '../../assets/tokped.png';

function Experience() {

    const [data, setData] = useState([]);
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("user_id");
    const user= {
      headers: {
      Authorization: `Bearer ${token}`,
    }};
    // console.log("my token=", token);
    console.log("my id", id)

//get experience
    const getData =() => {
        axios
        .get(`http://localhost:3009/experience`, user)
        .then ((res) => {
          console.log("get data succes");
          console.log(res.data, "data dari experienceeee");
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

//delete data experience
  const deleteData = (e, id) => {
    axios.delete(`http://localhost:3009/experience/${id}`, user)
    .then((res)=>{
        console.log("delete data success")
        console.log(res)
        Swal.fire("Success", "Delete experience success", "success");
        getData()
      })
      .catch((err)=>{
        console.log("delete data fail")
        console.log(err)
        Swal.fire("Warning", "Delete experience failed", "error");
    })
  }

//input experience
    const [input, setInput] = useState({
        position:"",
        company_name:"",
        work_start:"",
        work_ended:"",
        description:""
    })
    const handleChangeInput = (e) => {
        setInput ({
            ...input,
            [e.target.name] : e.target.value
        })
    };
    const postExperience = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("position", input.position);
        formData.append("company_name", input.company_name);
        formData.append("work_start", input.work_start);
        formData.append("work_ended", input.work_ended);
        formData.append("description", input.description);
        console.log(formData, "dari input skill");
        axios
        .post(`http://localhost:3009/experience/add`, formData, user, {
        "content-type": "multipart/form-data",
    })
    .then ((res) => {
        console.log("Input data experience succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Input data experience success", "success");
    })
    .catch((err) => {
        console.log("Input data experience failed");
        console.log(err);
        Swal.fire("Warning", "Input data experience failed", "error");
    });
    };

//update experience
const handleData = async (e, id) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("position", input.position);
    formData.append("company_name", input.position);
    formData.append("work_start", input.work_start);
    formData.append("work_ended", input.work_ended);
    formData.append("description", input.description);
    console.log(formData, "dari update experince");
axios
.put(`http://localhost:3009/experience/${id}`, formData, user, {
    "content-type": "multipart/form-data",
})
.then ((res) => {
    console.log("Update experince succes");
    console.log(res);
    window.location.reload(false);
    Swal.fire("Success", "Update experince success", "success");
})
.catch((err) => {
    console.log("Update experincen failed");
    console.log(err);
    Swal.fire("Warning", "Update experince failed", "error");
  });
};    

const handleEdit = (e, id) => {
    axios
    .get(`http://localhost:3009/experience/${id}`, user)
    .then ((res) => {
      console.log("get experince succes");
      console.log(res.data, "DATA DARI GET experince by idddddd");
      res.data &&  setData(res.data.data);
    })
    .catch((err) => {
      console.log("get experince fail");
      console.log(err);
    });
    }


  return (
    <div className={styles.pengalaman}>
    <h3> Pengalaman kerja </h3>
    <hr />
    {data.result ? (
        data.result.map((item) => (
    <div className={styles.listpengalaman}>
        <img src={tokped} alt="logo pt." />
        <div className={styles.desc}>
            <h4> {item.company_name} </h4>
            <h6> {item.position} </h6>
            <span> {item.work_start} -  {item.work_ended} </span>
            <p>
                {item.description}
            </p>
        </div>
        <div className={styles.btnn}>
            <button type="submit" className={styles.btnedit} onClick={(e) => handleEdit(e, item.id)}> Edit </button>
            <button type="submit" className={styles.btnedit} style={{'width':'40px'}} onClick={(e) => handleData(e, item.id)} > ✓ </button>
            <button type="submit" className={styles.btnx} onClick={(e) => deleteData(e, id)}> X </button>
        </div>
    </div>
     ))
    ) : ( <h1>...Loading</h1>
    )}
    <hr />
    <div className={styles.boxpengalaman}>
        <p> Posisi </p>
        <input type="text" placeholder="Web developer" name="position" onChange={handleChangeInput} 
        value={input.position}/>
        <div className={styles.date}>
            <div className={styles.pt}>
                <p> Nama perusahaan </p>
                <input type="text" placeholder="PT. Harus bisa" name="company_name" onChange={handleChangeInput} value={input.company_name} />
            </div>
            <div className={styles.dari}>
                <p> Dari Bulan/tahun </p>
                <input type="date" placeholder="Januari 2018" name="work_start" onChange={handleChangeInput} value={input.work_start}/>
            </div>
            <div className={styles.sampai}>
                <p> Sampai Bulan/tahun </p>
                <input type="date" placeholder="Januari 2019" name="work_ended" onChange={handleChangeInput} value={input.work_ended}/>
            </div>
        </div>
        <p> Deskripsi singkat </p>
            <textarea type="text" placeholder="Tuliskan deskripsi singkat" name="description" 
            onChange={handleChangeInput} value={input.description}/>
        <button type="submit" className={styles.btn4} onClick={(e) => postExperience(e)} > Tambah Pengalaman Kerja </button>
    </div>
</div>
  )
}

export default Experience