import axios from "axios";

export const  loginEmployee = (data,navigate) => async (dispact) =>{
    try{
        const result = await axios.post("http://localhost:3009/auth/login",data)
        const user = result.data.data
        console.log(user);
        localStorage.setItem("token",user.token)
        dispact({type:"USER_LOGIN_SUCCESS",payload: user})
        navigate('/editProfileEmployee')
        console.log("user login success")
    } catch(err){
        console.log("user login err")
        console.log(err)
    }
}