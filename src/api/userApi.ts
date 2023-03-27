import axios from "axios";
import { baseUrl } from "./authApi";

const getAllusers = async () => {
  const response = await axios.get(`${baseUrl}users`);
  return response.data;
};

const updateUser = async (value: any, id: string) => {
  console.log({ value, id });
  const response = await axios.put(`${baseUrl}users/${id}`, value);
  return response.data;
};

const deleteUser = async (id: string) => {
  const response = await axios.delete(`${baseUrl}users/${id}`);
  return response.data;
};

export { getAllusers, updateUser, deleteUser };
