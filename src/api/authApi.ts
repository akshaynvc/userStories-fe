import axios from "axios";

export const baseUrl = process.env.REACT_APP_BASE_API_URL! || 'http://localhost:8000/api/'

const signup = async (value: any) => {
  const response = await axios.post(`${baseUrl}signup`, value);
  return response.data;
};

const loginApi =async (value: any) =>{
    const response = await axios.post(`${baseUrl}login`, value);
    return response.data;
}


export {
    signup,
    loginApi
}
