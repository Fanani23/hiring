import axios from "axios";

const CompanyRegister = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_COMPANY_PENDING",
    });
    const result = await axios.post(
      `http://localhost:8000/company/register`,
      data
    );
    const company = result.data.data;
    dispatch({
      type: "REGISTER_COMPANY_SUCCESS",
      payload: company,
    });
    console.log("Company register success");
  } catch (error) {
    console.log("Company register error");
    console.log(error);
  }
};

export default CompanyRegister;
