import axios from "axios";

export const  registerEmployee = (data,navigate) => async (dispact, req, res, next) =>{
    try{
        const result = await axios.post("http://localhost:3009/auth/register/employee",data)
        const user = result.data.data
        console.log(user);
        localStorage.setItem("token",user.token)
        dispact({type:"USER_REGISTER_SUCCESS",payload: user})
        navigate('/LoginEmployee')
        console.log("user register success")
    } catch(err){
        console.log("user register err")
        console.log(err)
    }
}