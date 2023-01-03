const initialState = {
    user : {
        id:"",
        fullname:"",
        email:"",
        role:"",
        telepon: "",
        jobdesk: "",
        domisili: "",
        tempat_kerja: "",
        deskripsi: "",
        verif: "",
        otp:"",
        token:"",
        refreshToken:"",
    },
    isLoading: false
}

const userReducer = (state=initialState, action) =>{
    if(action.type === 'USER_LOGIN_PENDING'){
        return{
            ...state,
            isLoading : true
        } 
    } else if(action.type === 'USER_LOGIN_SUCCESS'){
        return{
            ...state,
            user:action.payload,
            isLoading : false
        } 
    } else {
        return state
    }
}

export default userReducer