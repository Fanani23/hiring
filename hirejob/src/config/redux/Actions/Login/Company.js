import axios from "axios";

const CompanyLogin = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_COMPANY_PENDING",
    });
    const result = await axios.post(
      `https://2ddc-182-1-66-90.ap.ngrok.io/company/login`,
      data
    );
    const company = result.data.data;
    localStorage.setItem("token", company.token);
    dispatch({
      type: "LOGIN_COMPANY_SUCCESS",
      payload: company,
    });
    navigate("/landing-login");
    console.log("Company login success");
  } catch (error) {
    console.log("Company login failed");
    console.log(error);
  }
};

export default CompanyLogin;
