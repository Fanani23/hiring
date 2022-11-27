const initialState = {
  employee: {
    id: "",
    fullname: "",
    email: "",
    telepon: "",
    jobdesk: "",
    domisili: "",
    tempat_kerja: "",
    deskripsi: "",
    role: "",
    verif: "",
    otp: "",
  },
  isLoading: false,
};

const EmployeeReducer = (state = initialState, action) => {
  if (action.type === "REGISTER_EMPLOYEE_PENDING") {
    return { ...state, isLoading: true };
  } else if (action.type === "REGISTER_EMPLOYEE_SUCCESS") {
    return {
      ...state,
      employee: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default EmployeeReducer;
