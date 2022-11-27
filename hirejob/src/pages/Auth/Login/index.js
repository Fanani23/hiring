import React from 'react'
// import { loginUser } from '../../redux/actions/login'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import styles from './LoginPerekrut.css'
import peworld from '../../img/Group 980 2.png';

export default function Login() {

//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const postData = (e) =>{
//     e.preventDefault()
//     console.log(email)
//     console.log(password)
//     let data = {
//       email,password
//     }
//     dispatch(loginUser(data,navigate))
//   }

  return (
   <div>
    <div className={styles.container}>
        <div>
            <img src={peworld} alt="" className="" />
            <h1>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
        </div>
        <div>
            <h2>Halo, PewPeople</h2>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus enim, dignissim nec mauris nec, cursus facilisis dolor.
            </span>
            <form className={styles.form}>
                  <input type="email" className="form-control mb-2" name="email"  placeholder="email"/>
                  <input type="password" className="form-control mb-2" name="password" placeholder="password"/>
                  <p className={styles.forget}>Reset Password</p>
                  <button type='submit' class="bg-yellow-600 text-white px-3 py-2 rounded hover:bg-blue">Login</button>
            </form>
        </div>
    </div>
   </div>
  )
}
