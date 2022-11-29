import axios from "axios";

const EmployeeRegister = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_EMPLOYEE_PENDING",
    });
    const result = await axios.post(
      `https://2ddc-182-1-66-90.ap.ngrok.io/employee/register`,
      data
    );
    const employee = result.data.data;
    dispatch({
      type: "REGISTER_EMPLOYEE_SUCCESS",
      payload: employee,
    });
    navigate("/login-employee");
    console.log("Employee register success");
  } catch (error) {
    console.log("Employee register error");
    console.log(error);
  }
};

export default EmployeeRegister;
