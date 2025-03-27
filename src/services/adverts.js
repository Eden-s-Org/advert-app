import { apiClient } from "./config";

export const apiAddAdvert = async (payload) => {
  return apiClient.post("/advert", payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const apiGetAllAdverts = async () => apiClient.get("/advert");

// export const apiGetVendorAdverts = async() =>
//      apiClient.get("/vendor-adverts");

export const apiUpdateAdvert = async (id, payload) =>
  apiClient.patch(`/advert/${id}, payload`);

export const apiUpdatingAdvert = async (id, payload) =>
  apiClient.put(`/advert/${id}, payload`);

export const apiGetSingleAdvert = async () => apiClient.get(`/advert/${id}`);
