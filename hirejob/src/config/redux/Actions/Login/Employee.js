import axios from "axios";

const EmployeeLogin = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_EMPLOYEE_PENDING",
    });
    const result = await axios.post(
      `https://58c4-182-1-84-239.ap.ngrok.io/employee/login`,
      data
    );
    const company = result.data.data;
    localStorage.setItem("token", company.token);
    dispatch({
      type: "LOGIN_EMPLOYEE_SUCCESS",
      payload: company,
    });
    navigate("/profilePekerja");
    console.log("Employee login success");
  } catch (error) {
    console.log("Employee login failed");
    console.log(error);
  }
};

export default EmployeeLogin;
