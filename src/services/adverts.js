import { apiClient } from "./config";

export const apiAddAdvert = async (payload) => {
  return apiClient.post("/advert", payload);
};

export const apiGetAllAdverts = async () => apiClient.get("/advert");

// export const apiGetVendorAdverts = async() =>
//      apiClient.get(`/advert/${userId}`);

export const apiUpdateAdvert = async (id, payload) => 
  apiClient.patch(`/advert/${id}`, payload);

export const apiDeleteAdvert = async (id) =>
  apiClient.delete(`/advert/${id}`);

// export const apiUpdatingAdvert = async (id, payload) =>
//   apiClient.put(`/advert/${id}`, payload);

export const apiGetSingleAdvert = async (id) => apiClient.get(`/advert/${id}`);
