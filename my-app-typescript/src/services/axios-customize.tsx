import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export default instance;
