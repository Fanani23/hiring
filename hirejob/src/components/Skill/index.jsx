import React, {useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import styles from "../../pages/EditProfileEmpoyee/editprofilee.module.css"

function Skill() {

    const [data, setData] = useState([]);
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("user_id");
    const user= {
      headers: {
      Authorization: `Bearer ${token}`,
    }};
    // console.log("my token=", token);
    // console.log(id, "my id")

//get skill
    const getData = () => {
    axios
    .get(`http://localhost:3009/skill`, user)
    .then ((res) => {
      console.log("get skill succes");
      console.log(res.data, "DATA DARI GET SKILLLLLLL");
      res.data &&  setData(res.data.data);
    })
    .catch((err) => {
      console.log("get skill fail");
      console.log(err);
    });
    }

    useEffect(() => {
        getData()
    }, [])


//Insert skill
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
        console.log(formData, "dari input skill");
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

//Update skill
    const [updateSkill, setUpdateSkill] = useState({
        name: data.name
    })
    
    const handleChangeSkill = (e) => {
        setUpdateSkill({
          ...updateSkill,
          [e.target.name]:e.target.value
        })
        console.log(data)
    }

    const handleDataSkill = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", updateSkill.name);
        console.log(formData, "dari update skill");
    axios
    .put(`http://localhost:3009/skill/${id}`, formData, user, {
        "content-type": "multipart/form-data",
    })
    .then ((res) => {
        console.log("Update skill succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update skill success", "success");
    })
    .catch((err) => {
        console.log("Update skill failed");
        console.log(err);
        Swal.fire("Warning", "Update skill failed", "error");
      });
    };    

// delete skill
const deleteData = (e, id) => {
    axios.delete(`http://localhost:3009/skill/${id}`, user)
    .then((res)=>{
        console.log("delete data success")
        console.log(res)
        Swal.fire("Success", "Delete skill success", "success");
        getData()
      })
      .catch((err)=>{
        console.log("delete data fail")
        console.log(err)
        Swal.fire("Warning", "Delete skill failed", "error");
    })
  }


  return (
    <div className={styles.skill}>
    <h3> Skill </h3>
    <hr />
    <div className={styles.simpan}>
        <input type="text" placeholder="Javascript, Html, css" name="name" onChange={handleChangeInput} value={input.name} />
        <button type="submit" className={styles.btn3} onClick={(e) => postSkill(e)}  > Tambah Skill </button>
    </div>
    <h3> My Skill </h3>
    <hr/>
    <div className={styles.listskill}>
    {data ? (
        data.map((item) => (
        <div className={styles.skil}>
            <button type="button" className={styles.btnskill}> {item.name} </button>
            <button type="button" onClick={(e) => deleteData(e, item.id)} className={styles.btnskill} style={{'marginRight':'20px'}}> X </button>
       </div>
        ))
        ) : (
           <h1>...Loading</h1>
        )}
    </div>
    <div className={styles.simpan}>
        <input type="text" placeholder="Javascript, Html, css" name="name" onChange={handleChangeSkill} value={updateSkill.name} />
        <button type="submit" className={styles.btn3} onClick={(e) => handleDataSkill(e)}  > Simpan  </button>
    </div>
  </div>
  )
}

export default Skill;