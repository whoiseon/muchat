import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setToken = (name, token) => {

  axios.defaults.headers.common.Authorization = `${token}`;

  return cookies.set(name, token, {
    path: '/',
    httpOnly: true,
  });
};

export const getToken = (name) => {
  return cookies.get(name);
};
