import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.headers.post["content-type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axoios.create();
export const axiosRes = axios.create();