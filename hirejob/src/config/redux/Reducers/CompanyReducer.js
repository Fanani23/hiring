const initialState = {
    company: {
        id: '',
        fullname: '',
        email: '',
        nama_perusahaan: '',
        jabatan: '',
        telepon: '',
        bidang: '',
        kota: '',
        deskripsi: '',
        instagram: '',
        linkedin: '',
        role: '',
        verif: '',
        otp: ''
    },
    isLoading: false
}

const CompanyReducer = (state=initialState, action) =>{
    if(action.type === 'REGISTER_COMPANY_PENDING'){
        return {...state, isLoading: true}
    }else if(action.type === 'REGISTER_COMPANY_SUCCESS'){
        return ({
            ...state,
            company : action.payload,
            isLoading: false
        })
    }else{
        return state
    }
}

export default CompanyReducer