import axios from "axios";

const CompanyRegister = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_COMPANY_PENDING",
    });
    const result = await axios.post(
      `https://58c4-182-1-84-239.ap.ngrok.io/company/register`,
      data
    );
    const company = result.data.data;
    dispatch({
      type: "REGISTER_COMPANY_SUCCESS",
      payload: company,
    });
    navigate("/login-company");
    console.log("Company register success");
  } catch (error) {
    console.log("Company register failed");
    console.log(error);
  }
};

export default CompanyRegister;
