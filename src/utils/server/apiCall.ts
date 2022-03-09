import axios, { Method } from "axios";
const apiURL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : '';

const apiCall = async (
  endpoint = "",
  headers = {},
  method: Method = "GET",
  body = null
) => {
  const params = {
    method: method,
    url: `${apiURL}${endpoint}`,
    headers: headers,
  };
  try {
    let res = await axios(
      method === "DELETE" ? params : { ...params, data: body }
    );
    return res.data;
  } catch (err: any) {
    throw err.response ? err?.response?.data : err.message;
  }
};

export default apiCall;