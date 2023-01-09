import axios from "axios";

export const  registerRecruiter = (data,navigate) => async (dispact, req, res, next) =>{
    try{
        const result = await axios.post("http://localhost:8000/company/register",data)
        const user = result.data.data
        console.log(user);
        localStorage.setItem("token",user.token)
        dispact({type:"USER_REGISTER_SUCCESS",payload: user})
        navigate('/LoginRecruiter')
        console.log("user register success")
    } catch(err){
        console.log("user register err")
        console.log(err)
    }
}