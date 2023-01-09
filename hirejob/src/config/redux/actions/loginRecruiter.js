import axios from "axios";

export const  loginRecruiter = (data,navigate) => async (dispact) =>{
    try{
        const result = await axios.post("http://localhost:3009/auth/login",data)
        const user = result.data.data
        localStorage.setItem("token",user.token)
        dispact({type:"USER_LOGIN_SUCCESS",payload: user})
        navigate('/editProfileCompany')
        console.log("user login success")
    } catch(err){
        console.log("user login err")
        console.log(err)
    }
}
