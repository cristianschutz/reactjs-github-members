import axios from "axios";

const api = axios.create({
  baseURL: `https://api.github.com`
});

export const params = {
  params: {}
};

export default api;
