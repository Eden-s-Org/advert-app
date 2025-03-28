import { apiClient } from "./config";
// import axios from "axios";

export const apiSignup = async (payload) => {
  return apiClient.post("/users/register", payload);
};

export const apiLogin = async(payload) => {
    return apiClient.post("/users/login", payload)
};

export const apiVerifyEmail = async(payload) => {
    return apiClient.post("/users/verify-email", payload)
};

// export const apiLogin = (credentials) => {
//   return axios.post(
//     "https://advertising-api-1x6a.onrender.com/api/login",
//     credentials
//   );
// };
