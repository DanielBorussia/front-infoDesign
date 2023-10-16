import axios from "axios";

export const axiosInstanceInfoDesign = axios.create({
    baseURL: process.env.REACT_APP_API_DECAMERON_URL,
});

axiosInstanceInfoDesign.interceptors.response.use(
    (res) => res.data,
    (err) => {
      return new Promise((resolve, reject) => {
        reject(err.response.data);
      });
    }
  );
